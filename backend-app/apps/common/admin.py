# models
from .models import Section, Contact, Feedback, Portfolio, Team

# common
from django.contrib import admin


class SectionConfigs(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    readonly_fields = ('section',)


class ContactConfigs(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


class FeedbackConfig(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    readonly_fields = ('name', 'phone', 'mail', 'system_date', 'text', 'receipt', 'contract', 'decision', 'list', 'other')


# registry admin
admin.site.register(Section,  SectionConfigs)
admin.site.register(Contact,  ContactConfigs)
admin.site.register(Feedback, FeedbackConfig)
admin.site.register(Portfolio)
admin.site.register(Team)

