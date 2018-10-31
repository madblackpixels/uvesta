# coding=utf-8

# models
from .models import (
    Portfolio,
    LeadForm,
    Feedback,
    Section,
    Contact,
    IntroUl,
    Intro,
    Team,
    Lead
)

# common
from django.contrib import admin
from django.contrib.admin import AdminSite


# customize admin
# -------------------------------------------------------- >
admin.site.index_title = 'Административная панель'
admin.site.site_header = 'ООО "ЮВЕСТА"'
admin.site.site_title = 'ЮВЕСТА'

# customize blocks
# -------------------------------------------------------- >
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

    readonly_fields = (
        'name', 'phone', 'mail', 'system_date', 'text', 'receipt', 'contract', 'decision', 'list', 'other'
    )


class IntroConfig(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


class LeadFormConfig(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    readonly_fields = (
        'name', 'mail', 'system_date'
    )


# -------------------------------------------------------- >
# registry admin

admin.site.register(Section,  SectionConfigs)
admin.site.register(Contact,  ContactConfigs)
admin.site.register(Feedback, FeedbackConfig)
admin.site.register(LeadForm, LeadFormConfig)
admin.site.register(Intro,    IntroConfig)
admin.site.register(IntroUl)
admin.site.register(Portfolio)
admin.site.register(Team)
admin.site.register(Lead)

