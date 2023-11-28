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

    def test_view_single_post(self, api_client, regular_user, image_post_factory, comment_factory, post_factory):
        post = post_factory.create(user=regular_user.data)
        image_post_factory.create(post=post)
        for _ in range(10):
            comment_factory.create(user=regular_user.data, post=post)

        post_view_endpoint = self.endpoint + f'{post.pk}'
        response = api_client().get(post_view_endpoint, HTTP_AUTHORIZATION='Bearer ' + regular_user.token)

        assert response.status_code == 200

        content = json.loads(response.content)
        assert len(content.get('comments')) == 10

    # def test_update_post(self, api_client, regular_user, image_post_factory, post_factory):
    #     post = post_factory.create(user=regular_user.data)
    #     image_post_factory.create(post=post)
    #
    #     new_data_post = {}


class TestComment:

    endpoint = '/api/posts/comment/'

    def test_comment_create(self, image_post_factory, post_factory, regular_user, api_client):
        post = post_factory(user=regular_user.data)
        image_post_factory.create(post=post)

        new_comment_data = {'text': 'new_text', 'post': post}

        response = api_client().post(self.endpoint, data=new_comment_data,
                                     HTTP_AUTHORIZATION='Bearer ' + regular_user.token)

        assert response.status_code == 201
