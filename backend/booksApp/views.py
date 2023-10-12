from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from musicApp.model import Song
from musicApp.serializers import SongSerializer


class SongList(generics.ListAPIView,
               generics.RetrieveAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    permission_classes = (IsAuthenticated,)


class SongSettings(generics.CreateAPIView,
                   generics.UpdateAPIView,
                   generics.DestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    permission_classes = (IsAuthenticated, IsAdminUser)
