FROM node:9.5 as builder

WORKDIR   /frontend
COPY    . /frontend

RUN npm install
RUN npm install -g react-scripts@1.1.1
RUN npm run build
