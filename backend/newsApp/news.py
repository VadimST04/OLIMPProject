import requests
from random import shuffle
from itertools import chain


class News:
    """
    Class for news representation
    """

    LANGUAGES_NEWS = {
        'English': requests.get(
            'https://newsdata.io/api/1/news?apikey=pub_302653a0c64258bbef513eca1345b75be0e9f&timeframe=24&full_content=1&language=en').json()[
            'results'],
        'German': requests.get(
            'https://newsdata.io/api/1/news?apikey=pub_302653a0c64258bbef513eca1345b75be0e9f&timeframe=24&full_content=1&language=de').json()[
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

    @staticmethod
    def get_news(langs):
        """
        Main function that on base of user's languages return news
        :param langs: list of languages that user learns
        :return: article objects (dictionaries)
        """
        news = [News.LANGUAGES_NEWS[lang] for lang in langs]
        news = list(chain.from_iterable(news))
        news = list(map(News.create_news_object, news))
        shuffle(news)
        return news

    @staticmethod
    def print_get_news(langs):
        """
        Function to print news in console (for developers)
        :param langs:
        :return: None
        """
        news = News.get_news(langs)
        print(news)


if __name__ == '__main__':
    news = News.get_news(['English'])
    print(news)
