from rest_framework.generics import CreateAPIView

from booksApp.models import Book
from booksApp.serializers.books import BookCreateSerializer


class BookCreateView(CreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookCreateSerializer

