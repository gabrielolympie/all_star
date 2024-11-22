recommend
curl -X POST http://localhost:5000/recommend -H "Content-Type: application/json" -d "{\"user_preference\": \"I love outdoor activities and hiking\", \"articles\": [\"Hiking in the mountains\", \"Indoor cooking tips\", \"Rock climbing basics\"]}"

>>> {
  "recommendations": [
    {
      "article": "Hiking in the mountains",
      "score": 0.5813987255096436
    },
    {
      "article": "Rock climbing basics",
      "score": 0.42914509773254395
    },
    {
      "article": "Indoor cooking tips",
      "score": 0.3327499032020569
    }
  ]
}

--------

notifications
curl -X POST http://localhost:5000/rank-notifications -H "Content-Type: application/json" -d "{\"notifications\": [{\"content\": \"Your flight is delayed\", \"title\": \"Flight Update\", \"timestamp\": \"2024-03-19T14:30:00\", \"source\": \"Airline App\", \"metadata\": {\"flight\": \"AA123\"}}, {\"content\": \"Weather alert: Heavy rain expected\", \"title\": \"Weather Alert\", \"timestamp\": \"2024-03-19T14:00:00\", \"source\": \"Weather App\"}]}"


>>> {
  "ranked_notifications": [
    {
      "content": "Your flight is delayed",
      "metadata": {
        "flight": "AA123"
      },
      "scores": {
        "digest": "Flight Delay",
        "relevance_score": 80,
        "urgency_score": 80
      },
      "source": "Airline App",
      "timestamp": "2024-03-19T14:30:00",
      "title": "Flight Update",
      "uid": "374e1086-6aac-4c9d-bf8b-1419d066c2a6"
    },
    {
      "content": "Weather alert: Heavy rain expected",
      "metadata": {},
      "scores": {
        "digest": "Heavy rain expected",
        "relevance_score": 80,
        "urgency_score": 60
      },
      "source": "Weather App",
      "timestamp": "2024-03-19T14:00:00",
      "title": "Weather Alert",
      "uid": "5e2b1e81-ae35-4564-b8df-963bf5b51b13"
    }
  ]
}