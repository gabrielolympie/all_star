import json
import uuid
from datetime import datetime
from pathlib import Path

from mirascope.core import Messages, groq
from pydantic import BaseModel, ConfigDict, Field


# LLM_MODEL = "llama-3.2-3b-preview"
# LLM_MODEL = "llama-3.1-70b-versatile"
LLM_MODEL = "llama-3.1-8b-instant"
# LLM_MODEL = "llama3-groq-70b-8192-tool-use-preview"
# LLM_MODEL = "llama3-groq-8b-8192-tool-use-preview"


class Notification:
    def __init__(
        self,
        uid: str,
        content: str,
        title: str,
        timestamp: datetime,
        source: str,
        metadata: dict,
        batch_id: int = None,
    ):
        self.uid = uid
        self.batch_id = batch_id
        self.content = content
        self.title = title
        self.timestamp = timestamp
        self.source = source  # app name
        self.metadata = metadata

    def __repr__(self):
        return (
            f"Notification(uid={self.uid}, title={self.title}, content={self.content}, "
            f"timestamp={self.timestamp.strftime('%Y-%m-%d %H:%M:%S')}, source={self.source})"
        )

    def to_str(self, batch_id: int = None):
        return (
            f"""Notification(batch_id={str(self.batch_id)}, title="{self.title}", content="{self.content}", """
            f"""timestamp="{self.timestamp.strftime('%Y-%m-%d %H:%M:%S')}", source="{self.source}")"""
        )

    @classmethod
    def from_dict(cls, data: dict) -> "Notification":
        return cls(
            uid=data["uid"],
            content=data["content"],
            title=data["title"],
            timestamp=datetime.fromisoformat(data["timestamp"]),
            source=data["source"],
            metadata=data.get("metadata", {}),
        )

    def to_dict(self, batch_id: int = None) -> dict:
        as_dict = {
            "uid": self.uid,
            "content": self.content,
            "title": self.title,
            "timestamp": self.timestamp.isoformat(),
            "source": self.source,
            "metadata": self.metadata,
            "batch_id": self.batch_id,
        }
        return as_dict


class NotificationScore(BaseModel):
    batch_id: int = Field(..., examples=[0])
    title: str = Field(..., examples=["Flight Delay Alert"])
    digest: str = Field(..., examples=["2-hour flight delay for AB123"])
    relevance_score: int = Field(..., examples=[85])
    urgency_score: int = Field(..., examples=[90])

    model_config = ConfigDict(
        json_schema_extra={
            "examples": [
                {
                    "batch_id": 0,
                    "title": "Flight Delay Alert",
                    "digest": "2-hour flight delay for AB123",
                    "relevance_score": 80,
                    "urgency_score": 100,
                },
                {
                    "batch_id": 1,
                    "title": "System Update",
                    "digest": "Critical security patch required",
                    "relevance_score": 90,
                    "urgency_score": 75,
                },
                {
                    "batch_id": 2,
                    "title": "Emergency Message",
                    "digest": "Immediate response needed",
                    "relevance_score": 70,
                    "urgency_score": 100,
                },
                {
                    "batch_id": 3,
                    "title": "Sale Alert",
                    "digest": "50% off weekend sale",
                    "relevance_score": 30,
                    "urgency_score": 20,
                },
                {
                    "batch_id": 4,
                    "title": "Weather Update",
                    "digest": "Heavy rain forecast today",
                    "relevance_score": 50,
                    "urgency_score": 25,
                },
                {
                    "batch_id": 5,
                    "title": "Social Update",
                    "digest": "New comment on post",
                    "relevance_score": 25,
                    "urgency_score": 10,
                },
            ]
        }
    )


class Ranker:
    def __init__(self):
        pass

    @staticmethod
    @groq.call(LLM_MODEL, response_model=list[NotificationScore], json_mode=True)
    def _score_notifications(notifications_str: str) -> str:
        return """Given these notifications, score each one's relevance and urgency on a scale of 0-100. Return all notifications with their scores.

Consider factors like:
- Time sensitivity of the content
- Impact on user's daily life
- Type of notification (alerts vs promotional)
- Source importance

Return scores for each notification with:
- batch_id: the same batch_id as the notification
- title: the notification title
- digest: brief 2-5 word summary
- relevance_score: number between 0-100
- urgency_score: number between 0-100

Notifications to score:

{notifications_str}"""

    def rank(self, notifications: list[Notification]) -> list[tuple[Notification, NotificationScore]]:
        for i, notification in enumerate(notifications):
            notification.batch_id = i

        notifications_str = "\n\n".join(n.to_str(n.batch_id) for n in notifications)
        scores = self._score_notifications(notifications_str)

        print(notifications_str)

        scores.sort(key=lambda x: x.batch_id)
        ranked_notifications = list(zip(notifications, scores))
        ranked_notifications.sort(key=lambda x: (x[1].urgency_score, x[1].relevance_score), reverse=True)
        return ranked_notifications

    def process_json_file(self, input_path: str, output_path: str) -> None:
        """Process notifications from a JSON file and write ranked results to another JSON file."""
        with open(input_path, "r") as f:
            data = json.load(f)

        notifications = [Notification.from_dict(n) for n in data["notifications"]]
        ranked = self.rank(notifications)

        output_data = {
            "ranked_notifications": [
                {
                    "notification": notif.to_dict(),
                    "score": {
                        "batch_id": score.batch_id,
                        "title": score.title,
                        "digest": score.digest,
                        "relevance_score": score.relevance_score,
                        "urgency_score": score.urgency_score,
                    },
                }
                for notif, score in ranked
            ]
        }

        with open(output_path, "w") as f:
            json.dump(output_data, f, indent=2)


# Example usage
if __name__ == "__main__":

    # Example Notifications
    notifications = [
        Notification(
            uid=str(uuid.uuid4()),
            content="Your package has been shipped and is on its way!",
            title="Shipping Update",
            timestamp=datetime(2023, 10, 15, 14, 30),
            source="E-commerce App",
            metadata={"order_id": "12345", "carrier": "UPS"},
        ),
        Notification(
            uid=str(uuid.uuid4()),
            content="Don't forget your meeting at 3 PM today.",
            title="Meeting Reminder",
            timestamp=datetime(2023, 10, 15, 9, 0),
            source="Calendar App",
            metadata={"meeting_id": "67890", "location": "Office Room 2"},
        ),
        Notification(
            uid=str(uuid.uuid4()),
            content="I need you right now, answer me!",
            title="New Message",
            timestamp=datetime(2023, 10, 15, 12, 15),
            source="Messaging App",
            metadata={"sender_id": "friend_001", "message_id": "msg_123"},
        ),
        Notification(
            uid=str(uuid.uuid4()),
            content="Heavy rain expected this evening in your area.",
            title="Weather Alert",
            timestamp=datetime(2023, 10, 15, 7, 45),
            source="Weather App",
            metadata={"severity": "High", "region": "Downtown"},
        ),
        Notification(
            uid=str(uuid.uuid4()),
            content="Your weekly activity report is ready.",
            title="Weekly Report",
            timestamp=datetime(2023, 10, 14, 18, 0),
            source="Fitness Tracker",
            metadata={"report_period": "last_week", "steps_count": 70000},
        ),
        Notification(
            uid=str(uuid.uuid4()),
            content="New comment on your photo.",
            title="Social Media Update",
            timestamp=datetime(2023, 10, 15, 10, 20),
            source="Social Media App",
            metadata={"post_id": "photo_789", "commenter_id": "user_456"},
        ),
        Notification(
            uid=str(uuid.uuid4()),
            content="Flash sale starts now! Up to 50% off.",
            title="Limited Time Offer",
            timestamp=datetime(2023, 10, 15, 11, 0),
            source="Shopping App",
            metadata={"sale_end_time": "18:00", "discount_rate": "50%"},
        ),
        Notification(
            uid=str(uuid.uuid4()),
            content="System update available. Please restart your device.",
            title="Update Notification",
            timestamp=datetime(2023, 10, 15, 8, 0),
            source="Device Manager",
            metadata={"update_version": "v1.2.3", "required_space": "500MB"},
        ),
        Notification(
            uid=str(uuid.uuid4()),
            content="Your flight has been delayed by two hours.",
            title="Travel Update",
            timestamp=datetime(2023, 10, 15, 13, 30),
            source="Airline App",
            metadata={"flight_number": "AB123", "new_departure_time": "16:00"},
        ),
        Notification(
            uid=str(uuid.uuid4()),
            content="Congratulations! You have won a prize in our sweepstakes.",
            title="Prize Winner Announcement",
            timestamp=datetime(2023, 10, 15, 16, 0),
            source="Contest Organizer",
            metadata={"prize_id": "prize_001", "claim_deadline": "2023-10-20"},
        ),
    ]

    # Write example notifications to JSON
    example_data = {"notifications": [n.to_dict() for n in notifications]}

    # Write examples to file
    examples_path = Path("data/input/example_notifications.json")
    with open(examples_path, "w") as f:
        json.dump(example_data, f, indent=2)

    # Process examples
    ranker = Ranker()
    ranker.process_json_file(
        input_path="data/input/example_notifications.json", output_path="data/output/ranked_notifications.json"
    )
