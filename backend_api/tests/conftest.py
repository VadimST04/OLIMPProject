from pytest_factoryboy import register

from tests.factories import BookFactory, AuthorFactory, SongFactory, LanguageFactory, UserFactory, UserProfileFactory, \
    PostFactory, ImagePostFactory, CommentFactory, ArtistFactory

pytest_plugins = 'tests.fixtures'

register(BookFactory)
register(AuthorFactory)
register(SongFactory)
register(LanguageFactory)
register(UserFactory)
register(UserProfileFactory)
register(PostFactory)
register(ImagePostFactory)
register(CommentFactory)
register(ArtistFactory)

