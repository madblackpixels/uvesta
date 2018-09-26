from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets


# Сериализаторы описывают представление данных.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')


# Наборы представлений описывают поведение представлений.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# Роутеры позволяют быстро и просто сконфигурировать адреса.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

# Привяжите конфигурацию URL, используя роутеры.
# Так же мы предоставляем URL для авторизации в браузере.

urlpatterns = [
    url(r'^', include('apps.common.urls')),
]
