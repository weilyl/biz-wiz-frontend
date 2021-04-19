import React from "react";
import { Button, Dropdown} from 'react-bootstrap'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PersonList from "./API.js";

class BusinessList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
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
          <BusinessList />
        </div>
      );
    }else{
      return (
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'List' : 'Map'}
          </button>
          <div>
            <h3>To display map</h3>
          </div>
        </div>
      );
    }
  }
}

function SearchBusiness() {
    return (
      <body>
        <form>
          <label>
            Search for Businesses: 
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <h3>Filter By:</h3>
          {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Wholesale</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Supermarket</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Hardware</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          <select className="browser-default custom-select">
            <option>Categories</option>
            <option value="1">Wholesale</option>
            <option value="2">SuperMarket</option>
            <option value="3">Hardware</option>
          </select>
          <Button>Location</Button>
          <ViewButton />
        </div>
      </body>
    );
  }

export default SearchBusiness;