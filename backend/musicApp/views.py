from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from musicApp.models import Song
from musicApp.serializers import SongSerializer


class SongList(generics.ListAPIView,
               generics.RetrieveAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    permission_classes = (IsAuthenticated,) # если мы хотим получать список неавторизованными есть проблема с доступом


class SongSettings(generics.CreateAPIView,
                   generics.UpdateAPIView,
                   generics.DestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    permission_classes = (IsAuthenticated, IsAdminUser)
