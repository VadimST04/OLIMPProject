from rest_framework import serializers

from musicApp.models import Song


class SongSerializer(serializers.ModelSerializer):
    language = serializers.StringRelatedField(many=True)

    class Meta:
        model = Song
        fields = '__all__'
