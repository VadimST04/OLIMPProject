from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from newsApp.news import News


@extend_schema(tags=["News"])
class NewsList(APIView):
    """
    View for getting news depending on languages
    """

    def post(self, request):
        """
        Handle POST requests for the view.d
        :param request: An HTTP request object.
        :return: Returns list of article objects
        """

        news = News.get_news(langs=request.data['learning_langs'])
        if not news:
            return Response({'detail': 'Something went wrong with news'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(news, status=status.HTTP_200_OK)
