import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    // Make an API call to your backend for password reset
    // Pass the password and confirmPassword values to the API
    // Handle the response and display appropriate message
    setMessage('Password reset successful');
  };

  return (
    <div>
      <nav>
        <h1>My Website</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="App">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div className='section'>
          <label>
            New Password:
          </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
      <div className="section">
          <label>
            Confirm New Password:
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <br />
          {passwordError && <p className="error">{passwordError}</p> && <p className="error">{message}</p>}
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default App;