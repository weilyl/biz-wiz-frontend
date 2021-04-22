import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import SearchBusiness from "./Search.js";
import './Business.css'
//import Post from "./Post.js";
import CreatePost from "./Post.js";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeIcon from "@material-ui/icons/Home";

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  rootDiv: {
    minHeight: "100px",
  },
  searchbtn: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
      color: "white",
    },
  },
  postbtn: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
      color: "white",
    },
  },
}));
function BusinessPage() {
  const classes = useStyles();
  return (
    <div className={classes.rootDiv}>
      <h1>Welcome to Your Page!</h1>
      <Router>
      <Nav.Link href="#home">
        <Button
          ariant="text"
          color="inherit"
          href="/"
          className={classes.postbtn}>
      <Link className='links' to="/CreatePost">Create A Post</Link></Button>
      </Nav.Link>
      <Nav.Link href="/">
        <Button
          ariant="text"
          color="inherit"
          href="/"
          className={classes.searchbtn}>
            <Link to="/search" className='links'>Search for Businesses</Link></Button>
      </Nav.Link>
        {/* <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Biz Wiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/CreatePost">Create Posts</Link>
              </Nav.Link>
              <Nav.Link href="/">
                <Link to="/search">Search for Businesses</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        <Switch>
          <Route path="/CreatePost">
            <CreatePost />
          </Route>
          <Route path="/search">
            <SearchBusiness />
          </Route>
        </Switch>
      </Router>
      {/* <Post /> */}
    </div>
  );
}

export default BusinessPage;
