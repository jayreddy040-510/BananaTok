
import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import NavBar from "./components/NavBar";
import SplashPage from "./components/SplashPage";

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
    </Switch>
    </>
  );
}

export default App;