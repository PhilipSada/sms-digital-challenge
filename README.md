# Setting up this app
Express(Node.js web application framework) was used as the backend for this task

## Setting up the server side
### Step One (Install dependencies)
In the server folder run
yarn install

### Step Two (Database config setup)
In the config.js file in the config folder inside the server folder,
Please replace the development object fields with your database credentials

 "development": {
        "username": "YOUR_USERNAME",
        "password": "YOUR_PASSWORD",
        "database": "YOUR_DATABASE_NAME",
        "host": "localhost",
        "dialect": "mysql"
  },

if you want to use a different database (not mysql), you may need to install the appopriate driver (i.e mariadb, sqlite3, tedious etc) Please refer to the sequelize documentation
https://sequelize.org/v7/manual/getting-started.html



### Step Three (create the database schema, table and seed the data)
This project uses sequelize cli to manage the database  so to create the database schema, table and seed the dataso in the server folder please run

yarn run db-setup


### Step Four (Start the expressjs server)
yarn start or yarn server


## Setting up the client side (React)

### Step One (Install dependencies)
In the client folder run

yarn install

### Step Two (Start development server)
yarn start


Server side runs on http://localhost:8080 
Client side runs on http://localhost:3000 