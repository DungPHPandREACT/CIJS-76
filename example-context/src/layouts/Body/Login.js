import React from 'react';

const Login = () => {
  return (
    <div className="container-login">
      <p className="header-login">Đăng nhập</p>
      <div className="body-login">
        <div className="input-username">
          <input type="text" placeholder="Enter your username..." />
        </div>
        <button>Đăng nhập</button>
      </div>
    </div>
  );
};

export default Login;
