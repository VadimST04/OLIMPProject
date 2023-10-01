from rest_framework.generics import CreateAPIView, UpdateAPIView, RetrieveAPIView, ListAPIView, DestroyAPIView

from booksApp.models import Book
from booksApp.serializers.books import BookCreateSerializer, BookUpdateSerializer, BookDetailViewSerializer, \
    BookViewSerializer, BookDeleteSerializer


class BookCreateView(CreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookCreateSerializer


class BookUpdateView(UpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookUpdateSerializer


class BookDetailView(RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookDetailViewSerializer


class BookListView(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookViewSerializer


class BookDeleteView(DestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookDeleteSerializer
