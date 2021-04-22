import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
//import { Navbar, Nav } from "react-bootstrap";
//import SearchBusiness from "./Search.js";
import './Business.css'
import Home from './Home.js'
import Post from "./Post.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

import {
  makeStyles,
  Fade,
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
    paddingRight:'19px',
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
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Fade in={checked} {...(checked ? { timeout: 3000 } : {})}>
    <div className={classes.rootDiv}>
      <h1>Welcome to Your Page!</h1>
      <Router><divbtn2><divbtn>
        <Button
          variant="contained"
          color="inherit"
          type="submit"
          href="/"
          className={classes.postbtn}
          component={Link} to='/CreatePost'>
          Create A Post</Button></divbtn>
        <divbtn><Button
          type="submit"
          variant="contained"
          color="inherit"
          href="/"
          className={classes.searchbtn}
          onClick={()=><Redirect to={'/'} />}>
            Search for Businesses</Button></divbtn></divbtn2>
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
    </Fade>
  );
}

export default BusinessPage;
