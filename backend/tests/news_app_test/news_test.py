
class TestNewsPage:
    endpoint = '/api/news/'

    def test_news_page_unauthorized(self, api_client):
        response = api_client().post(self.endpoint, data={'learning_langs': ['English']})

        assert response.status_code == 200

    def test_news_page_authorized(self, api_client, regular_user):
        response = api_client().post(self.endpoint,
                                     data={'learning_langs': regular_user.data.user_profile.learning_langs.all()},
                                     HTTP_AUTHORIZATION=regular_user.token)

        assert response.status_code == 200
