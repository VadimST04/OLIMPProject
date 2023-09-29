from rest_framework.generics import CreateAPIView

from booksApp.models import Author
from booksApp.serializers.authors import AuthorSerializer


class AuthorCreateView(CreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

