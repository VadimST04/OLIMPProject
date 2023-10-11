from django.contrib.auth.models import User
from django.db import models


class Post(models.Model):
    objects = models.Manager()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    likes = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.user} post - {self.likes} likes'


class ImagePost(models.Model):
    object = models.Manager()
    image = models.ImageField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='image_post')


class Comment(models.Model):
    objects = models.Manager()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, related_name='user')
    text = models.TextField(max_length=500)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.user} comment to {self.post} - {self.likes} likes'
