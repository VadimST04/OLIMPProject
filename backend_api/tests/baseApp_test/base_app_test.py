import json

import pytest
from django.contrib.auth.models import User

from baseApp.models import Language, UserProfile

pytestmark = pytest.mark.django_db


class TestUserAuth:
    login_endpoint = '/api/login/'

    def test_login(self, api_client, django_user_model):
        username = 'test_admin_user'
        password = 'test_passw'

        eng = Language.objects.create(name='English')

        admin = django_user_model.objects.create_superuser(
            username=username, password=password, is_superuser=True)

        test_profile = UserProfile.objects.create(user_id=admin.pk, image='backend/static/images/test.png',
                                                  description=None, app_lang=eng)

        response = api_client().post(self.login_endpoint,
                                     {'username': username, 'password': password}, format='json')

        assert response.status_code == 200


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
        assert content.get('image') == response.wsgi_request.build_absolute_uri(regular_user.data.user_profile.image.url)
        assert content.get('learning_langs') == langs
        assert user_content.get('username') == regular_user.data.username
        assert user_content.get('email') == regular_user.data.email

    def test_user_list(self, api_client, regular_user, user_profile_factory):
        user_profile_factory.create_batch(10)

        response = api_client().get(self.users_endpoint, HTTP_AUTHORIZATION=f'Bearer {regular_user.token}')

        assert response.status_code == 200
        assert len(json.loads(response.content)) == len(User.objects.all())

    def test_user_profile_update(self, api_client, regular_user):
        new_user_data = {'username': 'updated_user', 'email': 'updated_email',
                         'password': 'updated_password', 'image': '../backend_api/static/images/Снимок_экрана_2023-11-19_212933.png',
                         'description': 'updated_description', 'app_lang': 'German',
                         'learning_langs': ['German', 'English']}

        endpoint = self.user_profile_endpoint + 'update/'
        response = api_client().patch(endpoint, data=new_user_data,
                                      HTTP_AUTHORIZATION=f'Bearer {regular_user.token}')
        assert response.status_code == 200
