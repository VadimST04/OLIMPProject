from django.contrib import admin
from django.urls import path
from baseApp import views

urlpatterns = [
    path('users/', views.UserList.as_view(), name='users'),
]
