# This file will be deleted in the future
# It is a test file for running Spider out of file
# It does not work for now in a right way
from scrapy.crawler import CrawlerProcess

from newsApp.news_scraping.news_scraping.spiders.news_english import NewsEnglishSpider


def main():
    process = CrawlerProcess()
    process.crawl(NewsEnglishSpider)
    process.start()


if __name__ == '__main__':
    main()
