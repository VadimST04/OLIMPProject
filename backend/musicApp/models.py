from django.db import models

from baseApp.models import Language


class Song(models.Model):
    objects = models.Manager()
    title = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    image = models.ImageField()
    audio_file = models.FileField()
    audio_link = models.CharField(max_length=200, blank=True, null=True)
    duration = models.CharField(max_length=20, blank=True, null=True)
    language = models.ManyToManyField(Language)

    def __str__(self):
        return self.title
