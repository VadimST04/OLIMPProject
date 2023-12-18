import json

import pytest

from baseApp.models import Language
from musicApp.models import Song

pytestmark = pytest.mark.django_db


class TestMusic:
    get_music_endpoint = '/api/music/'
    settings_music_endpoint = '/api/music/settings/'

    def test_all_song_view_authorized(self, api_client, song_factory, regular_user):  # не работает по заданным языкам
        ger = Language.objects.get(name='German')
        eng = Language.objects.get(name='English')
        ital = Language.objects.create(name='Italian')

        ger_songs = song_factory.create_batch(5, language=ger)
        eng_songs = song_factory.create_batch(5, language=eng)
        song_factory.create_batch(5, language=ital)

        response = api_client().post(path=self.get_music_endpoint, format='json',
                                     data={'learning_langs': ['English', 'German']},
                                     HTTP_AUTHORIZATION='Bearer ' + regular_user.token)

        assert response.status_code == 200

        response_books = json.loads(response.content)
        assert len(eng_songs) + len(ger_songs) == len(response_books)

    def test_view_all_songs_unauthorized(self, api_client, song_factory):
        song_factory.create_batch(5)

        response = api_client().post(self.get_music_endpoint)

        assert response.status_code == 200
        assert len(json.loads(response.content)) == 5

    def test_retrieve_view_authorized(self, api_client, regular_user, song_factory):
        song_factory.create_batch(5)
        song = song_factory.create()

        endpoint = f'{self.get_music_endpoint}{song.pk}/'
        response = api_client().get(endpoint, HTTP_AUTHORIZATION='Bearer ' + regular_user.token)

        assert response.status_code == 200

    # def test_create_view(self, api_client, admin_user, song_factory):  # не обязательно
    #     song_factory.create_batch(5)
    #     eng = Language.objects.get(name='English')
    #
    #     song = song_factory.create(title='create_title_test_view', artist='create_artist_test_view'
    #                                , image='static/images/test.png', audio_file='static/1.mp3',
    #                                audio_link='create_link_test_view'
    #                                , duration='duration_create_view')
    #     song.language.set([eng])
    #
    #     endpoint = f'{self.settings_music_endpoint}{song.pk}/'
    #     response = api_client().post(endpoint, HTTP_AUTHORIZATION='Bearer ' + admin_user.token)
    #
    #     assert response.status_code == 200
    #     assert len(json.loads(response.content)) == 6
    #
    # def test_update_view(self, api_client, admin_user, song_factory):  # не обязательно
    #     song_factory.create_batch(5)
    #     artist = 'updated_artist'
    #     title = 'updated_title'
    #     audio_link = 'updated_audio_link'
    #     duration = 'updated_duration'
    #
    #     endpoint = f'{self.settings_music_endpoint}1/'
    #     response = api_client().patch(endpoint, HTTP_AUTHORIZATION='Bearer ' + admin_user.token
    #                                   , data={'artist': artist, 'title': title, 'audio_link': audio_link,
    #                                           'duration': duration, 'language': ['English', 'German']})
    #
    #     assert response.status_code == 200
