from django.contrib import admin
from django.urls import path
from baseApp import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    # authentication urls
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

    # other urls
    path('users/', views.UserList.as_view(), name='users'),
    path('users/profile', views.UserProfileGet.as_view(), name='users-profile'),
]
