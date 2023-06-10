import React from "react";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [task, setTask] = React.useState();
  function updateText(event) {
    setTask(event.target.value);
  }
  function addTask() {
    setTasks([...tasks, task]);
    setTask("");
  }
  function delTask(id) {
    console.log(id);
    setTasks((prev) => {
      return prev.filter((element, index) => {
        return index !== id;
      });
    });
    console.log(tasks);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateText} type="text" value={task} />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => {
            return (
              <Task key={index} index={index} task={task} onClick={delTask} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
