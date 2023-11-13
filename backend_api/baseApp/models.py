from django.contrib.auth.models import User
from django.db import models

from backend import settings


class Language(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'


class UserProfile(models.Model):
    objects = models.Manager()
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    image = models.ImageField(blank=True, null=True)
    description = models.TextField(max_length=500, blank=True, null=True)
    app_lang = models.ForeignKey(Language,
                                 null=True,
                                 on_delete=models.DO_NOTHING,
                                 related_name='app_language')
    learning_langs = models.ManyToManyField(Language, null=True)

    def __str__(self):
        return f'{self.user.username} Profile'