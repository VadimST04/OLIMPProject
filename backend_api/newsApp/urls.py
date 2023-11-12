from django.contrib import admin
from django.urls import path

from newsApp import views

urlpatterns = [
    path('', views.NewsList.as_view(), name='news'),
]
