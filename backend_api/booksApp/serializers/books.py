import requests
from rest_framework import serializers

from baseApp.models import Language
from booksApp.models import Book, Author
from booksApp import utils


class BookRetrieveDSerializer(serializers.ModelSerializer):
    """
    A serializer for the Book model designed for Retrieve, Update, and Destroy operations.
    This serializer is used to convert Book model instances to JSON data and vice versa, specifically for
    retrieval, update, and deletion operations.
    """

    author = serializers.SlugRelatedField(
        queryset=Author.objects.all(),
        slug_field='name')
    languages = serializers.SlugRelatedField(
        queryset=Language.objects.all(),
        slug_field='name',
    )

    class Meta:
        """
        model (Model): The model class associated with the serializer.
        fields (str or tuple): The fields to include in the serialized representation.
        """

        model = Book
        fields = '__all__'


class BookRUDSerializer(serializers.ModelSerializer):
    """
    A serializer for the Book model designed for Retrieve, Update, and Destroy operations.
    This serializer is used to convert Book model instances to JSON data and vice versa, specifically for
    retrieval, update, and deletion operations.
    """

    author = serializers.SlugRelatedField(
        queryset=Author.objects.all(),
        slug_field='name')
    languages = serializers.SlugRelatedField(
        queryset=Language.objects.all(),
        slug_field='name',
    )

    class Meta:
        """
        model (Model): The model class associated with the serializer.
        fields (str or tuple): The fields to include in the serialized representation.
        """

        model = Book
        fields = ['id', 'cover_image_data', 'author', 'title', 'languages']


class BookCreateSerializer(serializers.ModelSerializer):
    """
    A serializer for creating Book instances.
    This serializer is used for creating new Book instances by converting incoming data to the appropriate format
    for database insertion.
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
        Validate the incoming data for book creation, including author auto-adding.
        This method performs validation checks on the incoming data, including making an HTTP request to retrieve
        additional data and handling author auto-adding. If the data is valid, it calls the parent class's
        is_valid method.
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
                    author_name = utils.get_data_from_html(data).get('author')
                    author = Author.objects.get(name=author_name)
            except Author.DoesNotExist:
                author = Author.objects.create(name=self.initial_data.get('author', author_name))

            self.initial_data['author'] = author.name
            return super().is_valid(raise_exception=raise_exception)

        raise requests.exceptions.ConnectionError('Incorrect link')

    def create(self, validated_data):
        """
        Create a new Book instance using the validated data.
        This method creates a new Book instance using the validated data, including handling related languages
        and setting the appropriate values for the Book object.
        Returns: The newly created Book instance.
        """
        languages_data = validated_data.pop('languages', [])
        book_obj = Book.objects.create(**validated_data)
        book_obj.languages.set(languages_data)
        book_obj.save()

        return book_obj

    class Meta:
        """
        model (Model): The model class associated with the serializer.
        fields (str or tuple): The fields to include in the serialized representation.
        """

        model = Book
        fields = ['title', 'text', 'author', 'languages']
