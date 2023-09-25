from django.contrib.auth.models import User
from django.db import models


class Post(models.Model):
    objects = models.Manager()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField()
    content = models.TextField()
    likes = models.IntegerField(default=0)


class Comment(models.Model):
    objects = models.Manager()
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    text = models.TextField(max_length=500)
    likes = models.IntegerField(default=0)
