import datetime

import factory
from django.contrib.auth.models import User

from baseApp.models import Language, UserProfile
from booksApp.models import Book, Author
from musicApp.models import Song, Artist
from postsApp.models import Post, ImagePost, Comment


class AuthorFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Author

    name = factory.Sequence(lambda n: f'test_name{n}')


class LanguageFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Language

    name = 'English'


class BookFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Book

    title = factory.Sequence(lambda n: f'test_book_{n}')
    text = factory.Sequence(lambda n: f'test_text_link_{n}')
    author = factory.SubFactory(AuthorFactory)
    cover_image = None
    languages = factory.SubFactory(LanguageFactory)

    # @factory.post_generation  # разобрать как работает
    # def languages(self, create, extracted, **kwargs):
    #     if not create:
    #         # Simple build, do nothing.
    #         return
    #
    #     if extracted:
    #         # A list of items were passed in, use them
    #         for lang in extracted:
    #             self.languages.add(lang)


class ArtistFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Artist

    name = factory.Sequence(lambda n: f'test_artist_{n}')


class SongFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Song

    title = factory.Sequence(lambda n: f'test_song_{n}')
    artist = factory.SubFactory(ArtistFactory)
    image = None
    audio_file = None
    audio_link = factory.Sequence(lambda n: f'test__{n}')
    duration = factory.Sequence(lambda n: f'test_duration_{n}')
    language = factory.SubFactory(LanguageFactory)


    # @factory.post_generation  # разобрать как работает
    # def language(self, create, extracted=('English',), **kwargs):
    #     if not create:
    #         # Simple build, do nothing.
    #         return
    #
    #     if extracted:
    #         # A list of items were passed in, use them
    #         for lang in extracted:
    #             self.language.add(lang)


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    first_name = factory.Sequence(lambda n: f'test_first_name_{n}')
    last_name = factory.Sequence(lambda n: f'test_last_name_{n}')
    username = factory.Sequence(lambda n: f'test_username_{n}')
    email = factory.Sequence(lambda n: f'test_email_{n}@gmail.com')
    password = factory.Sequence(lambda n: f'test_password_{n}')


class UserProfileFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = UserProfile

    user = factory.SubFactory(UserFactory)
    image = None
    description = factory.Sequence(lambda n: f'test_description_{n}')
    app_lang = factory.SubFactory(LanguageFactory)

    @factory.post_generation  # разобрать как работает
    def learning_langs(self, create, extracted, **kwargs):
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of items were passed in, use them
            for lang in extracted:
                self.learning_langs.add(lang)


class PostFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Post

    user = factory.Sequence(lambda _: UserProfileFactory.create().user)
    content = factory.Sequence(lambda n: f'test_content_{n}')
    likes = factory.Sequence(lambda n: n + 10)
    created_at = datetime.datetime.now()


class ImagePostFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = ImagePost

    image = 'test.png'
    post = factory.SubFactory(PostFactory)


class CommentFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Comment

    post = factory.SubFactory(PostFactory)
    user = factory.Sequence(lambda _: UserProfileFactory.create().user)
    text = factory.Sequence(lambda n: f'test_text_field_{n}')
    likes = factory.Sequence(lambda n: n + 10)
    created_at = datetime.datetime.now()