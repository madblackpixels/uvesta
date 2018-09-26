from rest_framework import serializers

# Cache
from rest_framework_cache.serializers import CachedSerializerMixin
from rest_framework_cache.registry import cache_registry

# Models
from apps.common.models import Page, Lead, Client

# Other
import re

# Modules
from apps.modules.notifications.mail import Sender


# Pages serializer
# -------------------------------------------------------------- >
class PagesSerializer(CachedSerializerMixin):

    data_ru = serializers.JSONField(source='data.ru', read_only=True)
    data_en = serializers.JSONField(source='data.en', read_only=True)

    class Meta:
        model = Page
        fields = ('id', 'data_ru', 'data_en')


# Blocks serializer
# -------------------------------------------------------------- >
class ClientSerializer(CachedSerializerMixin):
    class Meta:
        model = Client
        fields = ('id', 'logo_black', 'logo_color')


cache_registry.register(PagesSerializer)
cache_registry.register(ClientSerializer)


# System serializer
# -------------------------------------------------------------- >
class LeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lead
        fields = ('name', 'mail', 'text')

    @staticmethod
    def create(validated_data):
        data = {
            validated_data['name']: re.compile('[А-яA-z ]+'),
            validated_data['mail']: re.compile('([\w.%+-]+)@([\w-]+\.)+([\w]{2,})'),
            validated_data['text']: re.compile('[^><`]+'),
        }

        for key, val in data.items():
            if val.match(key):
                continue
            else:
                raise serializers.ValidationError({
                    'error': 'Validation error!'
                }); break

        #Sender('test').send_mail()
        return Lead.objects.create(**validated_data)

