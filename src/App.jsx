import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const traineeDataURL = "http://localhost:4000/trainees/";
  const [list,setList]=useState([]);

  useEffect(() => {
    console.log("effect run")
    const fecthTraineeData = async () => {
      console.log("running fecthTraineeData");

      try {
        const response = await fetch(traineeDataURL);
        const traineeData = await response.json();
        setList(traineeData);
        console.log("Below is the trainee data:", traineeData);
      } catch (err) {
        alert(err);
      }
    };

    (async ()=> await fecthTraineeData())()
  }, []);

  return (
    <>
      <h1>Check logs on the console for data {list.length===0?"name":list[0].name}</h1>
    </>
  );
}

export default App;

