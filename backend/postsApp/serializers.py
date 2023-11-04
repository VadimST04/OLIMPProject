from rest_framework import serializers

from backend import settings
from baseApp.models import UserProfile
from baseApp.serializers import UserSerializer
from postsApp.models import Post, Comment, ImagePost


class CommentSerializer(serializers.ModelSerializer):
    """
    Serializer class for serializing Comment model instances.
    This serializer is used to convert Comment model instances into JSON format
    and vice versa, allowing for easy representation of comments in your API.
    """

    user = serializers.CharField(source='user.username')
    user_image = serializers.SerializerMethodField(read_only=True)

    class Meta:
        """
        model: The Comment model associated with this serializer.
        fields: A list of fields to include in the serialized output.
        """

        model = Comment
        fields = ['user', 'user_image', 'text', 'likes']

    def get_user_image(self, obj):
        userprofile = UserProfile.objects.get(user=obj.user)

        try:
            if userprofile.image:
                request = self.context.get('request')
                if request:
                    return request.build_absolute_uri(userprofile.image.url)
        except ValueError:
            return None


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagePost
        exclude = ['id', 'post', ]


class PostSerializer(serializers.ModelSerializer):
    """
    Serializer class for serializing Post model instances.
    This serializer is used to convert Post model instances into JSON format
    and vice versa, allowing for easy representation of posts in your API.
    It includes user details for the post author and a list of comments associated with the post.
    """

    user = serializers.CharField(source='user.username')
    comments = CommentSerializer(many=True, read_only=True)
    image_post = ImageSerializer(read_only=True, many=True)

    class Meta:
        """
        model: The Post model associated with this serializer.
        fields: A list of fields to include in the serialized output.
        """

        model = Post
        fields = '__all__'
