import requests
from random import shuffle
from itertools import chain


class News:
    """
    Class for news representation
    """

    API_URL = 'https://newsdata.io/api/1/news?apikey=pub_3343026f2f6cde66d2da82dff77341bfda05e&timeframe=24&full_content=1&image=1'

    LANGUAGES_NEWS = {
        'English': requests.get(
            f'{API_URL}&language=en').json()[
            'results'],
        'German': requests.get(
            f'{API_URL}&language=de').json()[
            'results'],
    }

    @staticmethod
    def create_news_object(item):
        return {
            'title': item['title'],
            'link': item['link'],
            'author': item['creator'],
            'description': item['description'],
            'content': item['content'],
            'pub_date': item['pubDate'],
            'image_url': item['image_url'],
            'source_id': item['source_id'],
            'country': item['country'],
            'language': item['language'],
        }

    @classmethod
    def get_news(cls, langs):
        """
        Main function that on base of user's languages return news
        :param langs: list of languages that user learns
        :return: article objects (dictionaries)
        """
        news = [cls.LANGUAGES_NEWS[lang] for lang in langs]
        news = list(chain.from_iterable(news))
        news = list(map(cls.create_news_object, news))
        shuffle(news)
        return news

    @classmethod
    def print_get_news(cls, langs):
        """
        Function to print news in console (for developers)
        :param langs:
        :return: None
        """
        news = cls.get_news(langs)
        print(news)


if __name__ == '__main__':
    all_news = News.get_news(['English'])
    print(all_news)
