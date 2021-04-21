import React from 'react';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {register} from '../services/auth';
// import {useState, useEffect} from 'react';
import {useFormFields} from '../lib/customHooks';
import "./SignUp.css"

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
    logo: '',
    business_type: 'Wholesale',
    acct_type: ''
  });


  
  const handleRegister = (event) => {
    event.preventDefault();  
    register(business);
  }
  

  return (
    <form>
        <h3>Register Business</h3>
        <div className="form-group">
    <div 
      className="custom-control custom-radio custom-control-inline">
      <input 
        type="radio" 
        id="acct-type-business" 
        name="acct_type" 
        className="custom-control-input"
        value="Business"
        onClick={setBusinessState}/>
      <label 
        className="custom-control-label" 
        for="acct-type-business"
      >Business</label>
    </div>
    <div 
      className="custom-control custom-radio custom-control-inline">
      <input 
        type="radio" 
        id="acct-type-customer" 
        name="acct_type" 
        className="custom-control-input"
        value="Customer"
        onClick={setBusinessState}/>
      <label 
        className="custom-control-label" 
        for="acct-type-customer"
      >Customer</label>
    </div>  
  </div>

        <div className="form-group">
            <label className='labels' for="first_name">First name</label>
            <input 
              type="text" 
              placeholder="Foo" 
              name="first_name"
              value={business.first_name}
              onChange={setBusinessState}
            />
        </div>
  
        <div className="form-group">
            <label className='labels' for="last_name">Last name</label>
            <input 
              type="text" 
              placeholder="Bar" 
              name="last_name"
              onChange={setBusinessState}
            />
        </div>
        
        <div className="form-group">
            <label className='labels' for="business_type">Business Type</label>
            <select className='dropdown'
              className="browser-default custom-select"
              name="business_type">
              <option>Categories</option>
              <option value="1">Technology</option>
              <option value="2">Crafts</option>
              <option value="3">Beauty</option>
              <option value="3">Educational</option>
              <option value="3">Local Market</option>
              <option value="3">Decor</option>
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
            <label className='labels' for="business_name">Business Name</label>
            <input 
              type="text" 
              placeholder="FooBarElectronics" 
              name="business_name"
              value={business.business_name}
              onChange={setBusinessState}/>
        </div>

        <div className="form-group">
            <label className='labels' for="user_name">User Name</label>
            <input 
              type="text" 
              placeholder="User Name" 
              name="user_name"
              value={business.user_name}
              onChange={setBusinessState}
            />
        </div>
  
        <div className="form-group">
            <label className='labels' for="street_address">Address</label>
            <input 
              type="text" 
              placeholder="Address" 
              name="street_address"
              value={business.street_address}
              onChange={setBusinessState}/>
        </div>
  
        <div className="form-group">
            <label className='labels' for="city">City</label>
            <input 
              type="text" 
              placeholder="City" 
              name="city"
              value={business.city}
              onChange={setBusinessState}
            />
        </div>
  
        <div className="form-group">
            <label className='labels' for="state">State</label>
            <input 
              type="text" 
              placeholder="State" 
              name="state"
              value={business.state}
              onChange={setBusinessState}
            />
        </div>
  
        <div className="form-group">
            <label className='labels' for="zip">Zip Code</label>
            <input 
              type="text" 
              placeholder="00000" 
              name="zip"
              value={business.zip}
              onChange={setBusinessState}
            />
        </div>
  
        <div className="form-group">
            <label className='labels' for="email">Email</label>
            <input 
              type="email" 
              placeholder="Enter email" 
              name="email"
              value={business.email}
              onChange={setBusinessState}
            />
        </div>
  
        <div className="form-group">
            <label className='labels' for="password">Password</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              name="password"
              value={business.password}
              onChange={setBusinessState}
            />
        </div>
  
        <button 
          type="submit" 
          className="btn btn-dark btn-lg btn-block" 
          onClick={handleRegister}
        >Register</button>

  
      {/* <Form.Group inline>
          <label>Account Type</label>
          <Form.Radio 
            label="Business" 
            // checked={account === 'Business'} 
            name="acct_type"
            value="Business" 
            onClick={setBusinessState} />
          <Form.Radio 
            label="Customer" 
            // checked={account === 'Customer'} 
            name="acct_type" 
            value="Customer"
            onClick={setBusinessState} />
      </Form.Group>
         */}
    </form>
  );
}