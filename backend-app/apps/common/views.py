from apps.common.models import Section, Contact, Feedback, Portfolio, Team
from apps.common.serializers import SectionSerializer, ContactsDataSerializer, FeedbackCreateSerializer, PortfolioDataSerializer, TeamDataSerializer

# Permissions
from rest_framework.permissions import AllowAny
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView
)


# Pages views
# -------------------------------------------------------------- >
class SectionsList(ListAPIView):
    serializer_class = SectionSerializer
    queryset = Section.objects.all()


# Blocks views
# -------------------------------------------------------------- >
class ContactsData(ListAPIView):
    serializer_class = ContactsDataSerializer
    queryset = Contact.objects.all()


class PortfolioData(ListAPIView):
    serializer_class = PortfolioDataSerializer
    queryset = Portfolio.objects.filter(show=True)[:15]


class TeamData(ListAPIView):
    serializer_class = TeamDataSerializer
    queryset = Team.objects.filter(show=True)[:9]


# Forms
# -------------------------------------------------------------- >
class FeedbackCreate(CreateAPIView):
    serializer_class = FeedbackCreateSerializer
    permission_classes = (AllowAny, )
