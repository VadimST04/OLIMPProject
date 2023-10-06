from typing import Dict
import re

import requests
from bs4 import BeautifulSoup


def get_data_from_html(link: str) -> Dict[str, str]:
    """
    Make text readable from html and get title, author, lang from link
    """
    page = requests.get(link)
    soup = BeautifulSoup(page.text, 'html.parser')
    start_point = r'\*\*\*([\s\S]+?)\*\*\*'

    author = re.split(r'Author: ([\s\S]+?)\n', soup.get_text())[1].strip('\n')
    title = re.split(r'Title: ([\s\S]+?)\n', soup.get_text())[1].strip('\n')
    lang = re.split(r'Language: ([\s\S]+?)\n', soup.get_text())[1].strip('\n')
    text = re.split(start_point, soup.get_text())[2].strip('\n')

    return {'text': text, 'lang': lang, 'title': title, 'author': author}
