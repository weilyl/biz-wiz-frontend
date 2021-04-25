import React, { useState, useEffect } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { logout } from "../services/auth";
import { useHistory } from "react-router";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  rootDiv: {
    minHeight: "50px",
    display: "flex",
  },
  homeBtn: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
      color: "white",
    },
  },
  logoutBtn: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
      color: "white",
    },
  },
  profileBtn: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
      color: "white",
    },
  },
}));

export default function NavbarLoggedIn({ setLoggedIn }) {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setLoggedIn(false);
    history.push("/");
  };

  const handleHome = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className={classes.rootDiv}>
      <AppBar position="fixed" color="primary" className="nav">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Biz Wiz
          </Typography>

          <Button
            variant="text"
            color="inherit"
            startIcon={<HomeIcon />}
            className={classes.homeBtn}
            onClick={handleHome}
          >
            Home
          </Button>

          <Button
            variant="text"
            color="inherit"
            onClick={() => history.push("/profile/home")}
            className={classes.profileBtn}
          >
            Profile
          </Button>

          <Button
            variant="text"
            color="inherit"
            className={classes.logoutBtn}
            onClick={handleLogout}
          >
            Logout
          </Button>

          <Button
            variant="text"
            color="inherit"
            className={classes.logoutBtn}
            onClick={() => history.push("/search-posts")}
          >
            {<SearchIcon /> }
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
