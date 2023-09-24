from django.contrib.auth.models import User
from django.db import models


class Language(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(blank=True, null=True)
    description = models.TextField(max_length=500, blank=True, null=True)
    app_lang = models.OneToOneField(Language,
                                    on_delete=models.DO_NOTHING,
                                    related_name='app_language')
    learning_langs = models.ManyToManyField(Language)

    def __str__(self):
        return f'{self.user.username} Profile'
