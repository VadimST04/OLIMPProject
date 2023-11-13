from rest_framework import serializers

from musicApp.models import Song


class SongSerializer(serializers.ModelSerializer):
    """
    A serializer for the Song model.
    This serializer is used to convert Song model instances to JSON data and vice versa.
    """

    language = serializers.StringRelatedField(many=True)

    class Meta:
        """
        model (Model): The model class associated with the serializer (Song in this case).
        fields (str or tuple): The fields to include in the serialized representation.
        """

        model = Song
        fields = '__all__'
