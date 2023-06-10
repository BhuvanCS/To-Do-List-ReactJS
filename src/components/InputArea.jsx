import React from "react";

function InputArea(props) {
  const [task, setTask] = React.useState();
  function updateText(event) {
    setTask(event.target.value);
  }
  return (
    <div className="form">
      <input onChange={updateText} type="text" value={task} />
      <button
        onClick={() => {
          props.onClick(task);
          setTask("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
