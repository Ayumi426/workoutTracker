import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Home() {
  const [allWorkouts, setWorkouts] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    if (boolean === false) {
      getWorkouts();
    }
  }, []);

  async function getWorkouts() {
    setBoolean(true);
    let req = await Axios.get("/workouts");
    let data = req.data;
    setWorkouts(data);
  }

  function displayWorkouts() {
    return allWorkouts.map((workouts, index) => {
      return (
        <div key={index} id="workoutType">
          {workouts.workout}
          <br></br>
          {workouts.date} | {workouts.reps}x{workouts.sets} |{" "}
          {workouts.weight_kg}kg ({workouts.weight_lb}lb)
        </div>
      );
    });
  }
  return <div id="displayWorkoutContainer">{displayWorkouts()}</div>;
}
