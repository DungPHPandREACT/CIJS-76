import React from 'react';

const Task = (props) => {
  return (
    <div class="task">
      <input type="radio" />
      <label>{props.task}</label>
    </div>
  );
};

export default Task;
