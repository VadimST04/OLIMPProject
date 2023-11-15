from django.urls import path

import booksApp.views.books as book_views
import booksApp.views.author as author_views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # urls for books
    path('create/', book_views.BookCreateView.as_view(), name='book-create'),
    path('view/<int:pk>/', book_views.BookRUDView.as_view(), name='book-rud'),
    path('view/', book_views.BooksListAPIView.as_view(), name='book-list'),

    # urls for authors
    path('authors/', author_views.AuthorListView.as_view(), name='author-list'),
    path('authors/<int:pk>', author_views.AuthorRUDView.as_view(), name='author-rud'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
