from rest_framework.generics import CreateAPIView, UpdateAPIView, ListAPIView, DestroyAPIView, RetrieveAPIView

from booksApp.models import Author
from booksApp.serializers.authors import AuthorSerializer, AuthorDeleteSerializer


class AuthorCreateView(CreateAPIView):
    '''
    View to create an author instance
    '''
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class AuthorUpdateView(UpdateAPIView):
    '''
    View to update an author instance
    '''
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class AuthorListView(ListAPIView):
    '''
    View to get all author instances
    '''
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class AuthorDeleteView(DestroyAPIView):
    """
    View to delete a single author instance
    """
    queryset = Author.objects.all()
    serializer_class = AuthorDeleteSerializer


class AuthorDetailView(RetrieveAPIView):
    """
    View to get all data about one author instance
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
