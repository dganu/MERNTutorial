import Task from "./2Task";
import React, { Component }  from 'react'  
const Tasks = (props) =>
{
   

    return (
      
        <div>
            {
            props.tasks.map((task)=>
            <Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle}/>
            )}
        </div>
    );
}
export default Tasks