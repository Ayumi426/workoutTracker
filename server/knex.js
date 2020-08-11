//this is my database information - lets my app know which database to connect to

const knex = require("knex");

const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/workout_app`,
  searchPath: "public",
});

module.exports = db;
