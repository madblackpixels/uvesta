from apps.common.models import (
    Feedback,
    Portfolio,
    Contact,
    IntroUl,
    Intro,
    Section,
    Team,
    Lead
)

from apps.common.serializers import (
    FeedbackCreateSerializer,
    PortfolioDataSerializer,
    ContactsDataSerializer,
    LeadCreateSerializer,
    IntroDataSerializer,
    IntroUlDataSerializer,
    LeadPhoneSerializer,
    TeamDataSerializer,
    LeadDataSerializer,
    SectionSerializer,
)

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


class IntroData(ListAPIView):
    serializer_class = IntroDataSerializer
    queryset = Intro.objects.all()


class IntroDataUl(ListAPIView):
    serializer_class = IntroUlDataSerializer
    queryset = IntroUl.objects.all()


class LeadData(ListAPIView):
    serializer_class = LeadDataSerializer
    queryset = Lead.objects.all()


# Forms
# -------------------------------------------------------------- >
class FeedbackCreate(CreateAPIView):
    serializer_class = FeedbackCreateSerializer
    permission_classes = (AllowAny, )


class LeadCreate(CreateAPIView):
    serializer_class = LeadCreateSerializer
    permission_classes = (AllowAny, )

class LeadPhone(CreateAPIView):
    serializer_class = LeadPhoneSerializer
    permission_classes = (AllowAny,)
