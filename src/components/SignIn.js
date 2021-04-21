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
    console.log('1')
    event.preventDefault();  
    login(businessLogin);
    console.log("2")
  }

  let isSignedIn = window.localStorage.getItem('token') in [null, ''] ? true : false;  

  if (!isSignedIn) {
    console.log(window.localStorage.getItem('token'))

    return (
      <div>
        <h2>Sign In</h2>
        <div>
          <Form>
            <Form.Group>
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

            <Form.Group>
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
