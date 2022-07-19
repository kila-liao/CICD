FROM centos:7
ARG BRANCH_NAME
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV
RUN curl -sL https://rpm.nodesource.com/setup_16.x | bash - && \
    yum -y install nodejs && \
    yum -y install git && \
    npm i -g @nestjs/cli
RUN git clone https://github.com/kila-liao/CICD.git -b $BRANCH_NAME
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
#RUN ["npm", "test"]
RUN npm run build
CMD ["npm", "run", "start:prod"]
