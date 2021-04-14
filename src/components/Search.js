import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'List' : 'Map'}
          </button>
          <div>
            <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
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
          <button>Category</button>
          <button>Location</button>
          <ViewButton />
        </div>
      </body>
    );
  }

export default SearchBusiness;