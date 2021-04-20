import {Dropdown} from 'react-bootstrap'
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {register} from '../services/auth';
import {useState, useEffect} from 'react';


export default function SignUp () {
  
  const [business, setBusinessState] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    businessType: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setBusinessState(e.target.value);
  };
  
  const handleSubmit = event => {
    event.preventDefault();
  
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      businessName: this.state.businessName,
      businessType: this.state.bisunessType,
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
  

  return (
    <form onChange={handleChange}>
        <h3>Register Business</h3>
  
        <div className="form-group">
            <label>First name</label>
            <input type="text" placeholder="Foo" />
        </div>
  
        <div className="form-group">
            <label>Last name</label>
            <input type="text" placeholder="Bar" />
        </div>
        
        <div className="form-group">
            <label>Business Type</label>
            <select className="browser-default custom-select">
              <option>Categories</option>
              <option value="1">Wholesale</option>
              <option value="2">SuperMarket</option>
              <option value="3">Hardware</option>
            </select>
        </div>
  
        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            BusinessType
          </Dropdown.Toggle>
  
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Wholesale</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Supermarket</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Hardware</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
  
        <div className="form-group">
            <label>Business Name</label>
            <input type="text" placeholder="FooBarElectronics" />
        </div>
  
        <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Address" />
        </div>
  
        <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="City" />
        </div>
  
        <div className="form-group">
            <label>State</label>
            <input type="text" placeholder="State" />
        </div>
  
        <div className="form-group">
            <label>Zip Code</label>
            <input type="text" placeholder="00000" />
        </div>
  
        <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" />
        </div>
  
        <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
        </div>
  
        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleSubmit}>Register</button>
    </form>
  );
}