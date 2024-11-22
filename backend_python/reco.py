from sentence_transformers import SentenceTransformer

model = SentenceTransformer("nomic-ai/nomic-embed-text-v1.5", trust_remote_code=True)


def rank_articles_by_preference(
    user_preference: str, articles: list[str], model: SentenceTransformer
) -> list[tuple[str, float]]:
    # Prepare the query and documents
    query = [f"search_query: {user_preference}"]
    documents = [f"search_document: {article}" for article in articles]

    # Generate embeddings
    query_embeddings = model.encode(query)
    document_embeddings = model.encode(documents)

    # Calculate similarities
    similarities = model.similarity(document_embeddings, query_embeddings)
    # tensors to lists
    similarities = similarities.tolist()

    # Create pairs of (article, similarity_score) and sort by score in descending order
    ranked_articles = list(zip(articles, sum(similarities, [])))
    ranked_articles.sort(key=lambda x: x[1], reverse=True)

    return ranked_articles


if __name__ == "__main__":
    articles = [
        "Soccer is a popular sport played worldwide, featuring two teams of 11 players each competing to score goals.",
        "Photography enthusiasts often start with basic DSLR cameras to learn composition and lighting techniques.",
        "Rock climbing combines physical strength with problem-solving skills, making it both a mental and physical workout.",
        "New Python framework for machine learning, it enables you to build and train LLM models with ease.",
        "Hiking trails in national parks offer breathtaking views and connect people with nature's wonders.",
        "Scuba diving allows explorers to discover vibrant coral reefs and marine life in tropical waters.",
        "Artificial Intelligence is revolutionizing how we approach complex problem-solving in technology.",
        "Gardening is a rewarding hobby that combines outdoor activity with the satisfaction of growing your own food.",
        "Mountain biking trails provide exciting challenges for riders while exploring scenic wilderness areas.",
    ]

    user_preference = """
    I'm passionate about outdoor activities and adventure sports, especially those that combine 
    physical challenges with natural exploration. I enjoy activities that push my limits and 
    allow me to discover new environments, whether it's in the mountains, forests, or ocean. 
    I'm particularly drawn to activities that require both mental and physical engagement.
    """

    ranked_results = rank_articles_by_preference(user_preference, articles, model)

    # Print results
    for article, score in ranked_results:
        print(f"Score: {score:.2f} | Article: {article}")
