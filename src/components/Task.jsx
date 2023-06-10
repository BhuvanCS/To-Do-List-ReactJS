import React from "react";

function Task(props) {
  const [done, setDone] = React.useState(false);
  function handleClick() {
    done === true ? setDone(false) : setDone(true);
  }
  return (
    <li
      style={{ textDecoration: done && "line-through" }}
      onClick={handleClick}
      key={props.key}
    >
      {props.task}
    </li>
  );
}

export default Task;
