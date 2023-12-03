import json

from drf_spectacular.utils import extend_schema
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from postsApp.models import Post, Comment, ImagePost
from postsApp.permissions import IsAuthorOrIsAuthenticated
from postsApp.serializers import PostSerializer, CommentSerializer
from rest_framework.response import Response


@extend_schema(tags=["Posts"])
class PostList(generics.ListAPIView):
    """
    View class for listing and creating posts.
    This class provides an entry point for viewing a list of posts and creating new posts.
    Users must be authenticated to access this view.
    """

    queryset = Post.objects.select_related('user').all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated,)


class PostCreateAPIView(APIView):

    def post(self, request):
        data = {key: value for key, value in request.data.items()}
        user = request.user
        images = request.FILES.getlist('images')
        print(images)

        try:
            new_post = Post.objects.create(user=user, content=data['content'])

            for image in images:
                ImagePost.object.create(image=image, post=new_post)

            serializer = PostSerializer(new_post)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception:
            return Response({'detail': 'Error'}, status=status.HTTP_400_BAD_REQUEST)


@extend_schema(tags=["Posts"])
class PostUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    """
    View class for updating and destroying posts.
    This class provides an entry point for updating or destroying a specific post.
    Users must be authenticated and be an owner of this post to access this view.
    """

    queryset = Post.objects.select_related('user').all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)


@extend_schema(tags=["Posts"])
class MyPostList(generics.ListCreateAPIView):
    """
    View class for listing and creating posts of user.
    This class provides an entry point for viewing a list of posts.
    Users must be authenticated and be an owner of this post to access this view.
    """

    def get_queryset(self):
        """
        Functions that gets all posts of a specific user
        :return: Queryset of posts of the specific user
        """
        user = self.request.user
        return Post.objects.filter(user=user).select_related('user')

    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)


@extend_schema(tags=["Comments"])
class PostCommentCreate(generics.CreateAPIView):
    """
    View class for creating comments on posts.
    This class provides an entry point for creating comments on posts.
    Users must be authenticated to access this view.
    """

    queryset = Comment.objects.select_related('post', 'user').all()
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated,)


@extend_schema(tags=["Comments"])
class PostCommentUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    """
    View class for updating and deleting comments on posts.
    This class provides an entry point for updating and deleting comments on posts.
    Users must be authenticated and either the author of the comment or have appropriate permissions to access this view.
    """

    queryset = Comment.objects.select_related('post', 'user').all()
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)
