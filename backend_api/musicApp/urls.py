from django.urls import path
from musicApp import views

urlpatterns = [
    path('', views.SongList.as_view(), name='music-list'),
    path('create/', views.SongSettings.as_view(), name='music-create'),
    path('<int:pk>/', views.SongRetrieve.as_view(), name='music-retrieve'),
    path('settings/<int:pk>/', views.SongSettings.as_view(), name='music-settings'),
    path('search', views.SongSearch.as_view(), name='music-search'),
]
