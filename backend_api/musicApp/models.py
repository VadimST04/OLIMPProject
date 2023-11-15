from django.db import models

from baseApp.models import Language


class Artist(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'


class Song(models.Model):
    objects = models.Manager()
    title = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, null=True, on_delete=models.SET_NULL)
    image = models.ImageField()
    audio_file = models.FileField()
    audio_link = models.CharField(max_length=200, blank=True, null=True)
    duration = models.CharField(max_length=20, blank=True, null=True)
    language = models.ForeignKey(Language, on_delete=models.PROTECT)

    def __str__(self):
        return f'{self.title}'
