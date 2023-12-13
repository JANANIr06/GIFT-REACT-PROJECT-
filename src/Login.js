import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password, 'Remember Me:', rememberMe);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot Password clicked');
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <label htmlFor="email" style={{color:'black'}}>Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" style={{color:'black'}}>Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember-forgot-container">
            <div className="remember-me">
             
              <label htmlFor="rememberMe"><a href='#'>Remember Me</a></label>
            </div>

            <div className="forgot-password" onClick={handleForgotPassword}>
              <span>Forgot Password?</span>
            </div>
          </div>

          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
