from django.db import models

from baseApp.models import Language


class News(models.Model):
    """
    This is a class for news that user liked
    """

    title = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    author = models.CharField(max_length=255, blank=True, null=True)
    video_url = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(max_length=500)
    content = models.TextField()
    pub_date = models.DateTimeField(blank=True, null=True)
    image_url = models.CharField(max_length=255)
    source_id = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    language = models.ManyToManyField(Language)
