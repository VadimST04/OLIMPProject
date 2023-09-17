from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
from django.db import models


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True)
    description = models.TextField(max_length=500, blank=True, null=True)
    app_lang = models.CharField(max_length=50)
    learning_langs = ArrayField(models.CharField(max_length=255), blank=True, null=True)

    def __str__(self):
        return f'{self.user.username} Profile'
