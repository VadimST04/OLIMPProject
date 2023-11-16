from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from baseApp.models import UserProfile, Language


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    This serializer extends the TokenObtainPairSerializer from the SimpleJWT library.
    It adds user-specific data to the token response, expanding the default return.
    """

    def validate(self, attrs):
        """
        This method extends the base validation provided by TokenObtainPairSerializer.
        It includes additional user-specific data in the response data.
        :param attrs: The dictionary which contains token and user data.
        :return: Returns token data and additional fields.
        """
        data = super().validate(attrs)

        return data


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
    image = serializers.ImageField(required=False)

    class Meta:
        """
        model: The UserProfile model to serialize.
        fields: The fields from the UserProfile model plus Use model
        to include in the serialized representation.
        """

        model = UserProfile
        fields = ['user', 'image', 'description', 'app_lang', 'learning_langs']


class LanguageSerializer(serializers.ModelSerializer):
    """
    A serializer for the Language model.
    This serializer is used to convert Language model instances to JSON data and vice versa.
    """

    class Meta:
        """
        model (Model): The model class associated with the serializer (Language in this case).
        fields (str or tuple): The fields to include in the serialized representation.
        """

        model = Language
        fields = '__all__'
