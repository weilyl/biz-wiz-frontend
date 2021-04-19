import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home.js";
import SignUp from "./components/SignUp.js";
import SignIn from "./components/SignIn.js";
// import PersonList from "./components/API.js";
// import * from 'react-bootstrap'

// import './App.css';

//landing page
function App() {
  //make a conditional statement to see if user is on the landing page or not
  // let isSignedIn = true;
  // if(isSignedIn){
  //   return(
  //     <div>
  //       <Router>
  //         <Switch> 
  //           <Route path="/Sign In">
  //             <SignIn />
  //           </Route>
  //         </Switch>
  //       </Router>
  //     </div>
  //   )
  // }else{
    return (
      <div>
        <Router>
          <Navbar bg="dark" expand="lg" >
            <Navbar.Brand href="#home">Biz Wiz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav>
                <Nav.Item className="ml-auto" ><Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link></Nav.Item>
                <Nav.Item className="ml-auto"><Nav.Link href="#link"><Link to={{pathname: '/Sign Up', state:true}}>Sign up</Link></Nav.Link></Nav.Item>
                <Nav.Item className="ml-auto"><Nav.Link href="#link"><Link to="/Sign In">Sign In</Link></Nav.Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/Sign Up">
              <SignUp />
            </Route>
            <Route path="/Sign In">
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
// }

export default App;
