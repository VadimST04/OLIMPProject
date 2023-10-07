import requests
from rest_framework import serializers

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

        if requests.get(self.initial_data.get('text')).status_code == 200:
            return super().is_valid(raise_exception=raise_exception)
        raise requests.exceptions.ConnectionError('Incorrect link')

    def create(self, validated_data):
        """
        Method to replace a text field to a valid value
        """
        book_obj = Book.objects.create(**validated_data)

        book_obj.save()
        return book_obj

    class Meta:
        model = Book
        fields = ['title', 'text', 'author', 'languages']


class BookViewSerializer(serializers.ModelSerializer):
    """
    Serializer to retrieve all Book's instances according to User's learning languages
    """
    languages = serializers.StringRelatedField()
    author = serializers.SlugRelatedField(queryset=Author.objects.all(),
                                          slug_field='name')

    class Meta:
        model = Book
        exclude = ['id', 'text']


class BookDetailViewSerializer(serializers.ModelSerializer):
    """
    Serializer to retrieve all fields of specific Book instance
    """
    languages = serializers.SlugRelatedField(queryset=Language.objects.all(), required=False, slug_field='name')
    author = serializers.SlugRelatedField(queryset=Author.objects.all(), required=False, slug_field='name')

    class Meta:
        model = Book
        exclude = ['id']


class BookDeleteSerializer(serializers.ModelSerializer):
    """
    Serializer to delete a Book instance
    """
    class Meta:
        model = Book
        fields = ['id']


class BookUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer to update Book instance. All parameters are not required.
    """
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
        """
        If the field text is updated, check if the link is correct
        """
        if self.initial_data.get('text'):
            if requests.get(self.initial_data.get('text')).status_code == 200:
                return super().is_valid(raise_exception=raise_exception)
            raise requests.exceptions.ConnectionError('Incorrect link')
        return super().is_valid(raise_exception=raise_exception)

    def save(self, **kwargs):
        """
        Method to make text field readable using a function get_text_from_html
        :return: Book instance
        """
        book = super().save()
        book.save()
        return book

    class Meta:
        model = Book
        exclude = ['id']
