from rest_framework import generics

from apps.common.models      import Pages
from apps.common.serializers import PagesSerializer


class IntroPage(generics.ListAPIView):
    serializer_class = PagesSerializer
    queryset = Pages.objects.filter(name='IntroPage')

