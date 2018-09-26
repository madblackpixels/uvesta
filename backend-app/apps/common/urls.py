from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from apps.common import views

urlpatterns = [
    url(r'^main_page_content/$', views.IntroPage.as_view()),
    # -------------------------------------------------------------- >

    url(r'^client_block_content/$', views.ClientBlock.as_view()),

    # -------------------------------------------------------------- >
    url(r'^send_lead/$', views.LeadCreate.as_view())
]


urlpatterns = format_suffix_patterns(urlpatterns) 
