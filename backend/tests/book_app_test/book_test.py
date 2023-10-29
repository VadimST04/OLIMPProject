from functools import reduce
import json

import pytest
from django.http import HttpRequest
from rest_framework.request import Request

import tests.utils as utils
from baseApp.models import Language

pytestmark = pytest.mark.django_db


class TestBookModel:
    all_books_view_endpoint = '/api/books/view/'

    def test_all_books_view_page_unauthorized(self, client, book_factory):
        book_factory.create_batch(4)

        response = client.get(self.all_books_view_endpoint)

        assert response.status_code == 200
        assert len(json.loads(response.content)) == 4

    def test_all_books_page_authorized(self, client, book_factory, regular_user):
        ger = Language.objects.create(name='German')
        eng = Language.objects.get(name='English')

        ger_books = book_factory.create_batch(5, languages=[ger])
        eng_books = book_factory.create_batch(5, languages=[eng])
        all_books = [*ger_books, *eng_books]

        temp = HttpRequest()
        custom_request = Request(request=temp)
        custom_request.data['learning_langs'] = 'English'
        custom_request.user = regular_user.data

        response = client.post(self.all_books_view_endpoint, request=custom_request,
                               HTTPS_AUTHORIZATION='Bearer ' + regular_user.token)

        assert response.status_code == 200

        response_books = json.loads(response.content)
        print()
