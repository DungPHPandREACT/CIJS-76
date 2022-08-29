import React from 'react';
import './App.css';
import CardInfo from './CardInfo';

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

  return (
    <div className="container">
      {listInfo.map((element, index) => {
        return (
          <CardInfo
            key={index}
            name={element.name}
            age={element.age}
            gender={element.gender}
          />
        );
      })}
    </div>
  );
};

export default App;
