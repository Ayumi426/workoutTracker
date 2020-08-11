// this is my app
import React from "react";
import "./App.css";
import Axios from "axios";
import Home from "./components/Home";
import HomeForm from "./components/HomeForm";

function App() {
  return (
    <div id="homeContainer">
      <Home />
      <HomeForm />
    </div>
  );
}

// async function workouts() {
//   let req = await Axios.get("/api/workouts");
//   let data = req.data;
//   console.log(data);
// }
// workouts();
// console.log("hello");
// // Axios({
// //   method: "GET",
// //   url: "http://localhost:9000/api",
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// // }).then((res) => {
// //   console.log(res.data);
// // });
// return <div>yay</div>;
// }
export default App;
