from rest_framework.generics import CreateAPIView, UpdateAPIView, ListAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from booksApp.models import Author
from booksApp.serializers.authors import AuthorSerializer, AuthorDeleteSerializer


class AuthorCreateView(CreateAPIView):
    """
    View to create an author instance
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]


class AuthorUpdateView(UpdateAPIView):
    """
    View to update an author instance
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]


class AuthorListView(ListAPIView):
    """
    View to get all author instances
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    # pagination_class = LimitOffsetPagination


class AuthorDeleteView(DestroyAPIView):
    """
    View to delete a single author instance
    """
    queryset = Author.objects.all()
    serializer_class = AuthorDeleteSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]


class AuthorDetailView(RetrieveAPIView):
    """
    View to get all data about one author instance
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = [IsAuthenticated]
