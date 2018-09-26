FROM nginx:1.9

RUN touch /error.log
RUN touch /access.log

RUN rm -v /etc/nginx/nginx.conf
ADD ./nginx.conf /etc/nginx/
