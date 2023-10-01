from rest_framework.generics import CreateAPIView, UpdateAPIView, RetrieveAPIView, ListAPIView, DestroyAPIView

from booksApp.models import Book
from booksApp.serializers.books import BookCreateSerializer, BookUpdateSerializer, BookDetailViewSerializer, \
    BookViewSerializer, BookDeleteSerializer


class BookCreateView(CreateAPIView):
    """
    View to create a book instance
    """
    queryset = Book.objects.all()
    serializer_class = BookCreateSerializer


class BookUpdateView(UpdateAPIView):
    """
    View ro update data in book instance
    """
    queryset = Book.objects.all()
    serializer_class = BookUpdateSerializer


class BookDetailView(RetrieveAPIView):
    """
    View to get all data about one instance
    """
    queryset = Book.objects.all()
    serializer_class = BookDetailViewSerializer


class BookListView(ListAPIView):
    """
    View to get all book's instances
    """
    queryset = Book.objects.all()
    serializer_class = BookViewSerializer


class BookDeleteView(DestroyAPIView):
    """
    View to delete a book instance
    """
    queryset = Book.objects.all()
    serializer_class = BookDeleteSerializer
