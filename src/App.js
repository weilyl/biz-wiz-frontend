import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
// import PersonList from "./components/API.js";
// import * from 'react-bootstrap'
import Post from "./components/Post.js";
import "./App.css";
import SearchBusiness from "./components/Search.js";
import NavbarNew from "./components/NavbarNew.js";
import ProfilePage from "./components/ProfilePage.js";
import NavbarLoggedIn from "./components/NavbarLoggedIn";
import SearchContent from "./components/SearchContent";
import Account from "./components/Account.js";
import { logout } from "./services/auth";

let isLoggedIn = ![undefined, null, ''].includes(window.localStorage.getItem('token'));

//landing page
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    logout()
  }, [])

  useEffect(()=> {
    console.log(`am I logged in? ${loggedIn}`);
}, [loggedIn])

  function Nav({setLoggedIn}) {
    return loggedIn ? (
      <NavbarLoggedIn setLoggedIn={setLoggedIn} />
    ) : (
      <NavbarNew />
    );
  }

  function SearchPosts() {
    if (loggedIn) {
      return <SearchContent />;
    } else {
      return <Redirect to="/" />;
    }
  }

  //make a conditional statement to see if user is on the landing page or not
  return (
    <div>
      <Router>
        <Nav setLoggedIn={setLoggedIn} />
        <Switch>
          <Route path="/create-post">
            <Post />
          </Route>
          <Route exact path="/account">
            <Account setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/profile/home">
            <ProfilePage setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/register">
            <SignUp setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/login">
            <SignIn setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/search-posts">
            <SearchPosts />
          </Route>
          <Route exact path="/search">
            <SearchBusiness />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
