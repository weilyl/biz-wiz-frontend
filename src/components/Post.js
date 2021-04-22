import React from 'react';
import {Form, FormLabel} from 'react-bootstrap'
//import axios from 'axios';
import {useFormFields} from '../lib/customHooks';
import {register} from '../services/auth';
import './Post.css'

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Button,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";

export default function Post(){
  const[posts, setPostState]= useFormFields({
    title:'',
    content:''
  });

  const handleSubmit=event=>{
    event.preventDefault()
    register(posts)
  };
  return (
    <div>
      <React.Fragment>
        <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            placeholder='Title'
            type="text"
            name="title"
            value={posts.title}
            onChange={setPostState}
          />
          <Form.Label htmlFor='content'>Content</Form.Label><br/>
          <TextareaAutosize
          rowsMin={8}
          cols={90}
          placeholder='Text'
          type='text'
          name='content'
          value={posts.content}
          onChange={setPostState}
          />
         <Button 
          variant="contained" 
          type="submit"
          color='inherit'
          >
            Post
          </Button>
        </Form>
       </React.Fragment></div>
    );
  }

// export default class Post extends React.Component {
//  constructor(props){
//   super(props); 
//   this.state = {title:'',content:''};
//  }
//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const posts = res.data;
//         this.setState({ posts });
//       })
//   }
//   handleInput=({e})=>{
//     this.setState({[e.title]:e.content})
//   }
//   CreatePost() {

//     const handleSubmit = (event) => {
//       event.preventDefault()
//     }

//     return (
//       <div>
//       <Form onSubmit={handleSubmit}>
//           <Form.Group htmlFor>
//             <Form.Label htmlFor='title'>Post Title: </Form.Label>
//             <Form.Control name='title' placeholder="Title" type='text' value={this.state.title} onChange={this.handleInput} />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label htmlFor='content'>Text:</Form.Label>
//             <Form.Control name='content' value={this.state.content} id='content' placeholder="Text" type='text' onChange={this.handleInput} />
//           </Form.Group>
//           {/* <Form.Group controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Keep Me Signed In" />
//           </Form.Group> */}
//           <Button 
//           variant="contained" 
//           type="submit"
//           color='inherit'
//           >
//             Post
//           </Button>
//         </Form>
//       </div>
//     );
//   }

//   render() {
//     return (
//     <div>
//       <this.CreatePost />
//       <div > {/*To be replaced with function that adjusts to the amount of posts there are */}
//         <ul>
//           { this.state.posts.map(posts =>
//           <div>
//             <li>{posts.name}</li>
//             <button>View</button>
//             <button>Edit</button>
//             <button>Delete</button>
//           </div>
//           )}
//         </ul>
//       </div>
//     </div>
//     )
//   }
// }

//make SeePost into class to render the different posts?
