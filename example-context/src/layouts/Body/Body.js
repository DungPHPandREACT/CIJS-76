import React, { useContext } from 'react';
import { ExampleContext } from '../../App';
import Login from './Login';
import Welcome from './Welcome';

const Body = () => {
  const data = useContext(ExampleContext);

  return (
    <div className="container-body">
      {data.data.isLogin ? <Welcome username={data.data.name} /> : <Login />}
    </div>
  );
};

export default Body;
