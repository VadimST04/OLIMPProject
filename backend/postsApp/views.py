from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from postsApp.models import Post, Comment
from postsApp.permissions import IsAuthorOrIsAuthenticated
from postsApp.serializers import PostSerializer, CommentSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated,)


class PostUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)


class MyPostList(generics.ListCreateAPIView):
    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(user=user)

    queryset = get_queryset()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)


class PostCommentCreate(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated,)


class PostCommentUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)
