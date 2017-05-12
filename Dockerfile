FROM booybooy/base:1.0

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

EXPOSE 3000

CMD ["npm", "start"]

