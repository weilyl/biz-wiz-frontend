import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class ViewButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'List' : 'Map'}
      </button>
    );
  }
}

function SearchBusiness() {
    return (
      <div>
        <form>
          <label>
            Search for Businesses: 
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <h3>Filter By:</h3>
          <button>Category</button>
          <button>Location</button>
          <ViewButton />
        </div>
      </div>
    );
  }

export default SearchBusiness;