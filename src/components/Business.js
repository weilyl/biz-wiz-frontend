import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import SearchBusiness from "./Search.js";
import './Business.css'
//import Post from "./Post.js";
import CreatePost from "./Post.js";
import "bootstrap/dist/css/bootstrap.min.css";

function BusinessPage() {
  return (
    <div>
      <h1>Welcome to Your Page!</h1>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Biz Wiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/CreatePost">Create Posts</Link>
              </Nav.Link>
              <Nav.Link href="/">
                <Link to="/search">Search for Businesses</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/CreatePost">
            <CreatePost />
          </Route>
          <Route path="/search">
            <SearchBusiness />
          </Route>
        </Switch>
      </Router>
      {/* <Post /> */}
    </div>
  );
}

export default BusinessPage;
