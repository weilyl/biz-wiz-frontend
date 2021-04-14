import { Button, Form} from 'react-bootstrap'

function CreatePost() {
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
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
}

//make SeePost into class to render the different posts?
function SeePost(){
    return (
        <div>
        <h1>Business Name</h1>
        <div> {/*To be replaced with function that adjusts to the amount of posts there are */}
          <h2>Post Title</h2>
          <button>View</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      );
}

export {CreatePost as default, SeePost};
