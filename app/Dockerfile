FROM node:7.2.0

RUN apt-get update && \
    apt-get install -y python-pip
RUN pip install --upgrade pip && \
    pip install dumb-init

RUN npm install riot -g

RUN mkdir /root/app
WORKDIR /root/app

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]
