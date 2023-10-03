import requests
from rest_framework import serializers

import booksApp.utils as utils
from baseApp.models import Language
from booksApp.models import Book, Author


class BookCreateSerializer(serializers.ModelSerializer):
    """
    Serializer to create a Book instance
    """
    author = serializers.SlugRelatedField(
        required=False,
        queryset=Author.objects.all(),
        slug_field='name')
    languages = serializers.SlugRelatedField(
        queryset=Language.objects.all(),
        slug_field='name'
    )

    def is_valid(self, *, raise_exception=False):
        """
        Method to check if the link is valid
        """
        self.response = requests.get(self.initial_data.get('text'))

        if self.response.status_code == 200:
            return super().is_valid(raise_exception=raise_exception)
        raise requests.exceptions.ConnectionError('Incorrect link')

    def create(self, validated_data):
        """
        Method to replace a text field to a valid value
        """
        validated_data['text'] = utils.get_text_from_html(self.response.text)

        book_obj = Book.objects.create(**validated_data)

        book_obj.save()
        return book_obj

    class Meta:
        model = Book
        fields = ['title', 'text', 'author', 'languages', 'pages_count']


class BookViewSerializer(serializers.ModelSerializer):
    languages = serializers.StringRelatedField()
    author = serializers.SlugRelatedField(queryset=Author.objects.all(),
                                          slug_field='name')

    class Meta:
        model = Book
        exclude = ['id', 'text']


class BookDetailViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        exclude = ['id']


class BookDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id']


class BookUpdateSerializer(serializers.ModelSerializer):
    title = serializers.CharField(required=False)
    text = serializers.CharField(required=False)
    cover_image = serializers.ImageField(required=False)
    pages_count = serializers.IntegerField(required=False)
    languages = serializers.SlugRelatedField(required=False,
                                             queryset=Language.objects.all(),
                                             slug_field='name')
    author = serializers.SlugRelatedField(required=False,
                                          queryset=Author.objects.all(),
                                          slug_field='name')

    def is_valid(self, *, raise_exception=False):
        if self.initial_data.get('text'):
            self.response = requests.get(self.initial_data.get('text'))

            if self.response.status_code == 200:
                return super().is_valid(raise_exception=raise_exception)
            raise requests.exceptions.ConnectionError('Incorrect link')
        return super().is_valid(raise_exception=raise_exception)

    def save(self, **kwargs):
        book = super().save()
        book.text = utils.get_text_from_html(self.response.text)

        book.save()
        return book

    class Meta:
        model = Book
        exclude = ['id']
