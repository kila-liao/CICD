FROM centos:7
RUN curl -sL https://rpm.nodesource.com/setup_16.x | bash - && \
    yum -y install nodejs && \
    yum -y install git && \
    npm i -g @nestjs/cli
RUN git clone https://github.com/kila-liao/CICD.git
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
CMD ["npm", "test"]
