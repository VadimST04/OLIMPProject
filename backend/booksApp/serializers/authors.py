from rest_framework import serializers

from booksApp.models import Author


class AuthorSerializer(serializers.ModelSerializer):
    """
    Serializer to Author model to create, update, get
    """
    class Meta:
        model = Author
        fields = '__all__'


class AuthorDeleteSerializer(serializers.ModelSerializer):
    """
    Serializer to Author model to delete
    """

    class Meta:
        model = Author
        fields = ['id']
