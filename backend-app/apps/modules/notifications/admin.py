from django.contrib import admin
from .models import NotificationModuleConfig, SmtpConfig

admin.site.register(NotificationModuleConfig)
admin.site.register(SmtpConfig)
