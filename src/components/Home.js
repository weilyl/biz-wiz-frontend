import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBusiness from "./Search.js";
import "./Home.css"
//functions for landing page
function Home() {
  //create an if statement to check if on the landing page or not
    return (
      <div>
        <h2>Biz Wiz</h2>
        <h3>For Small Business Believers</h3>
        <div>
          <Router>
            <Switch>
              <Route path="/SearchBusinesses"><SearchBusiness /></Route>
            </Switch>
          </Router>
        </div>
      </div>
    );
  }

  export default Home;