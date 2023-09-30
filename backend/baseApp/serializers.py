from django.contrib.auth.models import User
from rest_framework import serializers

from baseApp.models import UserProfile


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for User model objects.
    This serializer is used to transform User info from database into JSON representations.
    """

    # user_profile = UserProfileSerializer(read_only=True)

    class Meta:
        """
        model: The User model to serialize.
        fields: The fields from the User model to include in the serialized representation.
        """

        model = User
        fields = ['username', 'password', 'email']


class UserProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for UserProfile model objects.
    This serializer is used to transform UserProfile and a specific user's info
    from database into JSON representations.
    """

    user = UserSerializer(read_only=True)
    app_lang = serializers.StringRelatedField()
    learning_langs = serializers.StringRelatedField(many=True)

    class Meta:
        """
        model: The UserProfile model to serialize.
        fields: The fields from the UserProfile model plus Use model
        to include in the serialized representation.
        """

        model = UserProfile
        fields = ['user', 'image', 'description', 'app_lang', 'learning_langs']
