from django.apps import apps
from django.db import migrations

LANGUAGES = ['English', 'Spanish', 'German', 'Ukrainian', 'French', 'Italian']


def create_default_languages():
    language = apps.get_model('baseApp', 'Language')

    for lang in LANGUAGES:
        if not language.objects.filter(name=lang):
            language.objects.create(name=lang)
