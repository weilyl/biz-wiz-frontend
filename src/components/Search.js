import React from "react";
import { Button} from 'react-bootstrap'
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
          <Button>Category</Button>
          <Button>Location</Button>
          <ViewButton />
        </div>
      </body>
    );
  }

export default SearchBusiness;