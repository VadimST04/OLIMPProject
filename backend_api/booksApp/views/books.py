from drf_spectacular.utils import extend_schema
from rest_framework.response import Response
from django.contrib.auth.models import AnonymousUser
from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.views import APIView

from booksApp import utils
from booksApp.models import Book
from booksApp.serializers.books import BookCreateSerializer, BookRUDSerializer, BookRetrieveDSerializer


@extend_schema(tags=["Books"])
class BookCreateView(generics.CreateAPIView):
    """
    View to create a book instance
    """
    queryset = Book.objects.all()
    serializer_class = BookCreateSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]


@extend_schema(tags=["Books"])
class BookRUDView(generics.RetrieveUpdateDestroyAPIView):
    """
    A view for retrieving, updating, and deleting a single Book instance.
    This view allows authenticated users to retrieve, update, and delete Book objects.
    """

    queryset = Book.objects.all()
    serializer_class = BookRetrieveDSerializer
    permission_classes = (IsAuthenticated, )

    # def get(self, request, *args, **kwargs):
    #     """
    #     Retrieve a single Book instance by its primary key and return its details.
    #     This method retrieves a Book instance using its primary key and returns its title, text, author,
    #     and languages in the response.
    #     """
    #     book = generics.get_object_or_404(self.get_queryset(), **kwargs)
    #     return Response({'title': book.title,
    #                      'text': utils.get_data_from_html(book.text).get('text'),
    #                      'author': book.author.name,
    #                      'languages': book.languages.name})


@extend_schema(tags=["Books"])
class BooksListAPIView(APIView):
    """
    View to get all books
    """

    def post(self, request):
        """
        This method customize request for Book model
        :return: Returns books with the user's learning languages or all books if the user is unauthorized
        """
        if request.user.is_authenticated:
            data = request.data
            books = Book.objects.filter(languages__name__in=data['learning_langs'])
            serializer = BookRUDSerializer(books, many=True)
            return Response(serializer.data)
        else:
            books = Book.objects.all()
            serializer = BookRUDSerializer(books, many=True)
            return Response(serializer.data)


@extend_schema(tags=["Books"])
class BookSearch(generics.ListAPIView):
    """
    This endpoint allows users to retrieve a list of books based on search criteria,
    such as title or author's name.
    """

    queryset = Book.objects.all()
    serializer_class = BookRUDSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'author__name']
