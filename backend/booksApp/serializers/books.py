import requests
from rest_framework import serializers

from baseApp.models import Language
from booksApp.models import Book, Author


class BookCreateSerializer(serializers.ModelSerializer):

    title = serializers.CharField()
    text = serializers.CharField()
    author = serializers.SlugRelatedField(required=False,
                                          queryset=Author.objects.all(),
                                          slug_field='name')
    languages = serializers.SlugRelatedField(
        queryset=Language.objects.all(),
        slug_field='name'
    )

    def is_valid(self, *, raise_exception=False):
        self.response = requests.get(self.initial_data.get('text'))

        if self.response.status_code == 200:
            return super().is_valid(raise_exception=raise_exception)
        raise Exception('Incorrect link')

    def create(self, validated_data):
        validated_data['text'] = self.response.text

        book_obj = Book.objects.create(**validated_data)

        book_obj.save()
        return book_obj

    class Meta:
        model = Book
        fields = ['title', 'text', 'author', 'languages', 'pages_count']
