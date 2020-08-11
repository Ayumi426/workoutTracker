require("dotenv").config();
const fs = require("fs");
const db = require("../server/knex.js");

(async () => {
  try {
    const workouts = JSON.parse(fs.readFileSync("./data/workouts.json"));
    for (const workoutlog of workouts) {
      const workout = workoutlog.workout;
      const date = workoutlog.date;
      const sets = workoutlog.sets;
      const reps = workoutlog.reps;
      const weight_kg = workoutlog.weight_kg;
      const weight_lb = workoutlog.weight_lb;

      const result = await db("workouts").insert({
        workout,
        date,
        sets,
        reps,
        weight_kg,
        weight_lb,
      });
      console.log(result);
    }
  } catch (err) {
    console.log("error insertig records", err);
  }
})();
