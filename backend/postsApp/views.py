from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from postsApp.models import Post, Comment
from postsApp.permissions import IsAuthorOrIsAuthenticated
from postsApp.serializers import PostSerializer, CommentSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated,)


class PostUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)


class PostCommentCreate(generics.CreateAPIView):
    queryset = Comment
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated,)


class PostCommentUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)
