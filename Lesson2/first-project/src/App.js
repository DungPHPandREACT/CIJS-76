import React from 'react';
import './App.css';
import CardInfo from './CardInfo';
import Task from './Task';

const App = () => {
  const listInfo = [
    {
      name: 'Alice',
      age: 20,
      gender: 'girl',
    },
    {
      name: 'Bob',
      age: 20,
      gender: 'boy',
    },
  ];

  const listTask = [
    'Clean up bedroom',
    'Buy some milk',
    'Jogging',
    'Learn React',
    'Doing Exercises',
  ];

  return (
    // <div className="container">
    //   {listInfo.map((element, index) => {
    //     return (
    //       <CardInfo
    //         key={index}
    //         name={element.name}
    //         age={element.age}
    //         gender={element.gender}
    //       />
    //     );
    //   })}
    // </div>
    <div className="container-task">
      <input type="text" placeholder="Enter your task here.." />
      {listTask.map((value, index) => {
        return <Task task={value} key={index} />;
      })}
    </div>
  );
};

export default App;
