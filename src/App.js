import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
// import PersonList from "./components/API.js";
// import * from 'react-bootstrap'

import './App.css';

//landing page
function App() {
  //make a conditional statement to see if user is on the landing page or not
  return (
    <div>
      <Router>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="/">Biz Wiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/SearchBusinesses">Home</Link>
              <Link to="/register">Sign up</Link>
              <Link to="/login">Sign In</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
