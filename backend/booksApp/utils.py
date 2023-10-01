import re

from bs4 import BeautifulSoup


def get_text_from_html(text):
    soup = BeautifulSoup(text, 'html.parser')
    start_point = r'\*\*\*([\s\S]+?)\*\*\*'

    return re.split(start_point, soup.get_text())[2].strip('\n')
