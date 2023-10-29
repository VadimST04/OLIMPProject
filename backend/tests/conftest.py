from pytest_factoryboy import register

from tests.factories import BookFactory, AuthorFactory

pytest_plugins = 'tests.fixtures'

register(BookFactory)
register(AuthorFactory)
