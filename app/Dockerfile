FROM node:7.2

RUN apt-get update && \
    apt-get install -y python-pip
RUN pip install --upgrade pip && \
    pip install dumb-init

RUN mkdir /root/app
WORKDIR /root/app

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]
