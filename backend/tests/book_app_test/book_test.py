import json

import pytest

from baseApp.models import Language

pytestmark = pytest.mark.django_db


class TestBookModel:
    books_view_endpoint = '/api/books/view/'

    def test_all_books_page_authorized(self, api_client, book_factory, regular_user):
        ger = Language.objects.get(name='German')
        eng = Language.objects.get(name='English')
        ital = Language.objects.create(name='Italian')

        book_factory.create_batch(5, languages=[ger])
        eng_books = book_factory.create_batch(5, languages=[eng])
        ital_books = book_factory.create_batch(5, languages=[ital])

        response = api_client().post(path=self.books_view_endpoint, data={'learning_langs': ['English', 'German']},
                                     HTTP_AUTHORIZATION='Bearer ' + regular_user.token)

        assert response.status_code == 200

        response_books = json.loads(response.content)
        assert len(eng_books) + len(ital_books) == len(response_books)

    def test_get_one_book_authorized(self, api_client, book_factory, regular_user):
        book_link_to_test = 'https://gutenberg.org/cache/epub/71996/pg71996-images.html'
        book = book_factory.create(text=book_link_to_test)

        custom_book_endpoint = f'{self.books_view_endpoint}{book.pk}/'

        response = api_client().get(path=custom_book_endpoint, HTTP_AUTHORIZATION='Bearer ' + regular_user.token)

        assert response.status_code == 200

    def test_get_one_book_unauthorized(self, api_client, book_factory):
        book_link_to_test = 'https://gutenberg.org/cache/epub/71996/pg71996-images.html'
        book = book_factory.create(text=book_link_to_test)

        custom_book_endpoint = f'{self.books_view_endpoint}{book.pk}/'

        response = api_client().get(path=custom_book_endpoint)

        assert response.status_code == 401
