import Task from "./iTask"
const Tasks = (props) =>
{
     return (
   /*     <div className="task">
            <h3>Collect Money</h3>
            <p>Thurday</p>
        </div>
        <div className="task">
        <h3>Collect Money</h3>
        <p>Thurday</p>
    </div>
    <div className="task">
    <h3>Collect Money</h3>
    <p>Thurday</p>
</div>
        <Task title="Go to bed" day="9:00 pm everyday"/>
            <Task title="Buy Vegetable" day="Morning Thursday"/>
            <Task title="Check Lipid profile" day="12:00 noon"/>
    */
        <div>
              {
            props.tasks.map((task)=>
            <Task key={task.id} task={task}/>
            )}
        </div>
    );
}
export default Tasks