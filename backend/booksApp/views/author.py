from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from booksApp.models import Author
from booksApp.serializers.authors import AuthorSerializer


class AuthorView(generics.ListCreateAPIView,
                 generics.RetrieveUpdateDestroyAPIView):
    """
    View to create an author instance
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]


