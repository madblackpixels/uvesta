# coding=utf-8
from django.dispatch import receiver
from django.db import models

from datetime import date
import os


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


# -------------------------------------------------------------- >
# Block models
class Contact(models.Model):
    class Meta:
        verbose_name = 'Раздел: Контакты'
        verbose_name_plural = 'Раздел: Контакты'

    phone = models.CharField(max_length=150,    blank=False)
    address = models.CharField(max_length=200,  blank=False)
    subtitle = models.CharField(max_length=200,  blank=False)
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
    text = models.TextField(blank=False)
    show = models.BooleanField()
    image = models.ImageField(upload_to='portfolio', blank=False)

    def __str__(self):
        return self.name


class Team(models.Model):
    class Meta:
        verbose_name = 'Раздел: Команда'
        verbose_name_plural = 'Раздел: Команда'

    name = models.CharField(max_length=150, blank=False)
    text = models.TextField(blank=False)
    show = models.BooleanField()
    image = models.ImageField(upload_to='team', blank=False)

    def __str__(self):
        return self.name


class Intro(models.Model):
    class Meta:
        verbose_name = 'Раздел: Интро-заголовки'
        verbose_name_plural = 'Раздел: Интро-заголовки'

    title = models.CharField(max_length=150, blank=False)
    subtitle = models.CharField(max_length=150, blank=False)

    def __str__(self):
        return self.title


class IntroUl(models.Model):
    class Meta:
        verbose_name = 'Раздел: Интро-описание'
        verbose_name_plural = 'Раздел: Интро-описание'

    text = models.TextField(blank=False)

    def __str__(self):
        return self.text


# -------------------------------------------------------------- >
# Models hooks
@receiver(models.signals.post_delete, sender=Team)
@receiver(models.signals.post_delete, sender=Portfolio)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    """
        Deletes images from filesystem.
        when corresponding `ImageField` object is deleted.
    """

    if instance.image:
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)


@receiver(models.signals.post_delete, sender=Team)
@receiver(models.signals.pre_save, sender=Portfolio)
def auto_delete_file_on_change(sender, instance, **kwargs):
    """
        Deletes old image from filesystem
        when corresponding `ImageField` object is updated
        with new file.
    """

    if not instance.pk:
        return False

    try:
        old_file = sender.objects.get(pk=instance.pk).image
    except sender.DoesNotExist:
        return False

    new_file = instance.image
    if not old_file == new_file:
        if os.path.isfile(old_file.path):
            os.remove(old_file.path)
