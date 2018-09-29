from apps.common.models import Section, Contact, Feedback, Portfolio
from apps.common.serializers import SectionSerializer, ContactsDataSerializer, FeedbackCreateSerializer, PortfolioDataSerializer

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
    queryset = Portfolio.objects.all()


# Forms
# -------------------------------------------------------------- >
class FeedbackCreate(CreateAPIView):
    serializer_class = FeedbackCreateSerializer
    permission_classes = (AllowAny, )
