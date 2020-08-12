// this is my app
import React from "react";
import "./App.css";
import Home from "./components/Home";
import HomeForm from "./components/HomeForm";
import ExerciseCards from "./components/ExerciseCards";
import MyCalendar from "./components/Calendar";

function App() {
  return (
    <>
      <header>
        <h1 id="Title"> Workout Tracker</h1>
      </header>
      <div id="homeContainer">
        <div>
          <h1 id="card-title">Activities Last 7 Days</h1>
          <ExerciseCards />
        </div>
        <HomeForm />
        {/* <Calendar /> */}
      </div>
      <br></br>
      <h1 id="workoutHistoryTitle">--Workout History--</h1>
      <div id="allWorkouts">
        <Home />
      </div>
    </>
  );
}

export default App;
