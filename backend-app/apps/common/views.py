from apps.common.models      import Page, Lead, Client
from apps.common.serializers import PagesSerializer, LeadSerializer, ClientSerializer

# Permissions
from rest_framework.permissions import AllowAny

from rest_framework.generics import (
    CreateAPIView,
    ListAPIView
)


# Pages views
# -------------------------------------------------------------- >
class IntroPage(ListAPIView):
    serializer_class = PagesSerializer
    queryset = Page.objects.filter(name='IntroPage')


# Blocks views
# -------------------------------------------------------------- >
class ClientBlock(ListAPIView):
    serializer_class = ClientSerializer
    queryset = Client.objects.filter(show=True)


# System views
# -------------------------------------------------------------- >
class LeadCreate(CreateAPIView):
    serializer_class = LeadSerializer
    permission_classes = (AllowAny, )


