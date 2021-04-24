import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import {logout} from "../services/auth";

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

export default function NavbarLoggedIn() {
  const classes = useStyles();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  }

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
            href="/"
            className={classes.homeBtn}
          >
            Home
          </Button>

          <Button
            variant="text"
            color="inherit"
            href="/profile/home"
            className={classes.profileBtn}
          >
              Profile
          </Button>

          <Button
            variant="text"
            color="inherit"
            href="/"
            className={classes.logoutBtn}
            onClick={handleLogout}
          >
              Logout
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
