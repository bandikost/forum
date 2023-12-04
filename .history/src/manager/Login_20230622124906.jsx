import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Declare the useNavigate hook outside of the handleLogin function

  const handleLogin = () => {
    // Implement the login logic similar to the Manager component
    // You can reuse the `hardcodedUsers` array and the `handleLogin` function

    // After successful login, redirect to the GeneralEdit page
    navigate('/general-edit');
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
