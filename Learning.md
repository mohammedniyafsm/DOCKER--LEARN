# Frist method used here

## dockerfile (1)

`FROM node:20-alpine`

`WORKDIR /app`

`COPY package*.json ./`

`RUN npm install`

`COPY  . .`

`ENV DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres`


`RUN DATABASE_URL=$DATABASE_URL npx prisma migrate dev`
`RUN npx prisma generate`
`RUN npm run build`

`EXPOSE 3000  `

`CMD ["npm", "start"]``


## Docker installation(1)
-Install docker

-create a network :
                  - `docker network create user_project`

-Start postgres :
                  - `docker run -e POSTGRES_PASSWORD=mysecretpassword --network user_project --name postgres  -d -p 5432:5432 postgres`

-Build the image :
                  - ` docker build --network=host -t user-projects .`.

-Start the image:
                  - ` docker run DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres --network user_project -p 3000:3000 user-projects`


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# Second Method :


`FROM node:20-alpine`

`WORKDIR /app`

`COPY package.*json /`

`RUN npm install`

`COPY . .`

`RUN npx prisma generate`
`RUN npm run build `

`EXPOSE 3000`

`CMD ["npm","run","dev:docker"]`


# docker installion(2):
-Install docker

-create a network :
                  - `docker network create user_project`

-Start postgres :
                  - `docker run -e POSTGRES_PASSWORD=mysecretpassword --network user_project --name postgres  -d -p 5432:5432 postgres`

-Build the image :
                  - ` docker build --network=host -t user-projects .`.

-Start the image:
                  - ` docker run DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres --network user_project -p 3000:3000 user-projects`
