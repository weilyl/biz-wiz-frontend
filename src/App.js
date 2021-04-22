import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
// import PersonList from "./components/API.js";
// import * from 'react-bootstrap'
import Post from './components/Post.js'
import "./App.css";
import SearchBusiness from "./components/Search.js";
import BusinessPage from "./components/Business.js";
import NavbarNew from "./components/NavbarNew.js";

//landing page
function App() {
  //make a conditional statement to see if user is on the landing page or not
  return (
    <div>
      <Router>
        <NavbarNew />
        <Switch>
          <Route path="/create-post">
            <Post />
            </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/search">
            <SearchBusiness />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
