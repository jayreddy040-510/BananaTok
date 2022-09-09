import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css"
import { videos } from "../LoginFormPage/index.js"

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);


  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="welcome">
    <div className="left-container">
      <div className="flexer">
      <div className='login-header'><img className='login-word-img' src='signup_word.png' alt='' /></div>
    <form className="signup-form" onSubmit={handleSubmit}>
      <ul className='errors'>
        {errors.map(error => <li className="error" key={error}>{error}</li>)}
      </ul>

        
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />


        
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


        
        <input
          type="password"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

      <button className="signup-button" type="submit">Sign Up</button>
    </form>
      </div>
    </div>
    <div className="welcome-video-container">
        <video width="100%" height="100%"  loop autoPlay muted>
            <source src={videos[(Math.round(Math.random()*(videos.length-1)))]} type="video/mp4"/>video cannot be played
        </video>
    </div>
    </div>
  );
}

export default SignupFormPage;