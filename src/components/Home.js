import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBusiness from "./Search.js";

//functions for landing page
function Home() {
  //create an if statement to check if on the landing page or not
    return (
      <div>
        <h2>Biz Wiz</h2>
        <h3>For Small Businesses</h3>
        <div>
          <Router>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">Biz Wiz</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home"><Link to="/SearchBusinesses">Search for Businesses</Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route path="/SearchBusinesses"><SearchBusiness /></Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }

  export default Home;