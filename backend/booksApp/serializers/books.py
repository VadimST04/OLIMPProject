import requests
from rest_framework import serializers

from baseApp.models import Language
from booksApp.models import Book, Author
from booksApp import utils


class BookRUDSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(
        queryset=Author.objects.all(),
        slug_field='name')
    languages = serializers.SlugRelatedField(
        queryset=Language.objects.all(),
        slug_field='name',
        many=True,
    )

    class Meta:
        model = Book
        fields = '__all__'


class BookCreateSerializer(serializers.ModelSerializer):
    """
    Serializer to create a Book instance
    """
    author = serializers.SlugRelatedField(
        queryset=Author.objects.all(),
        slug_field='name')
    languages = serializers.SlugRelatedField(
        queryset=Language.objects.all(),
        slug_field='name',
        many=True,
    )

    def is_valid(self, *, raise_exception=False):
        """
        Method to check if the link is valid
        """
        data = requests.get(self.initial_data.get('text'))

        if data.status_code == 200:
            """
            Author auto adding, it checks if the field wasn't empty, if it is takes author name from website
            and put the data into the database 
            """
            try:
                if self.initial_data.get('author') is not None:
                    author = Author.objects.get(name=self.initial_data.get('author', None))
                else:
                    author_name = utils.get_data_from_html(self.initial_data.get('text')).get('author')
                    author = Author.objects.get(name=author_name)
            except Author.DoesNotExist:
                author = Author.objects.create(name=self.initial_data.get('author', author_name))

            self.initial_data['author'] = author.name
            return super().is_valid(raise_exception=raise_exception)

        raise requests.exceptions.ConnectionError('Incorrect link')

    def create(self, validated_data):
        """
        Method to replace a text field to a valid value
        """
        languages_data = validated_data.pop('languages', [])
        book_obj = Book.objects.create(**validated_data)
        book_obj.languages.set(languages_data)
        book_obj.save()

        return book_obj

    class Meta:
        model = Book
        fields = ['title', 'text', 'author', 'languages']
