from rest_framework import serializers

from baseApp.serializers import UserSerializer
from postsApp.models import Post, Comment


class CommentSerializer(serializers.ModelSerializer):
    """
    Serializer class for serializing Comment model instances.
    This serializer is used to convert Comment model instances into JSON format
    and vice versa, allowing for easy representation of comments in your API.
    """

    class Meta:
        """
        model: The Comment model associated with this serializer.
        fields: A list of fields to include in the serialized output.
        """

        model = Comment
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    """
    Serializer class for serializing Post model instances.
    This serializer is used to convert Post model instances into JSON format
    and vice versa, allowing for easy representation of posts in your API.
    It includes user details for the post author and a list of comments associated with the post.
    """

    user = UserSerializer(read_only=True)
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        """
        model: The Post model associated with this serializer.
        fields: A list of fields to include in the serialized output.
        """

        model = Post
        fields = '__all__'
