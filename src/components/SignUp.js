import {Dropdown} from 'react-bootstrap'
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {register} from '../services/auth';
import {useState, useEffect} from 'react';
import {useFormFields} from '../lib/customHooks';


export default function SignUp () {
  
  const [business, setBusinessState] = useFormFields({
    first_name: '',
    last_name: '',
    business_name: '',
    user_name: '',
    password: '',
    email: '',
    street_address: '',
    city: '',
    state: '',
    zip: null,
    logo: ''
  });



  const handleChange = (e) => {
    console.log(e.target.value);
    setBusinessState(e.target.value);
  };
  
  const handleRegister = (event) => {
    event.preventDefault();
  
    register(business);
  }
  

  return (
    <form onChange={handleChange}>
        <h3>Register Business</h3>
  
        <div className="form-group">
            <label>First name</label>
            <input 
              type="text" 
              placeholder="Foo" 
              name="first_name"
              value={business.first_name}
              onChange={setBusinessState}
            />
        </div>
  
        <div className="form-group">
            <label>Last name</label>
            <input 
              type="text" 
              placeholder="Bar" 
              name="last_name"
              onChange={setBusinessState}
            />
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
            <input 
              type="text" 
              placeholder="FooBarElectronics" 
              name="business_name"
              value={business.business_name}
              onChange={setBusinessState}/>
        </div>
  
        <div className="form-group">
            <label>Address</label>
            <input 
              type="text" 
              placeholder="Address" 
              name="street_address"
              value={business.street_address}
              onChange={setBusinessState}/>
        </div>
  
        <div className="form-group">
            <label>City</label>
            <input 
              type="text" 
              placeholder="City" 
              name="city"
              value={business.city}
            />
        </div>
  
        <div className="form-group">
            <label>State</label>
            <input 
              type="text" 
              placeholder="State" 
              name="state"
              value={business.state}
              onChange={setBusinessState}
            />
        </div>
  
        <div className="form-group">
            <label>Zip Code</label>
            <input 
              type="text" 
              placeholder="00000" 
              name="zip"
              value={business.zip}
              onChange={setBusinessState}
            />
        </div>
  
        <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter email" 
              name="email"
              value={business.email}
              onChange={setBusinessState}
            />
        </div>
  
        <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              name="password"
              value={business.password}
              onChange={setBusinessState}
            />
        </div>
  
        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleRegister}>Register</button>
    </form>
  );
}