from pytest_factoryboy import register

from tests.factories import BookFactory, AuthorFactory, SongFactory, LanguageFactory

pytest_plugins = 'tests.fixtures'

register(BookFactory)
register(AuthorFactory)
register(SongFactory)
register(LanguageFactory)
