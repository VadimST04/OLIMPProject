from drf_spectacular.utils import extend_schema
from rest_framework import generics
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from booksApp.models import Author
from booksApp.serializers.authors import AuthorSerializer


@extend_schema(tags=["Book Authors"])
class AuthorRUDView(generics.RetrieveUpdateDestroyAPIView):
    """
    A view for retrieving, updating, and deleting a single Author instance.
    This view allows authenticated users with admin privileges to retrieve, update, and delete Author objects.
    """

    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]


@extend_schema(tags=["Book Authors"])
class AuthorListView(generics.ListCreateAPIView):
    """
    A view for listing and creating Author instances.
    This view allows authenticated users to list existing Author objects and create new Author objects.
    """

    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
