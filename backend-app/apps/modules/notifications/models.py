from django.db import models

from datetime import date


# -------------------------------------------------------------- >
# Site models
class SmtpConfig(models.Model):

    smtp_server = models.CharField(max_length=250, blank=False)
    sender = models.CharField(max_length=250, blank=False)
    password = models.CharField(max_length=250, blank=False)

    # system fields
    system_date = models.DateField(default=date.today, blank=False)

    def __str__(self):
        return self.smtp_server


class NotificationModuleConfig(models.Model):

    system_description = models.CharField(max_length=250, blank=False)
    human_description = models.CharField(max_length=250, blank=False)

    mail_template = models.CharField(max_length=250, blank=False)
    recipients = models.CharField(max_length=250, blank=False)

    # system fields
    system_date = models.DateField(default=date.today, blank=False)
    smtp_config = models.ForeignKey(SmtpConfig, on_delete=models.CASCADE)

    def __str__(self):
        return self.human_description




