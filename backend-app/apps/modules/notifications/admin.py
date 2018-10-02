from django.contrib import admin
from .models import NotificationModuleConfig, SmtpConfig


class NotificationModuleConfig_changed(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    exclude = ('system_description', 'mail_template')
    readonly_fields = ('system_description', 'mail_template')


# registry admin
admin.site.register(NotificationModuleConfig, NotificationModuleConfig_changed)
admin.site.register(SmtpConfig)
