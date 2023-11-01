import json
import re

import pytest

from baseApp.models import Language

BOOK_PART_FOR_TEST = 'JACK DERRINGER'
pytestmark = pytest.mark.django_db


class TestBookModel:
    books_view_endpoint = '/api/books/view/'

    def test_all_books_page_authorized(self, api_client, book_factory, regular_user):
        ger = Language.objects.create(name='German')
        eng = Language.objects.get(name='English')

        book_factory.create_batch(5, languages=[ger])
        eng_books = book_factory.create_batch(5, languages=[eng])

        response = api_client().post(path=self.books_view_endpoint, data={'learning_langs': ['English']},
                                     HTTP_AUTHORIZATION='Bearer ' + regular_user.token)

        assert response.status_code == 200

        response_books = json.loads(response.content)

        assert len(eng_books) == len(response_books)

    def test_get_one_book(self, api_client, book_factory, regular_user):
        book_link_to_test = 'https://gutenberg.org/cache/epub/71996/pg71996-images.html'
        book = book_factory.create(text=book_link_to_test)

        custom_book_endpoint = f'{self.books_view_endpoint}{book.pk}/'

        response = api_client().get(path=custom_book_endpoint, HTTP_AUTHORIZATION='Bearer ' + regular_user.token)

        assert response.status_code == 200
        assert re.match(BOOK_PART_FOR_TEST, response.data.get('text'))

