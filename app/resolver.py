import pandas as pd
import numpy as np
from pandas.core.computation.common import result_type_many


def random_items():
    movies_df = pd.read_csv("data/movies_final.csv")
    movies_df = movies_df.fillna('')
    result_items = movies_df.sample(n=10).to_dict("records")
    return result_items

def random_genres_item(genre):
    movies_df = pd.read_csv("data/movies_final.csv")
    genre_df = movies_df[movies_df['genres'].apply(lambda  x: genre in x.lower())]
    genre_df = genre_df.fillna('')
    # Todo 선택한 장르의 갯수가 5보다 작은 경우 처리해야함.
    result_items = genre_df.sample(n=5).to_dict("records")
    return result_items

# 지정된 장르를 포함하는 영화중 평점이 높은 5개의 영화를 추출해 표시함(추천)
def random_genres_item_best(genre):
    movies_df = pd.read_csv("data/movies_final.csv")
    genre_df = movies_df[movies_df['genres'].apply(lambda  x: genre in x.lower())]
    genre_df = genre_df.fillna('')
    result_items = (genre_df.query('rcount >= 5').sort_values('rmean', ascending=False).head(5).to_dict("records"))
    return result_items

