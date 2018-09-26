#!/bin/bash
sleep 10

# migrations

python3 /backend/manage.py makemigrations
python3 /backend/manage.py migrate

python3 /backend/manage.py makemigrations common
python3 /backend/manage.py migrate common

python3 /backend/manage.py makemigrations notifications
python3 /backend/manage.py migrate notifications

python3 /backend/manage.py loaddata /backend/fixtures/common_langs.json
python3 /backend/manage.py loaddata /backend/fixtures/common_pages.json
python3 /backend/manage.py loaddata /backend/fixtures/common_clients.json

# create admin user

echo "from django.contrib.auth.models import User; 
User.objects.filter(email=$ADMIN_MAIL).delete(); 
User.objects.create_superuser($ADMIN_NAME, $ADMIN_MAIL, $ADMIN_PASS)" | python3 /backend/manage.py shell

# run service

yes 'yes' | python3 /backend/manage.py collectstatic

if [[ $ENV = "development" ]]; then
	python3 manage.py runserver $BACKEND_SERVICE_HOST:$BACKEND_SERVICE_PORT
else
	touch /uwsgi.log
	/usr/local/bin/uwsgi --ini /backend/etc/uwsgi.ini
fi
