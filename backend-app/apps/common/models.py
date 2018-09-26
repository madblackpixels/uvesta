from django.contrib.postgres.fields import JSONField
from django.db import models

from datetime import date


# -------------------------------------------------------------- >
# Site models
class Lang(models.Model):
    ru = JSONField()
    en = JSONField()


class Page(models.Model):
    name = models.CharField(max_length=100, blank=False)
    data = models.ForeignKey(Lang, on_delete=models.CASCADE)


class Client(models.Model):
    name = models.CharField(max_length=200, blank=False)
    show = models.BooleanField(blank=False, default=False)

    logo_black = models.ImageField(upload_to='media/clients', default=False)
    logo_color = models.ImageField(upload_to='media/clients', default=False)

    system_date = models.DateField(default=date.today, blank=False)

    def __str__(self):
        return self.name


# -------------------------------------------------------------- >
# System models
class Lead(models.Model):
    name = models.CharField(max_length=100, blank=False)
    mail = models.EmailField()
    text = models.TextField()

    system_date = models.DateField(default=date.today, blank=False)

    def __str__(self):
        return self.name


