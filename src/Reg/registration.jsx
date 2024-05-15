import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './registration.css';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedUsername = localStorage.getItem('Username');
    
    if (storedUsername !== username) {
      localStorage.setItem('Username', username);
      localStorage.setItem('Password', password);
      setBackgroundColor('lightgreen');
      alert('You have successfully completed registration');
      history.push('/main'); 
    } else {
      alert('This username already exists');
      setBackgroundColor('red');
    }
  };

  return (
    <div id="body" style={{ backgroundColor: backgroundColor }}>
      <form id="regForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
