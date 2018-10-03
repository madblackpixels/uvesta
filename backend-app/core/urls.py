from rest_framework_cache.registry import cache_registry
from django.conf.urls import url, include
from django.contrib import admin

# for static / media
from django.conf import settings
from django.conf.urls.static import static

cache_registry.autodiscover()

urlpatterns = [
    url(r'^api/', include('apps.common.urls')),
    url(r'^uvesta_adm/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
