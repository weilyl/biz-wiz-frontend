import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import SearchBusiness from "./Search.js";
import './Business.css'
import Home from './Home.js'
import Post from "./Post.js";
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
import { FormatAlignJustify } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  rootDiv: {
    minHeight: "100px",
  },
  searchbtn: {
    "&:hover": {
      borderColor: "white",
      boxShadow: "0 1px 6px #adcaec",
      color:  "#12417b",
    },
    padding: "12px 18px",
    fontSize: "14px",
    lineHeight: "16px",
    height: "auto",
    borderWidth: "0",
    color:"#12417b",
  },
  postbtn: {
    "&:hover": {
      borderColor: "white",
      boxShadow: "0 1px 6px #adcaec",
      color:  "#12417b",
    },
    padding: "12px 18px",
    fontSize: "14px",
    lineHeight: "16px",
    height: "auto",
    borderWidth: "0",
    color:"#12417b",
  },
}));

function BusinessPage() {
  const classes = useStyles();
  return (
    <div className={classes.rootDiv}>
      <h1>Welcome to Your Page!</h1>
      <Router>
        <Button
          variant="contained"
          color="inherit"
          type="submit"
          href="/"
          className={classes.postbtn}
          component={Link} to='/CreatePost'>
          Create A Post</Button>
        <Button
          type="submit"
          variant="contained"
          color="inherit"
          href="/"
          className={classes.searchbtn}
          onClick={()=><Redirect to={'/'} />}>
            Search for Businesses</Button>
        <Switch>
        <Route path="/CreatePost">
            <Post />
          </Route>
          <Route path="/search">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default BusinessPage;
