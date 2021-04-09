import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

//landing page
function App() {
  return (
    <div>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Biz Wiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Sign Up">Sign up</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Sign In">Sign In</Link></Nav.Link>
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

//functions for landing page
function Home() {
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

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        TODO: Sign Up form
      </div>
    </div>
  );
}

//after sign in, leads to homepage
function SignIn() {
  return(
    <div>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Biz Wiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/CreatePost">Create Post</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/SearchBusinesses">Search for Businesses</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/CreatePost">
            <CreatePost />
          </Route>
          <Route path="/SearchBusiness">
            <SearchBusiness />
          </Route>
        </Switch>
      </Router>
      <h2>Sign In</h2>
      <div>
        TODO: Sign in form
      </div>
      <div>
        <h1>Business Name</h1>
        <div> {/*To be replaced with function that adjusts to the amount of posts there are */}
          <h2>Post Title</h2>
          <button>View</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

//functions for business Homepage navbar
function CreatePost() {
  return (
    <div>
      <div>
        <h2>Post Title:</h2>
        <h2>Text:</h2>
      </div>
    </div>
  );
}

function SearchBusiness() {
  return (
    <div>
      <p>________________</p>
      <button>Search</button>
      <div>
        <h3>Filter By:</h3>
        <button>Category</button>
        <button>Location</button>
      </div>
    </div>
  );
}

export default App;
