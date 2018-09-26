FROM nginx:latest

ENV VALIDATE_PAGE=$VALIDATE_PAGE

RUN mkdir nginx_page
COPY ./$VALIDATE_PAGE /nginx_page/$VALIDATE_PAGE
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]