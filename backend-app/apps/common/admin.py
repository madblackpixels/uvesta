import json

# models
from .models import Lang, Lead, Client

# common
from django.contrib import admin

from django.contrib.postgres.fields import (
    JSONField as JSONField_field
)

from django.contrib.postgres.forms.jsonb import (
    InvalidJSONInput,
    JSONField as JSONField_forms
)


# support
class ReadableJSONFormField(JSONField_forms):
    def prepare_value(self, value):
        if isinstance(value, InvalidJSONInput):
            return value
        return json.dumps(value, ensure_ascii=False, indent=4)


# registry admin
admin.site.register(Lead)
admin.site.register(Client)


@admin.register(Lang)
class ExampleAdmin(admin.ModelAdmin):
    formfield_overrides = {
        JSONField_field: {'form_class': ReadableJSONFormField},
    }
