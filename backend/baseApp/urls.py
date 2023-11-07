from django.urls import path
from baseApp import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

from baseApp.views import MyTokenObtainPairView

urlpatterns = [
    # authentication urls
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/registration/', views.UserRegistration.as_view(), name='user-registration'),

    # other urls
    path('users/', views.UserList.as_view(), name='users'),
    path('users/profile/', views.UserProfileGet.as_view(), name='users-profile'),
    path('users/profile/update/', views.UserProfileUpdate.as_view(), name='users-profile'),
    path('languages/', views.LanguageList.as_view(), name='languages-list'),
]
