from rest_framework import serializers
from apps.common.models import Pages


class PagesSerializer(serializers.ModelSerializer):
    data_ru = serializers.JSONField(source='data.ru', read_only=True)
    data_en = serializers.JSONField(source='data.en', read_only=True)

    class Meta:
        model = Pages
        fields = ('id', 'data_ru', 'data_en')


