import factory

from baseApp.models import Language
from booksApp.models import Book, Author
from musicApp.models import Song


class AuthorFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Author

    name = factory.Sequence(lambda n: f'test_name{n}')


class LanguageFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Language

    name = factory.Sequence(lambda n: f'test_name{n}')


class BookFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Book

    title = factory.Sequence(lambda n: f'test_book_{n}')
    text = factory.Sequence(lambda n: f'test_text_link_{n}')
    author = factory.SubFactory(AuthorFactory)
    cover_image = None

    @factory.post_generation  # разобрать как работает
    def languages(self, create, extracted, **kwargs):
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of items were passed in, use them
            for lang in extracted:
                self.languages.add(lang)


class SongFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Song

    title = factory.Sequence(lambda n: f'test_song_{n}')
    artist = factory.Sequence(lambda n: f'test_artist_{n}')
    image = None
    audio_file = None
    audio_link = factory.Sequence(lambda n: f'test__{n}')
    duration = factory.Sequence(lambda n: f'test_duration_{n}')

    @factory.post_generation  # разобрать как работает
    def language(self, create, extracted=('English',), **kwargs):
        if not create:
            # Simple build, do nothing.
            return

        if extracted:
            # A list of items were passed in, use them
            for lang in extracted:
                self.language.add(lang)

