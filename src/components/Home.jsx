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
      const date = new Date(workouts.date);
      return (
        <div key={index} id="workoutTypeAll">
          <div id="title">{workouts.workout}</div>
          <br></br>
          <div id="description">
            {date.toDateString()}
            <br></br>
            {workouts.reps}x{workouts.sets} | {workouts.weight_kg}kg (
            {workouts.weight_lb}lb)
          </div>
        </div>
      );
    });
  }
  return <div id="displayWorkoutContainer">{displayWorkouts()}</div>;
}
