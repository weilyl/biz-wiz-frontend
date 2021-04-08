import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import './App.css';

//landing page
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Sign Up">Sign up</Link>
          </li>
          <li>
            <Link to="/Sign In">Sign In</Link>
          </li>
        </ul>
      </nav>
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
          <Link to="/SearchBusinesses">Search for Businesses</Link>
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
      <h2>Sign In</h2>
      <div>
        TODO: Sign in form
      </div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/CreatePost">Create Post</Link>
            </li>
            <li>
              <Link to="/SearchBusiness">Search Business</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/CreatePost">
            <CreatePost />
          </Route>
          <Route path="/SearchBusiness">
            <SearchBusiness />
          </Route>
        </Switch>
      </Router>
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
