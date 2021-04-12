import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Button, Navbar, Nav, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBusiness from "./Search.js";
import CreatePost from "./Business.js"

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
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Enter Username" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Keep Me Signed In" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
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

  export default SignIn;