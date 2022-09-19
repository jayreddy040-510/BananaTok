
import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import NavBar from "./components/NavBar";
import SplashPage from "./components/SplashPage";
import PostShow from "./components/PostShow";
import FourOhFour from "./components/404";
import CreatePostForm from "./components/CreatePostForm";
import PostIndex from "./components/PostIndex";



function App() {

  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <SplashPage topic={'all'}/>
      </Route>
      <Route path="/upload">
        <CreatePostForm />
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

      <Route path="/posts/topic=Gaming">
        <SplashPage topic={'Gaming'}/>
      </Route>

      <Route path="/posts/topic=Comedy">
        <SplashPage topic={'Comedy'}/>
      </Route>

      <Route path="/posts/topic=Food">
        <SplashPage topic={'Food'}/>
      </Route>

      <Route path="/posts/topic=Dance">
        <SplashPage topic={'Dance'}/>
      </Route>

      <Route path="/posts/topic=Beauty">
        <SplashPage topic={'Beauty'}/>
      </Route>

      <Route path="/posts/topic=Animals">
        <SplashPage topic={'Animals'}/>
      </Route>

      <Route path="/posts/topic=Sports">
        <SplashPage topic={'Sports'}/>
      </Route>

      <Route path="/404">
        <FourOhFour />
      </Route>

    </Switch>
    </>
  );
}

export default App;