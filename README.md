# Welcome to Undou Now <br> the Workout Tracker for Rajio Taiso Graduates

<div align="center">
  <img src="img/logo.png" width="200">
</div>

## Solo Full Stack API Project

- Author: Ayumi Funaki @Ayumi426

## Our awesome features

Access to our Sevice: https://ayumi-workout-tracking-app.herokuapp.com/

Hello fellow Gym Rats!

Are you tired of rajio taiso and looking to upgrade your fitness goals? Undou Now is an app made for you!

When you visit the home page, you can see your workout history! You're weekly history is to the left and your complete history is listed at the bottom.

Empty right now? don't worry, you can go a head and add your workouts with our handy form complete with pre-coded workouts!

<div align="center">
  <img src="img/Homepage.png" width="860">
</div>
<br>
<div align="center">
  <img src="img/Workout-history.png" width="860">
</div>

Future Planned Releases:

- Personal Record (PR) view of all of your workouts
- Ability to add your own workout types
- Performance history of each workout (monthly, bi-annually, annually)
- Ability to pull specific workouts by day

## Architecture

<div align="center">
  <img src="img/ninja_truck_architecture.png" width="860">
</div>

## Getting Started: How to <b>"Undou Now"<b>

### First Steps

- Get a gym membership

### Software Version

- node 12.x
- yarn 1.22.x
- psotgres 12.x

### Tested environment

- Mac OSX Catalina
- Heroku(node) + Heroku Postgres

### Install Dependencies

- type `yarn install` to install dependent softwares.

### Set up Database

#### Configure your connection to DB

- create .env file

```
DB_URL=postgres://username:password@localhost:5432/workout-app
DB_USER=XusernameX
DB_PASSWORD=XpasswordX
DB_HOST=localhost
DB_PORT=5432
```

**Change XusernameX and XpasswordX**
If you have issues - you may need to change DB to DATABASE in the .env file template given

#### Running default migration file and seeding

1. log in to postgres and create database "**workout-app**"
2. connect to database "**workout-app**"
3. run `yarn migrate` to run the default migration file
4. run `yarn seed` or `node ./data/import.js` to seed the data.

### Creating new migration file and seeding

- how to

  1. Run `$ knex migrate:make <filename>` to make a new migration file
  2. Go to the newly created migration file, and write your new schema.
  3. Now you are ready to migrate!
     Before running migration, please make sure that the database named "**workout-app**" has already been created.
  4. Run `yarn migrate` or `$ knex migrate:latest` to run migration file.
  5. Make sure that the new table named 'locations' is created in your **truckstop** database.
  6. Run `yarn seed` or `node ./data/import.js` to seed the data into **workout-app**.
  7. Go into the 'workout-app' database (\c workout-app in psql) and check whether the seeding is succeeded by `SELECT * FROM locations`.

- note

  - These instruction were provided for the purpose of creating a new database.
    Altering the table structure may disrupt the workings of our app.
    If changes to these processes become necessary, we will investigate and update this document.
  - knexfile.js in project folder is created by the command `knex init` just to make knex command available.

- Tips
  You may want to use pgAdmin4 to display all data using GUI.

### Start Tracking!

- type `yarn build` to build frontend packages.
- type `yarn start` to start backend API server.
  API server starts with port 9000 by default
- type `yarn serve` to start frontend server.
  frontend server start with prot 3000 by default.
- access to frontend server! you are almost Ninja!
