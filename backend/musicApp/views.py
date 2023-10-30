from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from musicApp.models import Song
from musicApp.serializers import SongSerializer


class SongList(generics.ListAPIView):
    """
    A view for listing Song instances.
    This view allows users to retrieve a list of Song objects.
    """

    queryset = Song.objects.all()
    serializer_class = SongSerializer


class SongSettings(generics.CreateAPIView,
                   generics.RetrieveUpdateDestroyAPIView):
    """
    A view for creating, retrieving, updating, and deleting a single Song instance.
    This view allows authenticated users with admin privileges to create, retrieve, update, and delete Song objects.
    """

    queryset = Song.objects.all()
    serializer_class = SongSerializer
    permission_classes = (IsAuthenticated, IsAdminUser)
