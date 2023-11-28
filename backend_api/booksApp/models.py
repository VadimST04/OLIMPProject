from django.db import models

from baseApp.models import Language


class Author(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name}'


class Book(models.Model):
    objects = models.Manager()
    title = models.CharField(max_length=100)
    text = models.TextField()
    author = models.ForeignKey(Author, blank=True, null=True, on_delete=models.SET_NULL)
    cover_image = models.ImageField(null=True)
    cover_image_data = models.BinaryField(null=True)
    languages = models.ForeignKey(Language, on_delete=models.PROTECT)

    def save(self, *args, **kwargs):
        if self.cover_image:
            self.cover_image_data = self.cover_image.read()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.title}'
