import json

from postsApp.models import Post


class TestPostsPage:

    endpoint = '/api/posts/'

    def test_get_all_posts(self, image_post_factory, regular_user, api_client):
        image_post_factory.create_batch(10)

        response = api_client().get(self.endpoint, HTTP_AUTHORIZATION='Bearer ' + regular_user.token)

        assert response.status_code == 200
        assert len(json.loads(response.content)) == 10

    def test_get_all_my_posts(self, image_post_factory, post_factory, regular_user, api_client):
        for _ in range(5):
            post = post_factory.create(user=regular_user.data)
            image_post_factory.create(post=post)

        image_post_factory.create_batch(10)

        my_posts_endpoint = self.endpoint + 'mypost'
        response = api_client().get(my_posts_endpoint,  HTTP_AUTHORIZATION='Bearer ' + regular_user.token)

        assert response.status_code == 200
        assert len(json.loads(response.content)) == 5
