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
    email = 'test_email@gmail.com'

    eng = Language.objects.create(name='English')
    ger = Language.objects.create(name='German')

    regular = django_user_model.objects.create_user(
        username=username, password=password, email=email)

    test_profile = UserProfile.objects.create(user_id=regular.pk, image='backend/static/images/test.png',
                                              description=None, app_lang=eng)
    test_profile.learning_langs.set([eng, ger])

    response = client.post('/api/login/', {'username': username, 'password': password}, format='json')

    UserData = namedtuple('UserData', ['data', 'token'])
    user_data = UserData(regular, response.data.get('access'))
    return user_data


@pytest.fixture
def api_client():
    return APIClient


@pytest.fixture
@pytest.mark.django_db
def admin_user(client, django_user_model):
    username = 'test_admin_user'
    password = 'test_passw'

    eng = Language.objects.create(name='English')
    ger = Language.objects.create(name='German')

    admin = django_user_model.objects.create_superuser(
        username=username, password=password, is_superuser=True)

    test_profile = UserProfile.objects.create(user_id=admin.pk, image='backend/static/images/test.png',
                                              description=None, app_lang=eng)
    test_profile.learning_langs.set([eng, ger])

    response = client.post('/api/login/', {'username': username, 'password': password}, format='json')

    UserData = namedtuple('UserData', ['data', 'token'])
    user_data = UserData(admin, response.data.get('access'))
    return user_data
