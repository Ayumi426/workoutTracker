//these are my endpoints/routes - lets the app know what data to fetch from which database and table

const express = require("express");
const path = require("path");
const db = require("./knex.js");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "build")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// outputs the entire table
app.get("/workouts", async (req, res) => {
  try {
    const workouts = await db.select().table("workouts");

    res.json(workouts);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

//outputs by workout
app.get("/workouts/:workout", async (req, res) => {
  try {
    let workout = req.params.workout.replace(/^:/, "");
    const workoutHistory = await db
      .select()
      .table("workouts")
      .where("workout", "=", workout);
    res.json(workoutHistory);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

//posting a new workout
app.post("/workouts/add", async (req, res) => {
  try {
    console.log("this is req.body", req.body);
    await db("workouts").insert(req.body);
    console.log("success");
    res.sendStatus(200);
  } catch (err) {
    console.error("error adding workout!", err);
    res.sendStatus(500);
  }
});

//deleting a post
app.delete("/workouts/:id", async (req, res) => {
  try {
    console.log("this is req.body", req.body);
    await db("workouts").where({ id: req.params.id }).del();
    console.log("success");
    res.sendStatus(200);
  } catch (err) {
    console.error("Error adding transaction!", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
