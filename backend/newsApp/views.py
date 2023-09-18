from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
import json


class NewsList(APIView):
    def get(self, request):
        with open('static/data/news_english_data.json',
                  mode='r',
                  encoding='utf-8') as news_english_data:
            data = json.load(news_english_data)
        return Response(status=status.HTTP_200_OK)
