import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BusinessPage from "./Business.js";
// import axios from 'axios';

function handleClick(event) {
  console.log("Signing in");
}

function SignIn() {
  let isSignedIn = true;
  if (!isSignedIn) {
    return (
      <div>
        <h2>Sign In</h2>
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Enter Username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Keep Me Signed In" />
          </Form.Group> */}
            <Button variant="primary" type="submit" onClick={handleClick}>
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <BusinessPage />
      </div>
    );
  }
}

export default SignIn;
