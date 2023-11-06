from rest_framework import serializers

from booksApp.models import Author


class AuthorSerializer(serializers.ModelSerializer):
    """
    A serializer for the Author model.
    This serializer is used to convert Author model instances to JSON data and vice versa.
    """

    class Meta:
        """
        model (Model): The model class associated with the serializer (Author in this case).
        fields (str or tuple): The fields to include in the serialized representation.
        """

        model = Author
        fields = '__all__'
