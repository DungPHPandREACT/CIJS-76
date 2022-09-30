import React, { useContext, useState } from 'react';
import { ExampleContext } from '../../App';

const Login = () => {
  const data = useContext(ExampleContext);

  const [userName, setUserName] = useState('');

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="container-login">
      <p className="header-login">Đăng nhập</p>
      <div className="body-login">
        <div className="input-username">
          <input
            value={userName}
            onChange={handleChangeUserName}
            type="text"
            placeholder="Enter your username..."
          />
        </div>
        <button>Đăng nhập</button>
      </div>
    </div>
  );
};

export default Login;
