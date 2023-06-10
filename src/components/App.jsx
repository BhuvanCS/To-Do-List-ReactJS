import React from "react";
import Task from "./Task";
import InputArea from "./InputArea";

function App() {
  const [tasks, setTasks] = React.useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
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
      <InputArea onClick={addTask} />
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
