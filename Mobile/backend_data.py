import json
import requests


def login():
    url = 'http://127.0.0.1:8000/api/login/'

    data = {
        'username': 'admin',
        'password': 'root'
    }

    token = json.loads(requests.post(url=url, data=data).text)
    print(token['access'])
    return token['access']


def get_news():
    url = 'http://127.0.0.1:8000/api/news/'

    data = {
        "learning_langs": ["English"],
    }

    # headers = {
    #     "Content-type": "application/json",
    # }

    news = requests.post(url=url, json=data)
    return news.json()
