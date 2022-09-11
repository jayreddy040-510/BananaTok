
import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import NavBar from "./components/NavBar";
import SplashPage from "./components/SplashPage";
import PostShow from "./components/PostShow";
import FourOhFour from "./components/404";


function App() {

  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <SplashPage />
      </Route>

      <Route path="/login">
        <LoginFormPage />
      </Route>

      <Route path="/signup">
        <SignupFormPage />
      </Route>

      <Route path="/@:username/posts/:postId">
        <PostShow />
      </Route>

      <Route path="/404">
        <FourOhFour />
      </Route>

    </Switch>
    </>
  );
}

export default App;