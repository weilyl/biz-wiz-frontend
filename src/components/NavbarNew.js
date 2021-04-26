import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router";

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
  loginBtn: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
      color: "white",
    },
  },
  registerBtn: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
      color: "white",
    },
  },
}));

export default function NavbarNew() {
  const history = useHistory();

  const handleHome = (e) => {
    history.push("/");
  };

  const classes = useStyles();
  return (
    <div className={classes.rootDiv}>
      <AppBar position="fixed" color="primary" className="nav">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Biz Wiz
          </Typography>

          <Button
            ariant="text"
            color="inherit"
            startIcon={<HomeIcon />}
            className={classes.homeBtn}
            onClick={handleHome}
          >
            Home
          </Button>

          <Button
            href="/login"
            variant="text"
            color="inherit"
            className={classes.loginBtn}
          >
            Login
          </Button>

          <Button
            href="/register"
            variant="text"
            color="inherit"
            className={classes.registerBtn}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
