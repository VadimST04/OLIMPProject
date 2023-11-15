from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from musicApp.models import Song
from musicApp.serializers import SongSerializer


class SongList(APIView):
    """
    A view for listing Song instances.
    This view allows users to retrieve a list of Song objects.
    """

    def post(self, request):
        """
        This method customize request for Music model
        :return: Returns books with the user's learning languages or all books if the user is unauthorized
        """
        if request.user.is_authenticated:
            data = request.data
            songs = Song.objects.filter(language__name__in=data['learning_langs'])
            serializer = SongSerializer(songs, many=True)
            return Response(serializer.data)
        else:
            songs = Song.objects.all()
            serializer = SongSerializer(songs, many=True)
            return Response(serializer.data)


class SongRetrieve(generics.RetrieveAPIView):
    """
    A view for retrieving a single Song instance.
    This view allows authenticated users retrieve Song objects.
    """

    queryset = Song.objects.all()
    serializer_class = SongSerializer
    permission_classes = (IsAuthenticated,)


class SongSettings(generics.CreateAPIView,
                   generics.UpdateAPIView,
                   generics.DestroyAPIView):
    """
    A view for creating, retrieving, updating, and deleting a single Song instance.
    This view allows authenticated users with admin privileges to create, retrieve, update, and delete Song objects.
    """

    queryset = Song.objects.all()
    serializer_class = SongSerializer
    permission_classes = (IsAuthenticated, IsAdminUser)
