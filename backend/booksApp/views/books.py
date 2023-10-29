from rest_framework.response import Response
from django.contrib.auth.models import AnonymousUser
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from booksApp import utils
from booksApp.models import Book
from booksApp.serializers.books import BookCreateSerializer, BookRUDSerializer


class BookCreateView(generics.CreateAPIView):
    """
    View to create a book instance
    """
    queryset = Book.objects.all()
    serializer_class = BookCreateSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]


class BookRUDView(generics.RetrieveUpdateDestroyAPIView):
    """
    View to get all data about one instance
    """
    queryset = Book.objects.all()
    serializer_class = BookRUDSerializer
    permission_classes = [IsAuthenticated]  # если мы хотим получать список неавторизованными есть проблема с доступом

    def get(self, request, *args, **kwargs):
        # book = Book.objects.filter(**kwargs)
        book = generics.get_object_or_404(self.get_queryset(), **kwargs)
        return Response({'title': book.title,
                         'text': utils.get_data_from_html(book.text).get('text'),
                         'author': book.author.name,
                         'languages': book.languages.name})


class BookListView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookRUDSerializer

    def post(self, request):
        """
        This method customize request for Book model
        :return: Returns books with the user's learning languages or all books if the user is Anonym
        """
        if not isinstance(request.user, AnonymousUser):
            data = request.data
            books = Book.objects.filter(languages__name__in=data['learning_langs'])
            serializer = BookRUDSerializer(books, many=True)
            return Response(serializer.data)
        else:
            books = Book.objects.all()
            serializer = BookRUDSerializer(books, many=True)
            return Response(serializer.data)
