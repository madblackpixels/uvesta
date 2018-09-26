#!/usr/bin/env bash


####### Choice environment statement #######
while [[ $# -gt 1 ]]
do
	key="$1"
	case $key in
		-e|--env)
		ENV=$2
		shift ;;
	esac
	shift
done

if   [[ $ENV = "" ]]; then
	printf "ERR: forgot [-e; --env] attr\n"
	exit 1

elif [[ $ENV = "dev" ]]; then
	env_name="development"

elif [[ $ENV = "prd" ]]; then
	env_name="production"

elif [[ $ENV = "verify" ]]; then
	env_name="verify"

else
	printf "ERR: attr [-e; --env] is incorrect, use: dev, prd or verify\n"
	exit 1
fi

####### Pull updates #######
if [[ $env_name = "production" ]]; then
    git pull
fi

####### Parse environment attributes #######
while IFS="=" read lhs rhs
do
    if [[ ! $lhs =~ ^\ *# && -n $lhs ]]; then
        rhs="${rhs%%\#*}"
        rhs="${rhs%%*( )}"
        rhs="${rhs%\"*}"
        rhs="${rhs#\"*}"
        export $lhs=$rhs
    fi
done < "./environments/$env_name"

####### Prepair settings.py #######
rm -rf ./backend-app/core/settings.py && cp ./backend-app/core/settings_tmpl.py ./backend-app/core/settings.py

sed -i -e "s/ALLOWED_HOSTS = \[\]/ALLOWED_HOSTS = \[$ALLOWED_LIST\]/"  ./backend-app/core/settings.py
sed -i -e "s/SECRET_KEY =/SECRET_KEY = $SECRET_KEY/"                   ./backend-app/core/settings.py

echo "STATIC_ROOT = ${STATIC_ROOT}"   >> ./backend-app/core/settings.py
echo "STATIC_URL = ${STATIC_URL}"     >> ./backend-app/core/settings.py

echo "MEDIA_ROOT = ${MEDIA_ROOT}"     >> ./backend-app/core/settings.py
echo "MEDIA_URL = ${MEDIA_URL}"       >> ./backend-app/core/settings.py


if [[ $env_name = "production" ]]; then

	sed -i -e "s/CORS_ORIGIN_WHITELIST = ()/CORS_ORIGIN_WHITELIST = ($CORS_LIST)/" ./backend-app/core/settings.py
	sed -i -e "s/DEBUG =/DEBUG = False/"                                           ./backend-app/core/settings.py

else

	sed -i -e "s/CORS_ORIGIN_WHITELIST = ()/CORS_ORIGIN_ALLOW_ALL = True/" 		   ./backend-app/core/settings.py
	sed -i -e "s/DEBUG =/DEBUG = True/"                                            ./backend-app/core/settings.py

fi

rm -rf ./backend-app/core/settings.py-e

####### Prepair common.js #######
rm -rf ./frontend-app/src/common.js && cp ./frontend-app/src/common_tmpl.js ./frontend-app/src/common.js

sed -i -e "s/FRONTEND_REQ_HOST/$FRONTEND_REQ_HOST/"   ./frontend-app/src/common.js
sed -i -e "s/FRONTEND_REQ_PORT/$FRONTEND_REQ_PORT/"   ./frontend-app/src/common.js
sed -i -e "s/PROTOCOL/$PROTOCOL/"     				  ./frontend-app/src/common.js

rm -rf ./frontend-app/src/common.js-e

####### Prepair nginx.conf for production #######
if [[ $env_name = "production" ]]; then

	if [[ $PROTOCOL = "http" ]];then 
		rm -rf ./frontend-nginx/nginx.conf && cp ./frontend-nginx/configs/nginx_nossl.conf ./frontend-nginx/nginx.conf
		rm -rf ./backend-nginx/nginx.conf  && cp ./backend-nginx/configs/nginx_nossl.conf  ./backend-nginx/nginx.conf
	else
		rm -rf ./frontend_nginx/nginx.conf && cp ./frontend-nginx/configs/nginx_ssl.conf   ./frontend-nginx/nginx.conf
		rm -rf ./backend_nginx/nginx.conf  && cp ./backend-nginx/configs/nginx_ssl.conf    ./backend-nginx/nginx.conf
	fi 

	sed -i -e "s/BACKEND_NGINX_PORT/$BACKEND_NGINX_PORT/"           	 ./backend-nginx/nginx.conf
	sed -i -e "s/BACKEND_SERVICE_PORT/$BACKEND_SERVICE_PORT/"            ./backend-nginx/nginx.conf

	sed -i -e "s/HOST_NAME/$HOST_NAME/" 								 ./frontend-nginx/nginx.conf
	sed -i -e "s/HOST_NAME/$HOST_NAME/" 				 				 ./backend-nginx/nginx.conf

	rm -rf ./frontend-nginx/nginx.conf-e
	rm -rf ./backend-nginx/nginx.conf-e

fi

####### Prepair nginx.conf for verify #######
if [[ $env_name = "verify" ]]; then
	cp ./verify-nginx/validate_page.txt ./verify-nginx/$VALIDATE_PAGE

	rm -rf ./verify-nginx/nginx.conf && cp ./verify-nginx/nginx_tmpl.conf ./verify-nginx/nginx.conf

	sed -i -e "s/server_name ;/server_name $HOST_NAME, www.$HOST_NAME;/" ./verify-nginx/nginx.conf
	sed -i -e "s/VALIDATE_PAGE/$VALIDATE_PAGE/" 						 ./verify-nginx/nginx.conf

	rm -rf ./verify-nginx/nginx.conf-e

fi

####### Prepair database backups #######
#if [[ $env_name = "production" ]]; then
#	mkdir -p /srv/pg_backups/backups
#	cp ./database-backup/backup_script.py /srv/pg_backups/
#	crontab ./database-backup/crontab
#fi

####### Run docker-compose #######
docker-compose -f ./${env_name}.yml up

