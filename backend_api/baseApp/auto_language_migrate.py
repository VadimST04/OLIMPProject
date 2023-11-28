from django.apps import apps
from django.db import migrations

LANGUAGES = {
    'English': 'eng',
    'German': 'deu',
    'French': 'fre',
    'Italian': 'ita',
    'Hebrew': 'heb',
    'Ukrainian': 'ukr',
    'Turkish': 'tur',
    'Spanish': 'spa',
    'Swedish': 'swe',
}


def create_default_languages():
    language = apps.get_model('baseApp', 'Language')

    for lang_name, lang_short_name in LANGUAGES.items():
        if not language.objects.filter(name=lang_name):
            language.objects.create(name=lang_name, short_name=lang_short_name)
