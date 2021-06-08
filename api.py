from sentence_transformers import SentenceTransformer, util


if __name__ == "__main__":
    sentence1 = "earth revolve around the sun"
    sentence2 = "earth circle around the sun"

    model = SentenceTransformer('stsb-mpnet-base-v2')
    embadding1 = model.encode(sentence1)
    embadding2 = model.encode(sentence2)

    similarity = round(util.pytorch_cos_sim(embadding1, embadding2).item(), 3)

    print(similarity)
