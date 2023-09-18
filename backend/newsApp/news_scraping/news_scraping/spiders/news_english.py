import scrapy


class NewsEnglishSpider(scrapy.Spider):
    name = "news_english"
    allowed_domains = ["cpj.org"]
    start_urls = ["https://cpj.org/thetorch/?page=1"]

    custom_settings = {
        'FEEDS': {'../../static/data/news_english_data.json': {'format': 'json', 'overwrite': True}}
    }\


    def parse(self, response):
        all_page_news = response.css('.cpj--inline-cols .col-sm-12')
        for page_news in all_page_news:
            title = page_news.css('h3::text').get()
            brief_description = page_news.css('.article--preview p::text').get()
            datetime = page_news.css('time::attr(datetime)').get()
            news_image = page_news.css('img::attr(src)').get()
            news_detail_link = page_news.css('figure a::attr(href)').get()

            yield scrapy.Request(url=news_detail_link, callback=self.parse_news_detail,
                                 meta={'title': title, 'brief_description': brief_description,
                                       'datetime': datetime, 'news_image': news_image})

    def parse_news_detail(self, response):
        title = response.request.meta['title']
        brief_description = response.request.meta['brief_description']
        datetime = response.request.meta['datetime']
        news_image = response.request.meta['news_image']

        article = '\n'.join(response.css('.col-sm-7 p').getall()[1:6])

        yield {
            'title': title,
            'brief_description': brief_description,
            'datetime': datetime,
            'news_image': news_image,
            'article': article,
        }
