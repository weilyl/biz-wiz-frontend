import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BusinessPage from "./Business.js";
import {login } from '../services/auth.js';
import {useFormFields} from '../lib/customHooks';

function SignIn() {

  const [businessLogin, setBusinessLogin] = useFormFields({
    user_name: '',
    password: ''
  })

  const handleLogin = (event) => {
    event.preventDefault();  
    login(businessLogin);
  }

  let isSignedIn = window.localStorage.getItem('token') !== "" ? true : false;

  console.log(isSignedIn)
  

  if (!isSignedIn) {
    return (
      <div>
        <h2>Sign In</h2>
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label 
                htmlFor="user_name">Username</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Enter Username" 
                name="user_name"
                value={businessLogin.user_name}
                onChange={setBusinessLogin}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label
                htmlFor="password"
              >Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                name="password"
                value={businessLogin.password}
                onChange={setBusinessLogin}
              />
            </Form.Group>
           
            <Button 
              variant="primary" 
              type="submit" 
              onClick={handleLogin}
            >
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
