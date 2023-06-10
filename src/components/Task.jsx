import React from "react";

function Task(props) {
  return (
    <li
      onClick={() => {
        props.onClick(props.index);
      }}
      key={props.index}
    >
      {props.task}
    </li>
  );
}

export default Task;
