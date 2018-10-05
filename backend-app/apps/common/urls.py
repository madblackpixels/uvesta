from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from apps.common import views

urlpatterns = [

    # General requests
    url(r'^sections_list/$',   views.SectionsList.as_view()),

    # Block requests
    url(r'^portfolio_data/$',  views.PortfolioData.as_view()),
    url(r'^contacts_data/$',   views.ContactsData.as_view()),
    url(r'^intro_data_ul/$',   views.IntroDataUl.as_view()),
    url(r'^intro_data/$',      views.IntroData.as_view()),
    url(r'^team_data/$',       views.TeamData.as_view()),

    # Post-request
    url(r'^send_feedback/$', views.FeedbackCreate.as_view()),
]


urlpatterns = format_suffix_patterns(urlpatterns) 
