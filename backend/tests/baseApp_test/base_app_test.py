import json

import pytest
from django.contrib.auth.models import User

pytestmark = pytest.mark.django_db


# class TestUserAuth:
#     login_endpoint = '/api/login/'
#
#     def test_login(self, user_profile_factory, api_client):
#         user = user_profile_factory.create()
#
#         response = api_client().post(self.login_endpoint,
#                                      {'username': user.user.username, 'password': user.user.password,
#                                       'email': user.user.email}, format='json')
#
#         assert response.status_code == 200


class TestUser:
    users_endpoint = '/api/users/'
    user_profile_endpoint = '/api/users/profile/'

    def test_user_profile_get(self, api_client, regular_user):
        response = api_client().get(self.user_profile_endpoint,
                                    HTTP_AUTHORIZATION=f'Bearer {regular_user.token}')

        assert response.status_code == 200
        content = json.loads(response.content)[0]
        user_content = content.get('user', None)
        langs = [lang.name for lang in regular_user.data.user_profile.learning_langs.all()]

        assert content.get('app_lang') == regular_user.data.user_profile.app_lang.name
        assert content.get('description') == regular_user.data.user_profile.description
        # assert content.get('image') == regular_user.data.user_profile.image.url
        assert content.get('learning_langs') == langs
        assert user_content.get('username') == regular_user.data.username
        assert user_content.get('email') == regular_user.data.email

    def test_user_list(self, api_client, regular_user, user_profile_factory):
        user_profile_factory.create_batch(10)

        response = api_client().get(self.users_endpoint, HTTP_AUTHORIZATION=f'Bearer {regular_user.token}')

        assert response.status_code == 200
        assert len(json.loads(response.content)) == len(User.objects.all())

