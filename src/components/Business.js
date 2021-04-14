import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
import SearchBusiness from "./Search.js";
import CreatePost from "./Post.js";
import SeePost from "./Post.js"
import 'bootstrap/dist/css/bootstrap.min.css';

function BusinessPage(){
    return (
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
        <div>
          <h1>Business Name</h1>
          <div>
            <h2>Post Title</h2>
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    );
  }

  export default BusinessPage;