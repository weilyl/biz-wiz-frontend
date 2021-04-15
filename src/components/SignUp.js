import { Button, Form, Col, InputGroup} from 'react-bootstrap'
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SignUp extends React.Component{
state = {
  firstName: '',
  lastName: '',
  businessName: '',
  bisunessType: '',
  address: '',
  city: '',
  state: '',
  zip: ''
}

// handleClick(event){
//   console.log("sibmitted")
// }

handleSubmit = event => {
  event.preventDefault();

  const user = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    businessName: this.state.businessName,
    bisunessType: this.state.bisunessType,
    address: this.state.address,
    city: this.state.city,
    state: this.state.state,
    zip: this.state.zip
  };

  axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}

// changefirst(event){
//   this.setState({firstName: event.target.value})
// }

render(){
  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <Form>
        <Form.Row>
          <Form.Group as={Col} md="5" controlId="validationCustom01" >
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Foo"
              // name= "firstName"
              // onChange={this.changefirst}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Bar"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Business Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wholesale"
                aria-describedby="inputGroupPrepend"
                required
              />
            <Form.Control.Feedback type="invalid">
              What type of business are you running?
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Business Name</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="FooBarElectronics"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                What is the name of your business?
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Adress</Form.Label>
            <Form.Control type="text" placeholder="Adress" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid street address
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom06">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit" onCLick={this.handleSubmit}>Sign Up</Button>
      </Form>
        </div>
      </div>
    );
  }
}