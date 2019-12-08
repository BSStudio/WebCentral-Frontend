# base image
FROM node:13.3.0-slim

RUN apt-get update && apt-get install

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . /app

# install dependencies
RUN npm install
RUN npm install -g @angular/cli@8.3.20


# start app
CMD ng serve --host 0.0.0.0 --disableHostCheck