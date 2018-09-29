# models
from .models import Section, Contact, Feedback, Portfolio

# common
from django.contrib import admin


class SectionConfigs(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    exclude = ('section ',)
    readonly_fields = ('section',)


class ContactConfigs(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False

    def has_delete_permission(self, request, obj=None):
        return False


# registry admin
admin.site.register(Section, SectionConfigs)
admin.site.register(Contact, ContactConfigs)
admin.site.register(Feedback)
admin.site.register(Portfolio)

