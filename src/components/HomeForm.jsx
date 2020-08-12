import React, { useState } from "react";

export default function HomeForm() {
  const [workoutType, setWorkoutType] = useState("");
  const [date, setDate] = useState("");
  const [sets, setSet] = useState("");
  const [reps, setRep] = useState("");
  const [weightKg, setWeightKg] = useState("0.00");
  const [weightlb, setWeightLb] = useState("0.00");
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
    fetch("/workouts/add", {
      method: "post",
      body: JSON.stringify(workout), // where data is the data you want to send
      headers: { "Content-type": "application/json" },
    });
  }

  return (
    <div id="containerForm">
      <form id="addWorkoutForm">
        <div id="button-container">
          <button
            id="workoutButton1"
            value="Bench Press"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Bench Press
          </button>
          <button
            id="workoutButton1"
            value="Pushups"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Pushups
          </button>
          <button
            id="workoutButton1"
            value="Chest Fly"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Chest Fly
          </button>
          <button
            id="workoutButton1"
            value="Pull Down"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Pull Down
          </button>
          <button
            id="workoutButton2"
            value="Pull Up"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Pull Up
          </button>
          <button
            id="workoutButton2"
            value="Back Extension"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Back Extension
          </button>
          <button
            id="workoutButton2"
            value="Bent Over Row"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Bent Over Row
          </button>
          <button
            id="workoutButton2"
            value="Upright Row"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Upright Row
          </button>
          <button
            id="workoutButton3"
            value="Shoulder Press"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Shoulder Press
          </button>
          <button
            id="workoutButton3"
            value="Shoulder Fly"
            onClick={(e) => {
              setWorkoutType(e.target.value);
            }}
          >
            Shoulder Fly
          </button>
          <button
            id="workoutButton4"
            value="Tricep Extension"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Tricep Extension
          </button>
          <button
            id="workoutButton4"
            value="Bicep Curl"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Bicep Curl
          </button>
          <button
            id="workoutButton5"
            value="Front Squat"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Front Squat
          </button>
          <button
            id="workoutButton5"
            value="Lunges"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Lunges
          </button>
          <button
            id="workoutButton5"
            value="Dead Lift"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Dead Lift
          </button>
          <button
            id="workoutButton5"
            value="Leg Extension"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Leg Extension
          </button>
          <button
            id="workoutButton5"
            value="Leg Curl"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Leg Curl
          </button>
          <button
            id="workoutButton5"
            value="Calf Raise"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Calf Raises
          </button>
          <button
            id="workoutButton5"
            value="Back Squat"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Back Squat
          </button>
          <button
            id="workoutButton5"
            value="Pistol Squat"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Pistol Squat
          </button>
          <button
            id="workoutButton6"
            value="Leg Raises"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Leg Raises
          </button>
          <button
            id="workoutButton6"
            value="Sit-ups"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Sit-ups
          </button>
          <button
            id="workoutButton6"
            value="Russian Twist"
            onClick={(e) => setWorkoutType(e.target.value)}
          >
            Russian Twists
          </button>
        </div>
        <label for="workoutType">Selected Workout </label>
        <input id="inputWorkoutType" value={workoutType} required />
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
        <div id="weightContainer">
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
        </div>
      </form>
      <button
        onClick={async () => {
          await addWorkout();
          document.getElementById("addWorkoutForm").reset();
          window.location.reload();
        }}
      >
        Upload Workout
      </button>
    </div>
  );
}
