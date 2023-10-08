from django.urls import path

import booksApp.views.books as book_views
import booksApp.views.author as author_views


urlpatterns = [
    # urls for books
    path('create/', book_views.BookCreateView.as_view()),
    path('view/<int:pk>/', book_views.BookRUDView.as_view()),
    path('view/', book_views.BookListView.as_view()),

    # urls for authors
    path('authors/create/', author_views.AuthorCreateView.as_view()),
    path('authors/update/<int:pk>/', author_views.AuthorUpdateView.as_view()),
    path('authors/', author_views.AuthorListView.as_view()),
    path('authors/delete/<int:pk>/', author_views.AuthorDeleteView.as_view()),
    path('authors/view/<int:pk>/', author_views.AuthorDetailView.as_view())
]
