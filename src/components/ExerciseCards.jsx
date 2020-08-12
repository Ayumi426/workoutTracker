import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function ExerciseCards() {
  const [pastWorkouts, setPastWorkouts] = useState([]);
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [boolean, setBoolean] = useState(false);
  const [lastWeek, setLastWeek] = useState("");
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    if (boolean === false) {
      getWorkouts();
      getLastWeek();
    }
  });

  async function getWorkouts() {
    setBoolean(true);
    let req = await Axios.get("/workouts");
    let data = req.data;
    setAllWorkouts(data);
  }

  function getLastWeek() {
    var today = new Date();
    var week = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
    );
    setLastWeek(week);
    setTodayDate(today);
  }

  allWorkouts.map((workouts, index) => {
    const date = new Date(workouts.date);
    return (
      <div key={index} id="workoutType">
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

  const deleteWorkout = async (id) => {
    try {
      await fetch(`workouts/${id}`, {
        method: "DELETE",
      });
      setPastWorkouts(pastWorkouts.filter((workouts) => workouts.id !== id));
    } catch (err) {
      console.error("Error adding transactions!", err);
    }
  };

  function displayPastWorkouts() {
    const pastWorkoutArray = [];
    for (let i = 0; i < allWorkouts.length; i++) {
      if (new Date(allWorkouts[i].date) > lastWeek) {
        pastWorkoutArray.push(allWorkouts[i]);
        console.log(pastWorkoutArray);
      }
    }
    return pastWorkoutArray.map((workouts, index) => {
      const date = new Date(workouts.date);
      return (
        <div key={index} id="workoutType">
          <div id="removeButtonContainer">
            <button
              id="remove"
              onClick={async () => {
                await deleteWorkout(workouts.id);
                console.log(workouts.id);
                window.location.reload();
              }}
            >
              x
            </button>
          </div>
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
  return <div id="displayCards">{displayPastWorkouts()}</div>;
}
