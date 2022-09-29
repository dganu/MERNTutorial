import './App.css';
import Header from './Header.js';
import Tasks from './2Tasks';
import { useState , useEffect} from "react";
import React, { Component }  from 'react';

function App() {
  const app_name = "Task Tracker"
  //state should always be at the top  level
  const [tasks , setTasks] = useState([])
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const url = "http://localhost:5000/api/tasks";
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setTasks(json.data);
    } catch (error) {
      console.log("error", error);
    }
  };

const deleteTask = async (id) =>
{
  console.log("On delete called for", id)
  const url = `http://localhost:5000/api/tasks/${id}`;
  const response = await fetch(url, { method: 'DELETE' });
  const json = await response.json();
  console.log(json);
  fetchData();
  //setTasks(tasks.filter((task)=> task.id !== id))
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
