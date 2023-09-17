from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.views import APIView

from baseApp.models import UserProfile
from baseApp.serializers import UserSerializer, UserProfileSerializer


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAdminUser,)


class UserProfileGet(generics.ListAPIView):
    def get_queryset(self):
        user = self.request.user
        return UserProfile.objects.filter(user=user)

    serializer_class = UserProfileSerializer
    permission_classes = (IsAuthenticated,)
