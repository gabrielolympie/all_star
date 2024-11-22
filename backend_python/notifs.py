import json
import uuid
from datetime import datetime
from pathlib import Path
from tqdm import tqdm

from mirascope.core import Messages, groq
from pydantic import BaseModel, ConfigDict, Field


LLM_MODEL = "llama-3.2-3b-preview"
# LLM_MODEL = "llama-3.1-70b-versatile"
# LLM_MODEL = "llama-3.1-8b-instant"
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
    ):
        self.uid = uid
        self.content = content
        self.title = title
        self.timestamp = timestamp
        self.source = source
        self.metadata = metadata
        self.scores = {}

    def __repr__(self):
        return (
            f"Notification(uid={self.uid}, title={self.title}, content={self.content}, "
            f"timestamp={self.timestamp.strftime('%Y-%m-%d %H:%M:%S')}, source={self.source})"
        )

    def __str__(self):
        return f"""Notification(title="{self.title}", content="{self.content}", source="{self.source}")"""

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

    def to_dict(self) -> dict:
        return {
            "uid": self.uid,
            "content": self.content,
            "title": self.title,
            "timestamp": self.timestamp.isoformat(),
            "source": self.source,
            "metadata": self.metadata,
            "scores": self.scores,
        }


class NotificationScore(BaseModel):
    digest: str = Field(..., examples=["2-hour flight delay for AB123"])
    relevance_score: int = Field(..., examples=[85])
    urgency_score: int = Field(..., examples=[90])

    model_config = ConfigDict(
        json_schema_extra={
            "examples": [
                {
                    "digest": "Immediate response needed",
                    "relevance_score": 70,
                    "urgency_score": 100,
                },
                {
                    "digest": "50% off weekend sale on nike snickers",
                    "relevance_score": 30,
                    "urgency_score": 20,
                },
                {
                    "digest": "New comment on facebook post",
                    "relevance_score": 25,
                    "urgency_score": 10,
                },
            ]
        }
    )


@groq.call(LLM_MODEL, response_model=NotificationScore, json_mode=True)
def score_notification(notification_str: str) -> str:
    return f"""Score this notification's relevance and urgency on a scale of 0-100.

Consider factors like:
- Time sensitivity of the content
- Impact on user's daily life
- Type of notification (alerts vs promotional)
- Source importance

Return:
- digest: brief 2-5 word summary
- relevance_score: number between 0-100
- urgency_score: number between 0-100

Notification to score:

{notification_str}"""


class Ranker:
    def rank(self, notifications: list[Notification]) -> list[Notification]:

        for notification in tqdm(notifications):
            score = score_notification(str(notification))
            notification.scores = score.model_dump()

        # Sort by urgency and relevance
        notifications.sort(key=lambda x: (x.scores["urgency_score"], x.scores["relevance_score"]), reverse=True)
        return notifications

    def process_json_file(self, input_path: str, output_path: str) -> None:
        """Process notifications from a JSON file and write ranked results to another JSON file."""
        with open(input_path) as f:
            notifications = [Notification.from_dict(n) for n in json.load(f)["notifications"]]

        ranked = self.rank(notifications)

        with open(output_path, "w") as f:
            json.dump({"ranked_notifications": [n.to_dict() for n in ranked]}, f, indent=2)


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
            metadata={"severity": "Low", "region": "Downtown"},
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

    # notifications = notifications[:3]

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
