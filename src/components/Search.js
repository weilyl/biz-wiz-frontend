import React from "react";
import { Button} from 'react-bootstrap'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'
import {BrowserRouter as Link} from "react-router-dom";
import MapContainer from "./Map"

class BusinessList extends React.Component {
  state = {
    businesses: []
  }
  
  //functions for fetching and filtering business data during search
  nameFilter(name){
    let businesses = ''
    this.setState({businesses})
    axios.get(`http://biz-wiz.herokuapp.com/business/find/?search=:${name}`)
    .then(res => {
      businesses = res.data;
      this.setState({ businesses });
    })
  }

  categoryFilter (type){
    let businesses = ''
    this.setState({businesses})
    axios.get(`http://biz-wiz.herokuapp.com/business/category/${type}`)
    .then(res => {
      businesses = res.data;
      this.setState({ businesses });
    })
  }

  locationCategoryFilter(type, location){
    //clear
    let businesses = ''
    this.setState({businesses})
    axios.get(`http://biz-wiz.herokuapp.com/business/category/${type}/distance/${location}`)
    .then(res => {
      businesses = res.data;
      this.setState({ businesses });
    })
  }

  componentDidMount() {
    axios.get(`http://biz-wiz.herokuapp.com/business/all`)
      .then(res => {
        const businesses = res.data;
        this.setState({ businesses });
      })
  }

  render() {
    return (
      <div>
        <div className='list'>
            { this.state.businesses.map(business =><div className='business'>
              <div id="business-info">{business.business_name}</div>
              <div id="business-info">{business.business_type}</div>
            </div>)}
        </div>
        <div>
              <MapContainer />
        </div>
      </div>
    )
  }
}

class ViewButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    if(this.state){
      return (
        <div>
          <Button variant="primary" onClick={this.handleClick}>
            {this.state.isToggleOn ? 'List' : 'Map'}
          </Button>
        </div>
      );
    }else{
      return (
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'List' : 'Map'}
          </button>
        </div>
      );
    }
  }
}

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({value: event.target.value})
  }
  handleSubmit(event){
    //console.log(this.state.value)
    event.preventDefault()
  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>  
        <label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button className='search' type="submit" value="Submit">Search for Business</button>
      </form>
      </div>
    )
  }
}

function SearchBusiness() {
    return (
      <body>
        <div><SearchForm /></div>
        <div className='page-container'>
        <div className='filter-container'>
        <div>
          <filter>Filter By :</filter>
        </div>
        <div>
          <filterby>Category</filterby><br/>
          {/* call functions when check boxes are clicked => onChange={BusinessList.categoryFilter("Education")} */}
          <input type='checkbox' ></input>Local Markets<br/>
          <input type='checkbox' ></input>Technology<br/>
          <input type='checkbox' ></input>Beauty<br/>
          <input type='checkbox' ></input>Education<br/>
          <input type='checkbox' ></input>Crafting<br/>
        </div>
        <div>

          <filterby>Location</filterby><br/>
          <input type='checkbox' name='New York'></input>New York<br/>
          <input type='checkbox' name='New Jersey'></input>New Jersey<br/>
          <input type='checkbox' name='Conneticut'></input>Conneticut<br/>
          <input type='checkbox'></input>Other<br/>
        </div>
        <div><ViewButton /></div><br/>
        <Link to="/SearchBusinesses" className='filter-button'>Filter</Link>
        </div>
        <div className='list-container'>
          <BusinessList />
        </div>
        </div>
      </body>
    );
  }

export default SearchBusiness;