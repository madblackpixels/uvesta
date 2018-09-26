#!/bin/bash
sleep 5

python3 manage.py makemigrations common
python3 manage.py migrate common
python3 manage.py loaddata /backend/fixtures/common_langs.json
python3 manage.py loaddata /backend/fixtures/common_pages.json

touch /uwsgi.log

/usr/local/bin/uwsgi --ini /backend/etc/uwsgi.ini
