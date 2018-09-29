# coding=utf-8
from django.db import models
from datetime import date


# -------------------------------------------------------------- >
# Site models
class Section(models.Model):
    class Meta:
        verbose_name = 'Разделы сайта'
        verbose_name_plural = 'Разделы сайта'

    default = "on"
    section_status = (
        ('off', 'скрыт'),
        ('on',  'активный'),
    )

    section = models.CharField(max_length=150, blank=False)
    title = models.CharField(max_length=200, blank=True)
    status = models.CharField(default=default, max_length=20, choices=section_status)

    def __str__(self):
        return self.section


class Contact(models.Model):
    class Meta:
        verbose_name = 'Раздел: Контакты'
        verbose_name_plural = 'Раздел: Контакты'

    phone = models.CharField(max_length=150,    blank=False)
    address = models.CharField(max_length=200,  blank=False)
    latitude = models.CharField(max_length=30,  blank=False)
    longitude = models.CharField(max_length=30, blank=False)

    def __str__(self):
        return self.address


class Feedback(models.Model):
    class Meta:
        verbose_name = 'Раздел: Заявки'
        verbose_name_plural = 'Раздел: Заявки'

    name = models.CharField(max_length=150, blank=False)
    phone = models.CharField(max_length=30, blank=False)
    mail = models.CharField(max_length=50,  blank=False)
    text = models.TextField(blank=False)

    receipt = models.BooleanField()
    contract = models.BooleanField()
    decision = models.BooleanField()
    list = models.BooleanField()
    other = models.BooleanField()

    # system fields
    system_date = models.DateField(default=date.today, blank=False)

    def __str__(self):
        return self.name


class Portfolio(models.Model):
    class Meta:
        verbose_name = 'Раздел: Портфолио'
        verbose_name_plural = 'Раздел: Портфолио'

    name = models.CharField(max_length=150, blank=False)
    image = models.ImageField(upload_to='media/portfolio', default=False)

    def __str__(self):
        return self.name

