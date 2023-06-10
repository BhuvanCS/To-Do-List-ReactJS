import React from "react";

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
            return <li key={index}> {task} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
