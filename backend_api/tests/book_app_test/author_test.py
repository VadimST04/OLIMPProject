import pytest
from booksApp.models import Author


class TestAuthor:
    endpoint = '/api/books/authors/'

    @pytest.mark.django_db
    def test_get_author(self, client, regular_user):
        # author = Author.objects.create(name='test_name')
        Author(name='test_name')

        response = client.get(self.endpoint, HTTP_AUTHORIZATION='Bearer ' + regular_user.token)
        # expected_response = {'id': author.pk, 'name': author.name}

        assert response.status_code == 200
# assert response.data == expected_response


def test_root(client):
    response = client.get('/')

    assert response.status_code == 404
