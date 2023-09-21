from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from postsApp.models import Post, Comment
from postsApp.permissions import IsAuthorOrIsAuthenticated
from postsApp.serializers import PostSerializer, CommentSerializer


class PostList(generics.ListCreateAPIView):
    """
    View class for listing and creating posts.
    This class provides an entry point for viewing a list of posts and creating new posts.
    Users must be authenticated to access this view.
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated,)


class PostUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    """
    View class for updating and destroying posts.
    This class provides an entry point for updating or destroying a specific post.
    Users must be authenticated and be an owner of this post to access this view.
    """

    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)


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
        return Post.objects.filter(user=user)

    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)


class PostCommentCreate(generics.CreateAPIView):
    """
    View class for creating comments on posts.
    This class provides an entry point for creating comments on posts.
    Users must be authenticated to access this view.
    """

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated,)


class PostCommentUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    """
    View class for updating and deleting comments on posts.
    This class provides an entry point for updating and deleting comments on posts.
    Users must be authenticated and either the author of the comment or have appropriate permissions to access this view.
    """

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)
