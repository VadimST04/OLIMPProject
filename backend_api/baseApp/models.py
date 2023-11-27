from django.db import models
from django.db.models.signals import post_migrate
from django.dispatch import receiver
from baseApp.auto_language_migrate import create_default_languages
from django.contrib.auth.models import User
from django.core.files.storage import default_storage
import base64


class Language(models.Model):
    objects = models.Manager()
    name = models.CharField(max_length=50)
    short_name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'


class UserProfile(models.Model):
    objects = models.Manager()
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='user_profile')
    image = models.ImageField(blank=True, null=True)
    image_data = models.BinaryField(null=True)
    description = models.TextField(max_length=500, blank=True, null=True)
    app_lang = models.ForeignKey(Language,
                                 null=True,
                                 on_delete=models.DO_NOTHING,
                                 related_name='app_language')
    learning_langs = models.ManyToManyField(Language, null=True)

    def save(self, *args, **kwargs):
        if self.image:
            self.image_data = self.image.read()
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.user.username} Profile'


# after migration run

@receiver(post_migrate)
def on_post_migrate(sender, **kwargs):
    if sender.name == 'baseApp':
        create_default_languages()
