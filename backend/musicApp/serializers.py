from rest_framework import serializers

from musicApp.models import Song


class SongSerializer(serializers.ModelSerializer):
    language = serializers.StringRelatedField()

    class Meta:
        model = Song
        fields = '__all__'
