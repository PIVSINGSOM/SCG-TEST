# manage service
FROM node:12.16.2
WORKDIR /app
COPY package.json .


RUN npm install -g nodemon
RUN npm install

# set time zone service to bangkok
ENV TZ=Asia/Bangkok  
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY . .
EXPOSE 3000
CMD ["npm", "run" , "dev"]





# docker build -t smart-homework .
# docker run -it -p 9000:3000 smart-homework:latest
# docker kill $(docker ps -q)
# docker rm $(docker ps -a -f status=exited -q)
# docker rmi $(docker images -a -q)


# docker exec -it smart_home_work /bin/bash   