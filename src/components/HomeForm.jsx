import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HomeForm() {
  const [workoutType, setWorkoutType] = useState("");
  const [date, setDate] = useState("");
  const [sets, setSet] = useState("");
  const [reps, setRep] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [weightlb, setWeightLb] = useState("");
  const [weightMetric, setWeightMetric] = useState("kg");

  function addWorkout() {
    const workout = {
      workout: workoutType,
      date: date,
      sets: sets,
      reps: reps,
      weight_kg: weightKg,
      weight_lb: weightlb,
    };
    fetch("http://localhost:3000/workouts/add", {
      method: "post",
      body: JSON.stringify(workout), // where data is the data you want to send
      headers: { "Content-type": "application/json" },
    });
  }

  return (
    <div id="containerForm">
      <form id="addWorkoutForm">
        <label for="workoutType">Workout Type: </label>
        <input
          type="text"
          id="workoutType"
          onChange={(e) => setWorkoutType(e.target.value)}
          required
        />
        <br></br>
        <label for="workoutDate">Date:</label>
        <input
          type="date"
          id="workoutDate"
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br></br>
        <label for="workoutSets">Sets:</label>
        <input
          type="number"
          id="workoutSets"
          onChange={(e) => setSet(e.target.value)}
          required
        />
        <br></br>
        <label for="workoutReps">Reps:</label>
        <input
          type="number"
          id="workoutReps"
          onChange={(e) => setRep(e.target.value)}
          required
        />
        <br></br>
        <label for="workoutWeight">Weight:</label>
        <input
          type="number"
          id="workoutWeight"
          onChange={function weight(e) {
            console.log("this is weightMetric", weightMetric);
            if (weightMetric === "lb") {
              setWeightLb((e.target.value / 1).toFixed(2));
              setWeightKg((e.target.value / 2.2046).toFixed(2));
            } else {
              setWeightKg((e.target.value / 1).toFixed(2));
              setWeightLb((e.target.value * 2.2046).toFixed(2));
            }
          }}
        />
        <select
          id="metric"
          onChange={(e) => {
            setWeightMetric(e.target.value);
          }}
        >
          <option value="kg">kg</option>
          <option value="lb">lb</option>
        </select>
      </form>
      <button
        onClick={() => {
          addWorkout();
          document.getElementById("addWorkoutForm").reset();
        }}
      >
        Upload Workout
      </button>
    </div>
  );
}
