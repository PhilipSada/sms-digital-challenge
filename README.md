# Setting up this app
Express(Node.js web application framework) was used as the backend for this task

## Setting up the server side
### Step One (Create a .env file)
Inside the root directory in the server folder, please create a .env file at the root directory and copy and paste the following code 

DB_HOST="localhost"
DB_DATABASE="YOUR DATABASE NAME"
DB_USERNAME="YOUR DATABASE USERNAME"
DB_PASSWORD= "YOUR DATABASE PASSWORD"

if you want to use a different database (not mysql), you may need to install the appopriate driver (i.e mariadb, sqlite3, tedious etc) Please refer to the sequelize documentation
https://sequelize.org/v7/manual/getting-started.html

### Step Two (Install dependencies)
In the server folder run
yarn install

### Step Three (Database)
This project uses sequelize to manage the database  so in the server folder run

yarn run db-setup (This would create the database schema, table and seed the data)


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