import './App.css';
import Header from './Header.js';
import Tasks from './2Tasks';
import { useState } from "react";
import React, { Component }  from 'react';

function App() {
  const app_name = "Task Tracker"
  //state should always be at the top  level
  const [tasks , setTasks] = useState([
    {
      text: "Get 500 from 12399",
      day: "From 8:00 to 18:00 15.07.22",
      reminder: false,
      id: 1
    },
    {
      text: "Change current tarif (probably in bug)",
      day: "From 8:00 to 14:00 18.07.22",
      reminder: false,
      id: 2
    },
    {
      text: "Jogging",
      day: "From 8:00 to 8:30 5.08.22",
      reminder: false,
      id: 3
    },
    {
      text: "watch the full course about react 2021",
      day: "From 8:00 to 18:00 15.12.22",
      reminder: false,
      id: 4
    },
    {
      text: "Still sun from codepen ",
      day: "From 3:00 to 18:00 15.12.22",
      reminder: false,
      id: 5
    }
  ]
)
const deleteTask = (id) =>
{
  console.log("On delete called for", id)
  setTasks(tasks.filter((task)=> task.id !== id))
}
//toggle the tasks 
const ToggleReminder = (id) =>
{
  console.log("On toggle call for",id)
  setTasks(tasks.map((task)=>
  task.id === id ? {...task, reminder : ! task.reminder}:task
  )
  )
  
}
return (
  <div className="container" >
      <Header title={app_name}/>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ToggleReminder}/>
     
  </div>
);
}

export default App;
