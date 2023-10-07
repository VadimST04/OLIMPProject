from rest_framework.response import Response
from django.contrib.auth.models import AnonymousUser
from rest_framework.generics import CreateAPIView, UpdateAPIView, RetrieveAPIView, ListAPIView, DestroyAPIView, \
    get_object_or_404
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.views import APIView

from booksApp import utils
from booksApp.models import Book
from booksApp.serializers.books import BookCreateSerializer, BookUpdateSerializer, BookDetailViewSerializer, \
    BookViewSerializer, BookDeleteSerializer


class BookCreateView(CreateAPIView):
    """
    View to create a book instance
    """
    queryset = Book.objects.all()
    serializer_class = BookCreateSerializer
    # authentication_classes = (IsAuthenticated, IsAdminUser)


class BookUpdateView(UpdateAPIView):
    """
    View ro update data in book instance
    """
    queryset = Book.objects.all()
    serializer_class = BookUpdateSerializer
    # permission_classes = IsAuthenticated


class BookDetailView(RetrieveAPIView):
    """
    View to get all data about one instance
    """
    queryset = Book.objects.all()
    serializer_class = BookDetailViewSerializer
    # authentication_classes = IsAuthenticated,

    def get(self, request, *args, **kwargs):
        # book = Book.objects.filter(**kwargs)
        book = get_object_or_404(self.get_queryset(), **kwargs)
        return Response({'title': book.title,
                         'text': utils.get_data_from_html(book.text).get('text'),
                         'author': book.author.name,
                         'languages': book.languages.name})



class BookListView(APIView):
    """
    View to get all book's instances
    """
    def post(self, request):
        """
        This method customize request for Book model
        :return: Returns books with the user's learning languages
        """
        data = request.data
        books = Book.objects.filter(languages__name__in=data['learning_langs'])
        serializer = BookViewSerializer(books, many=True)
        return Response(serializer.data)


class BookDeleteView(DestroyAPIView):
    """
    View to delete a book instance
    """
    queryset = Book.objects.all()
    serializer_class = BookDeleteSerializer
    # permission_classes = IsAuthenticated
