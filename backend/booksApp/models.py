from django.db import models

from baseApp.models import Language


class Author(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'


class Book(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    author = models.ForeignKey(Author, null=True, on_delete=models.SET_NULL)
    cover_image = models.ImageField(null=True)
    languages = models.ForeignKey(Language, on_delete=models.DO_NOTHING)

    def __str__(self):
        return f'{self.title}'
