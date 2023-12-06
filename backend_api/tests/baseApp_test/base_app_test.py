import json
import os

import pytest
from django.contrib.auth.models import User
from django.db import IntegrityError

from baseApp.models import Language, UserProfile

pytestmark = pytest.mark.django_db
user_data = {'username': 'test_user_registration', 'password': 'test_password', 'email': 'test_@email.com'}
fail_user_data = {'username': 'test_user_registration', 'email': 'aboba@email.com'}
user_profile_data = {'app_lang': 'English', 'learning_langs': ['German', 'English'],
                     'image': None,
                     'description': 'test_description'}


class TestUserAuth:
    login_endpoint = '/api/login/'
    registration_endpoint = '/api/users/registration/'

    def test_login(self, api_client, django_user_model):
        username = 'test_admin_user'
        password = 'test_passw'

        eng = Language.objects.create(name='English')

        admin = django_user_model.objects.create_superuser(
            username=username, password=password, is_superuser=True)

        UserProfile.objects.create(user_id=admin.pk, image=None,
                                   description=None, app_lang=eng)

        response = api_client().post(self.login_endpoint,
                                     {'username': username, 'password': password}, format='json')

        assert response.status_code == 200

    def test_registration(self, api_client):
        Language.objects.create(name='English')
        Language.objects.create(name='German')

        response = api_client().post(self.registration_endpoint, data={**user_data, **user_profile_data}, format='json')
        content = json.loads(response.content)

        assert response.status_code == 201
        assert content.get('app_lang') == 'English'
        assert content.get('user').get('username') == user_data['username']
        assert content.get('user').get('password') != user_data['password']
        assert content.get('user').get('email') == user_data['email']
        for lang in user_profile_data['learning_langs']:
            assert lang in content.get('learning_langs')
        assert content.get('image') == user_profile_data['image']
        assert content.get('description') == user_profile_data['description']

    @pytest.mark.parametrize('error, error_message, user_data_field',
                             [(IntegrityError, 'user with this email already exist', user_data),
                              (KeyError, 'provided data is incorrect', fail_user_data)])
    def test_fail_registration(self, api_client, error, error_message, user_data_field):
        eng = Language.objects.create(name='English')
        ger = Language.objects.create(name='German')

        if error == IntegrityError:
            user_profile_data.pop('learning_langs')
            user_profile_data.pop('app_lang')

            user = User.objects.create(**user_data_field)
            UserProfile.objects.create(**user_profile_data, user=user)
            user.user_profile.learning_langs.set([eng, ger])
            user.user_profile.app_lang = eng

            user_profile_data['learning_langs'] = ['German', 'English']
            user_profile_data['app_lang'] = 'English'

        response = api_client().post(self.registration_endpoint, data={**user_data_field, **user_profile_data}, format='json')

        message = json.loads(response.content)['detail']
        assert response.status_code == 400
        assert message == error_message


class TestUser:
    users_endpoint = '/api/users/'
    user_profile_endpoint = '/api/users/profile/'

    def test_user_profile_get(self, api_client, regular_user):
        response = api_client().get(self.user_profile_endpoint,
                                    HTTP_AUTHORIZATION=f'Bearer {regular_user.token}')

        assert response.status_code == 200
        content = json.loads(response.content)
        user_content = content.get('user', None)
        langs = [lang.name for lang in regular_user.data.user_profile.learning_langs.all()]

        assert content.get('app_lang') == regular_user.data.user_profile.app_lang.name
        assert content.get('description') == regular_user.data.user_profile.description
        assert content.get('learning_langs') == langs
        assert user_content.get('username') == regular_user.data.username
        assert user_content.get('email') == regular_user.data.email

    def test_user_list(self, api_client, regular_user, user_profile_factory):
        user_profile_factory.create_batch(10)

        response = api_client().get(self.users_endpoint, HTTP_AUTHORIZATION=f'Bearer {regular_user.token}')

        assert response.status_code == 200
        assert len(json.loads(response.content)) == len(User.objects.all())

    def test_user_profile_update(self, api_client, regular_user):
        endpoint = self.user_profile_endpoint + 'update/'
        response = api_client().patch(endpoint, data={**user_data, **user_profile_data}, format='json',
                                      HTTP_AUTHORIZATION=f'Bearer {regular_user.token}')
        content = json.loads(response.content)

        assert response.status_code == 200
        assert content.get('app_lang') == 'English'
        assert content.get('user').get('username') == user_data['username']
        assert content.get('user').get('password') != user_data['password']
        assert content.get('user').get('email') == user_data['email']
        for lang in user_profile_data['learning_langs']:
            assert lang in content.get('learning_langs')
        assert content.get('description') == user_profile_data['description']
