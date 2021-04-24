import React, {useState, useEffect} from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import {logout} from "../services/auth";
import {useHistory} from "react-router";

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

export default function NavbarLoggedIn({setLoggedIn}) {
  const classes = useStyles();
  const history = useHistory();
//   const [loggedIn, setLoggedIn] = useState(true);
//   useEffect(()=> {
//     if (!loggedIn) {
//         isLoggedOut = setTokenExists(false)
//     }
//   }, [tokenExists])

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setLoggedIn(false)
    // history.push('/')
  }

  const handleHome =(e) => {

    if (window.localStorage.getItem('token') in [null, '']) {
      setLoggedIn(false)
    } else {
      setLoggedIn(true)
    }
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
            onClick={handleHome}
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
