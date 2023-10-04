from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.db import IntegrityError
from rest_framework import generics, status
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import mixins

from baseApp.models import UserProfile, Language
from baseApp.serializers import UserSerializer, UserProfileSerializer
from postsApp.permissions import IsAuthorOrIsAuthenticated


class UserRegistration(APIView):
    """
    View for registering new users.
    """

    def post(self, request):
        """
        Handle POST requests for the view.
        Create new user and their profile
        :param request: An HTTP request object.
        :return: Returns information about user's profile and data about user
        """
        data = request.data
        try:
            new_user = User.objects.create(
                username=data['username'],
                password=make_password(data['password']),
                email=data['email'],
            )
            app_lang = Language.objects.filter(name=data['app_lang'])[0]
            learning_langs = Language.objects.filter(name__in=data.get('learning_langs', []))

            new_user_profile = UserProfile.objects.create(
                user=new_user,
                image=data.get('image'),
                description=data.get('description'),
            )
            new_user_profile.app_lang = app_lang
            new_user_profile.learning_langs.set(learning_langs)
            new_user_profile.save()

            serializer = UserProfileSerializer(new_user_profile)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except IntegrityError:
            message = {'detail': 'user with this email already exist'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
        except KeyError:
            message = {'detail': 'provided data is incorrect'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)


class UserList(generics.ListAPIView):
    """
    A view for retrieving a list of User objects.
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)


class UserProfileGet(generics.ListAPIView):
    """
    A view for retrieving the profile of a specific user
    with information about this user
    """

    def get_queryset(self):
        """
        This method is used to customize the queryset for the UserProfile model based on the requesting user.
        :return: Returns a profile of a specific user
        """
        user = self.request.user
        return UserProfile.objects.filter(user=user).select_related('user')

    serializer_class = UserProfileSerializer
    permission_classes = (IsAuthenticated, IsAuthorOrIsAuthenticated)


class UserProfileUpdate(APIView):
    """
    A view for updating user and user profile information
    """

    def patch(self, request):
        """
        Handle PATCH requests for the view.
        Update user and user profile data
        :param request: An HTTP request object.
        :return: Returns information about user's profile and data about user
        """
        data = request.data
        user = request.user
        userprofile = UserProfile.objects.get(user=user)

        user.username = data.get('username', user.username)
        user.email = data.get('email', user.email)
        password = data.get('password')
        if password:
            user.set_password(password)

        user.save()

        userprofile.user = user
        userprofile.image = data.get('image', userprofile.image)
        userprofile.description = data.get('description', userprofile.description)

        if data.get('app_lang') or data.get('learning_langs'):
            app_lang = Language.objects.filter(name=data.get('app_lang', userprofile.app_lang))[0]
            learning_langs = Language.objects.filter(name__in=data.get('learning_langs', []))

            userprofile.app_lang = app_lang
            userprofile.learning_langs.set(learning_langs)

        userprofile.save()

        serializer = UserProfileSerializer(userprofile)

        return Response(serializer.data, status=status.HTTP_200_OK)
