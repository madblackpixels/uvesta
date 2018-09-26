FROM node:8.11.1
ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install -g serve
CMD serve -s build

WORKDIR /frontend
COPY package.json ./package.json
COPY npm-shrinkwrap.json ./npm-shrinkwrap.json
RUN npm install

COPY . /frontend
RUN npm run build --production
