FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf
RUN  mkdir /frontend_logs
RUN  mkdir /ssl_cert
COPY ./ssl_cert /ssl_cert

CMD ["nginx", "-g", "daemon off;"]
WORKDIR /frontend_logs
