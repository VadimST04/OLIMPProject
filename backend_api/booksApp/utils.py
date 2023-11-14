from typing import Dict
import re

import requests
from bs4 import BeautifulSoup


def get_data_from_html(book_data: str | requests.Response) -> Dict[str, str]:
    """
    book_data: if book_data is a link, function will make a request to the website
    Make text readable from html and get title, author, lang from link
    """
    if isinstance(book_data, str):
        book_data = requests.get(book_data)

    if book_data.status_code == 200:
        book_data.encoding = 'utf-8'
        soup = BeautifulSoup(book_data.text, 'html.parser')
        start_point = r'\*\*\*([\s\S]+?)\*\*\*'

        author = re.split(r'Author: ([\s\S]+?)\n', soup.get_text())[1].strip('\n')
        title = re.split(r'Title: ([\s\S]+?)\n', soup.get_text())[1].strip('\n')
        lang = re.split(r'Language: ([\s\S]+?)\n', soup.get_text())[1].strip('\n')
        text = re.split(start_point, soup.get_text())[2].strip('\n')

        return {'text': text, 'lang': lang, 'title': title, 'author': author}

    raise requests.exceptions.ConnectionError('Incorrect link')
