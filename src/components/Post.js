import React from 'react';
import {Form} from 'react-bootstrap'
import axios from 'axios';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Button,
} from "@material-ui/core";

export default class Post extends React.Component {
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

  CreatePost() {
    return (
      <div>
      <Form>
          <Form.Group>
            <Form.Label>Post Title: </Form.Label>
            <Form.Control placeholder="Title" />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Text:</Form.Label>
            <Form.Control placeholder="Text" />
          </Form.Group>
          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Keep Me Signed In" />
          </Form.Group> */}
          <Button 
          variant="primary" 
          type="submit"
          color="secondary"
          enabled
          >
            Post
          </Button>
        </Form>
      </div>
    );
  }

  render() {
    return (
    <div>
      <this.CreatePost />
      <div > {/*To be replaced with function that adjusts to the amount of posts there are */}
        <ul>
          { this.state.persons.map(person =>
          <div>
            <li>{person.name}</li>
            <button>View</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
          )}
        </ul>
      </div>
    </div>
    )
  }
}

//make SeePost into class to render the different posts?
