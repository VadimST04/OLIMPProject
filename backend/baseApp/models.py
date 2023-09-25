from django.contrib.auth.models import User
from django.db import models


class Language(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'


class UserProfile(models.Model):
    objects = models.Manager()
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True)
    description = models.TextField(max_length=500, blank=True, null=True)
    app_lang = models.OneToOneField(Language, default='English', on_delete=models.SET_DEFAULT, related_name='app_language')
    learning_langs = models.ManyToManyField(Language)

    def __str__(self):
        return f'{self.user.username} Profile'
