from rest_framework import serializers

from booksApp.models import Author


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class AuthorDeleteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = ['id']
