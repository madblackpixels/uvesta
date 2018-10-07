# coding=utf-8
from rest_framework import serializers

# Cache
from rest_framework_cache.serializers import CachedSerializerMixin
from rest_framework_cache.registry import cache_registry

# Models
from apps.common.models import (
    Portfolio,
    Feedback,
    LeadForm,
    Section,
    Contact,
    IntroUl,
    Intro,
    Team,
    Lead,
)

# Other
import re

# Modules
from apps.modules.notifications.mail import Sender


# Page Serializer
# -------------------------------------------------------------- >
class SectionSerializer(CachedSerializerMixin):
    class Meta:
        model = Section
        fields = ('id', 'section', 'status', 'title')


cache_registry.register(SectionSerializer)


# Blocks Serializers
# -------------------------------------------------------------- >
class ContactsDataSerializer(CachedSerializerMixin):
    class Meta:
        model = Contact
        fields = ('phone', 'address', 'latitude', 'longitude', 'subtitle')


class PortfolioDataSerializer(CachedSerializerMixin):
    class Meta:
        model = Portfolio
        fields = ('id', 'name', 'image', 'text')


class TeamDataSerializer(CachedSerializerMixin):
    class Meta:
        model = Team
        fields = ('id', 'name', 'image', 'text')


class IntroDataSerializer(CachedSerializerMixin):
    class Meta:
        model = Intro
        fields = ('title', 'subtitle')


class IntroUlDataSerializer(CachedSerializerMixin):
    class Meta:
        model = IntroUl
        fields = ('id', 'text')


class LeadDataSerializer(CachedSerializerMixin):
    class Meta:
        model = Lead
        fields = ('id', 'text')


cache_registry.register(ContactsDataSerializer)
cache_registry.register(PortfolioDataSerializer)
cache_registry.register(IntroDataSerializer)
cache_registry.register(TeamDataSerializer)
cache_registry.register(LeadDataSerializer)


# POST-Requests Serializers
# -------------------------------------------------------------- >
class FeedbackCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('name', 'mail', 'text', 'phone', 'receipt', 'contract', 'decision', 'list', 'other')

    @staticmethod
    def create(validated_data):
        data = {
            validated_data['text']: re.compile('[^`]+'),
            validated_data['name']: re.compile('[А-яA-z ]+'),
            validated_data['mail']: re.compile('([\w.%+-]+)@([\w-]+\.)+([\w]{2,})'),
            validated_data['phone']: re.compile('[+][7][ ][(][0-9]{3}[)][ ][0-9]{3}[ ][0-9]{2}[ ][0-9]{2}'),
        }

        for key, val in data.items():
            if val.match(key):
                continue
            else:
                raise serializers.ValidationError({
                    'error': 'Validation error!'
                })

        # check checkbox status.
        def checkbox_parser(_value):
            if _value:
                return '<span style="color:green">присутствует</span>'
            else:
                return '<span style="color:red">отсутствует</span>'

        try:
            Sender(
                'feedback', {
                    'NAME':  validated_data['name'],
                    'MAIL':  validated_data['mail'],
                    'PHONE': validated_data['phone'],
                    'TEXT':  validated_data['text'],

                    'RECEIPT':  checkbox_parser(validated_data['receipt']),
                    'CONTRACT': checkbox_parser(validated_data['contract']),
                    'DECISION': checkbox_parser(validated_data['decision']),
                    'LIST':     checkbox_parser(validated_data['list']),
                    'OTHER':    checkbox_parser(validated_data['other']),
                    }
                ).send_mail()
        except: pass

        return Feedback.objects.create(**validated_data)


class LeadCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('name', 'mail')

    @staticmethod
    def create(validated_data):
        data = {
            validated_data['name']: re.compile('[А-яA-z ]+'),
            validated_data['mail']: re.compile('([\w.%+-]+)@([\w-]+\.)+([\w]{2,})'),
        }

        for key, val in data.items():
            if val.match(key):
                continue
            else:
                raise serializers.ValidationError({
                    'error': 'Validation error!'
                })

        #try:
        Sender(
            'lead', {
                'NAME':  validated_data['name'],
                'MAIL':  validated_data['mail'],
                }
            ).send_mail()
        #except: pass

        return LeadForm.objects.create(**validated_data)
