# import os
import requests
from random import sample
from itertools import chain


# from dotenv import load_dotenv
#
# load_dotenv()


class News:
    """
    Class for news representation
    """

    # KEY = os.environ.get('NEWS_API_KEY')
    KEY = 'pub_3343026f2f6cde66d2da82dff77341bfda05e'
    API_URL = f'https://newsdata.io/api/1/news?apikey={KEY}&timeframe=24&full_content=1&image=1'

    LANGUAGES_NEWS = {
        'English': requests.get(
            f'{API_URL}&language=en').json()[
            'results'],
        'German': requests.get(
            f'{API_URL}&language=de').json()[
            'results'],
        'French': requests.get(
            f'{API_URL}&language=fr').json()[
            'results'],
        'Hebrew': requests.get(
            f'{API_URL}&language=he').json()[
            'results'],
        'Italian': requests.get(
            f'{API_URL}&language=it').json()[
            'results'],
        'Arabic': requests.get(
            f'{API_URL}&language=ar').json()[
            'results'],
        'Armenian': requests.get(
            f'{API_URL}&language=hy').json()[
            'results'],
        'Ukrainian': requests.get(
            f'{API_URL}&language=uk').json()[
            'results'],
        'Spanish': requests.get(
            f'{API_URL}&language=sp').json()[
            'results'],
        'Swedish': requests.get(
            f'{API_URL}&language=sv').json()[
            'results'],
    }

    @staticmethod
    def create_news_object(item):
        print(item)
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

        print(langs)
        news = [cls.LANGUAGES_NEWS[lang] for lang in langs]
        news = list(chain.from_iterable(news))
        news = list(map(cls.create_news_object, news))
        news = sample(news, len(news))

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
