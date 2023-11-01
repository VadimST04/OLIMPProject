from collections import namedtuple

import pytest
from rest_framework.test import APIClient


from baseApp.models import UserProfile
from baseApp.models import Language


@pytest.fixture
@pytest.mark.django_db
def regular_user(client, django_user_model):
    username = 'test_regular_user'
    password = 'test_passw'

    lang = Language.objects.create(name='English')

    regular = django_user_model.objects.create_user(
        username=username, password=password)

    test_profile = UserProfile.objects.create(user_id=regular.pk, image='backend/static/images/test.png',
                                              description=None, app_lang=lang)
    test_profile.learning_langs.set([lang])

    response = client.post('/api/login/', {'username': username, 'password': password}, format='json')

    UserData = namedtuple('UserData', ['data', 'token'])
    user_data = UserData(regular, response.data.get('access'))
    return user_data


@pytest.fixture
def api_client():
    return APIClient
