def test_news_page(client):
    response = client.post('/api/news/')

    assert response.status_code == 200
