from rest_framework import serializers

from booksApp.models import Author


class AuthorSerializer(serializers.ModelSerializer):
    """
    Serializer to Author model to create, update, get
    """

    class Meta:
        model = Author
        fields = '__all__'
