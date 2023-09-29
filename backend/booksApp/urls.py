from django.urls import path

import booksApp.views.books as book_views
import booksApp.views.author as author_views


urlpatterns = [
    path('create/', book_views.BookCreateView.as_view()),
    path('authors/create/', author_views.AuthorCreateView.as_view())
]
