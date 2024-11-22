from flask import Flask, request, jsonify
from notifs import Ranker, Notification
from datetime import datetime
import uuid
from reco import rank_articles_by_preference, model

app = Flask(__name__)
ranker = Ranker()


@app.route("/rank-notifications", methods=["POST"])
def rank_notifications():
    try:
        data = request.get_json()
        if not data or "notifications" not in data:
            return jsonify({"error": "No notifications provided"}), 400

        # Convert JSON data to Notification objects
        notifications = [
            Notification(
                uid=notif.get("uid", str(uuid.uuid4())),
                content=notif["content"],
                title=notif["title"],
                timestamp=datetime.fromisoformat(notif["timestamp"]),
                source=notif["source"],
                metadata=notif.get("metadata", {}),
            )
            for notif in data["notifications"]
        ]

        # Rank notifications
        ranked_notifications = ranker.rank(notifications)

        # Convert ranked notifications to JSON
        result = {"ranked_notifications": [n.to_dict() for n in ranked_notifications]}

        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy"})


@app.route("/recommend", methods=["POST"])
def recommend_articles():
    try:
        data = request.get_json()
        if not data or "user_preference" not in data or "articles" not in data:
            return jsonify({"error": "Missing user_preference or articles in request"}), 400

        ranked_results = rank_articles_by_preference(data["user_preference"], data["articles"], model)

        # Convert results to a more JSON-friendly format
        recommendations = [{"article": article, "score": float(score)} for article, score in ranked_results]

        return jsonify({"recommendations": recommendations})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
