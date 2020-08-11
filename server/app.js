//these are my endpoints/routes - lets the app know what data to fetch from which database and table

const express = require("express");
const path = require("path");
const db = require("./knex.js");

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "build")));

// outputs the entire table
app.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await db.select().table("workouts");
    res.json(workouts);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

//outputs by workout
app.get("/api/workouts/:workout", async (req, res) => {
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

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
