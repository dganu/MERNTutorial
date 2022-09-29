import './App.css';
import './Header.js'
import Header from './Header.js';
import Tasks from './iTasks';
import { useState } from "react";

function App() {
  const app_name = "Task Tracker"
  const [tasks , setTasks] = useState([
    {
      text: "Get 500 from 12399",
      day: "From 8:00 to 18:00 15.07.22",
      reminder: false,
      id: 1
    },
    {
      text: "Change current tarif (probably in bug)",
      day: "",
      reminder: false,
      id: 2
    },
    {
      text: "Recount? ",
      day: "",
      reminder: false,
      id: 3
    },
    {
      text: "watch the full course about react 2021",
      day: "",
      reminder: false,
      id: 4
    },
    {
      text: "Still sun from codepen ",
      day: "https://codepen.io/irshadav/pen/GRwKRZ",
      reminder: false,
      id: 5
    }
  ]
)
return (
  <div className="container" >
      <Header title={app_name}/>
      <Tasks tasks={tasks}/>
  </div>
);
}

export default App;
