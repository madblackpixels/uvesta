FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf
RUN  mkdir /backend_logs
RUN  mkdir /ssl_cert
COPY ./ssl_cert /ssl_cert

CMD ["nginx", "-g", "daemon off;"]
WORKDIR /backend_logs
