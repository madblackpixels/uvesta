# coding=utf-8
from rest_framework import serializers

# Cache
from rest_framework_cache.serializers import CachedSerializerMixin
from rest_framework_cache.registry import cache_registry

# Models
from apps.common.models import Section, Contact, Feedback, Portfolio

# Other
import re

# Modules
from apps.modules.notifications.mail import Sender


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
        fields = ('phone', 'address', 'latitude', 'longitude')


class PortfolioDataSerializer(CachedSerializerMixin):
    class Meta:
        model = Portfolio
        fields = ('id', 'name', 'image')


cache_registry.register(ContactsDataSerializer)
cache_registry.register(PortfolioDataSerializer)


# smth Serializers
# -------------------------------------------------------------- >
class FeedbackCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('name', 'mail', 'text', 'phone', 'receipt', 'contract', 'decision', 'list', 'other')

    @staticmethod
    def create(validated_data):
        data = {
            validated_data['text']: re.compile('[^><`]+'),
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

        #try:
        Sender('test').send_mail()
        #except: pass

        return Feedback.objects.create(**validated_data)
