from django.urls import path
from postsApp import views

urlpatterns = [
    path('', views.PostList.as_view(), name='posts'),
    path('<int:pk>/', views.PostUpdateDelete.as_view(), name='post-update-delete'),
    path('mypost/', views.MyPostList.as_view(), name='my-posts'),
    path('comment/', views.PostCommentCreate.as_view(), name='post-create'),
    path('comment/<int:pk>/', views.PostCommentUpdateDelete.as_view(), name='comment-update-delete'),
]
