#!/usr/bin/python

import smtplib

from email.mime.multipart import MIMEMultipart
from email.mime.text      import MIMEText
import os

from apps.modules.notifications.models import (
    NotificationModuleConfig,
    SmtpConfig,
)


# ---------------------------------------------------------------- >
def get_mail_config(_notify_type):
    """
        Getting recipients and template from admin for sending mail.
    """

    config_data = NotificationModuleConfig.objects.get(
        system_description=_notify_type
    )

    return {
        'recipients': config_data.recipients,
        'mail_template': config_data.mail_template,
        'mail_title': config_data.human_description
    }


def get_smtp_config(_notify_type):
    """
        Getting smtp server configs for current mail type.
    """

    config_data =SmtpConfig.objects.get(
        notificationmoduleconfig__system_description=_notify_type
    )

    return {
        'smtp_server': config_data.smtp_server,
        'sender': config_data.sender,
        'password': config_data.password,
    }


# ->
class Sender:
    def __init__(self, _notify_type, params={}):
        self.mail_config = get_mail_config(_notify_type)
        self.smtp_config = get_smtp_config(_notify_type)
        self.mail_data = params

    def set_mail_text(self):
        template_filepath = '{}/templates/{}'.format(
            os.path.dirname(os.path.abspath(__file__)),
            self.mail_config.get('mail_template')
        )

        with open(template_filepath, 'r') as template:
            text = template.read()

        for pattern, value in self.mail_data.items():
            text = text.replace(pattern, value)

        return text

    def send_mail(self):
        msg = MIMEMultipart('alternative')

        msg['Subject'] = self.mail_config.get('mail_title')
        msg['From']    = self.smtp_config.get('sender')
        msg['To']      = self.mail_config.get('recipients')
        mail_message   = self.set_mail_text()

        msg.attach(MIMEText(mail_message, 'html', 'UTF-8'))

        s = smtplib.SMTP(self.smtp_config.get('smtp_server'))
        s.ehlo()
        s.starttls()
        s.login(self.smtp_config.get('sender'), self.smtp_config.get('password'))

        s.sendmail(
            self.smtp_config.get('sender'),
            self.mail_config.get('recipients').split(','),
            msg.as_string()
        )

        return True