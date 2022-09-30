import React, { useContext, useState } from 'react';
import { ExampleContext } from '../../App';

const Login = () => {
  const [name, setName] = useState('');

  const data = useContext(ExampleContext);

  const handleChangeUserName = (event) => {
    setName(event.target.value);
  };

  const handleLogin = () => {
    const dataTemp = { ...data.data };
    console.log(dataTemp);

    dataTemp.name = name;
    dataTemp.isLogin = true;

    data.setData({ ...dataTemp });
  };

  return (
    <div className="container-login">
      <p className="header-login">Đăng nhập</p>
      <div className="body-login">
        <div className="input-username">
          <input
            value={name}
            onChange={handleChangeUserName}
            type="text"
            placeholder="Enter your username..."
          />
        </div>
        <button onClick={handleLogin}>Đăng nhập</button>
      </div>
    </div>
  );
};

export default Login;
