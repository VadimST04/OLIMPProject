from django.urls import path

import booksApp.views.books as book_views
import booksApp.views.author as author_views

urlpatterns = [
    # urls for books
    path('create/', book_views.BookCreateView.as_view()),
    path('view/<int:pk>/', book_views.BookRUDView.as_view()),
    path('view/', book_views.BookListView.as_view()),

    # urls for authors
    path('authors/', author_views.AuthorView.as_view()),
    path('authors/<int:pk>', author_views.AuthorView.as_view()),
]
