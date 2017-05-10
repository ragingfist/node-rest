FROM ubuntu:16.04

# so that no question is asked during apt-get
ENV DEBIAN_FRONTEND noninteractive
# enable UTF-8 on terminal
ENV LANG en_US.UTF-8
# ensures xterm to support text-based UI tools, i.e. top, less, etc.
ENV TERM xterm

# Setup env:
RUN echo "export PS1='\e[1;31m\]\u@\h:\w\\$\[\e[0m\] '" >> /root/.bashrc && \
    echo 'export > /etc/envvars' >> /root/.bashrc

# Install basics:
RUN apt-get update && apt-get install -y \
    curl \
    git \
    locales \
    sudo \
    vim \
    wget && \
    rm -rf /var/lib/apt/lists/*

# Node-specific
# Install Node
RUN curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash - && \
    apt-get update && apt-get install -y \
    nodejs \
    build-essential && \
    rm -rf /var/lib/apt/lists/*

# Setup & install app:
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD ["npm", "start"]

