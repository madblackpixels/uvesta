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
	export ENV_NAME="development"
	env_dir="./environments/development"
elif [[ $ENV = "prd" ]]; then
	export ENV_NAME="production"
	env_dir="./environments/production"
else
	printf "ERR: attr [-e; --env] is incorrect, use: dev, prd\n"
	exit 1
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
done < $env_dir



####### Create nginx.conf #######
rm -rf ./nginx/nginx.conf && cp ./nginx/nginx_template.conf ./nginx/nginx.conf

sed -i -e "s/NGINX_PORT/$NGINX_PORT/"           ./nginx/nginx.conf
sed -i -e "s/BACKEND_PORT/$BACKEND_PORT/"       ./nginx/nginx.conf
sed -i -e "s/HOST_NAME/$HOST_NAME/"       		./nginx/nginx.conf
sed -i -e "s/ALLOW_DOMAIN/$ALLOW_DOMAIN/"       ./nginx/nginx.conf

rm -rf ./nginx/nginx.conf-e



####### Create settings.py #######
rm -rf ./backend/core/settings.py && cp ./backend/core/settings_tmpl.py ./backend/core/settings.py

sed -i -e "s/ALLOWED_HOSTS = \[\]/ALLOWED_HOSTS = \[$ALLOW_HOST_LIST\]/" 			./backend/core/settings.py
sed -i -e "s/CORS_ORIGIN_WHITELIST = ()/CORS_ORIGIN_WHITELIST = ($CORS_LIST)/"  ./backend/core/settings.py

rm -rf ./backend/core/settings.py-e



####### Create common.js #######
rm -rf ./frontend/src/common.js && cp ./frontend/src/common_tmpl.js ./frontend/src/common.js


rm -rf ./frontend/src/common.js-e

####### Run docker-compose #######
docker-compose up
