import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './LoginForm.css';

export const videos = ["1.mp4", "2.mp4", "3.mp4", "4.mp4", "5.mp4", "6.mp4"];


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const demoLogin = () => {
    if (!sessionUser) {
        dispatch(sessionActions.login({username: 'dieguccio', password: 'dieguccio'}))
    }
}


  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ username, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  return (
    <div className='welcome'>
   
    <div className='login-container'>
    <div className='login-header'><img className='login-word-img' src='login_word.png' alt='' /></div>
    <form className='username-password' onSubmit={handleSubmit}>
      <ul className='errors'>
        {errors.map(error => <li className='error' key={error}>{error}</li>)}
      </ul>

        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />


        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

      <button className='login-button'>Log In</button>
      {/* <br />
      <br />
      <br />
      <br />
      <span>Don't have an account? Sign up!</span> */}
    </form>
    <button className='login-button' onClick={demoLogin}>Demo</button>

    <br />
    <br />
    <br />
  <p id="login-p-tag">Don't have an account? <span className='signup-span' onClick={() => {history.push("/signup")}}>Sign up here!</span></p> 
    </div>
    <div className="welcome-video-container">
        <video width="100%" height="100%"  loop autoPlay muted>
            <source src={videos[(Math.round(Math.random()*(videos.length-1)))]} type="video/mp4"/>video cannot be played
        </video>
    </div>
    </div>
  );
}

export default LoginFormPage;