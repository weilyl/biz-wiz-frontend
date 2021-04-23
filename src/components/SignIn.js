// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import BusinessPage from "./Business.js";
import { login } from "../services/auth.js";
import { useFormFields } from "../lib/customHooks";
import {
  Grid,
  Paper,
  makeStyles,
  TextField,
  Button,
  InputAdornment,
  Typography,
  Link,
  Collapse,
} from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage.js";
import axios from "axios";
import { apiURL } from "../services/config.js";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    minHeight: "500px",
    maxHeight: "70vh",
    width: 380,
    margin: "20px auto",
  },
  logo: {
    width: 200,
    marginLeft: 60,
  },
  inputField: {
    display: "flex",
    flexDirection: "column",
  },
  signIn: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
    },
    color: "#f6f8f9",
    background: "#2c63a6",
    padding: "12px 18px",
    fontSize: "14px",
    lineHeight: "16px",
    height: "auto",
    borderWidth: "0",
    borderRadius: "20px",
    top: 20,
    marginBottom: 40,
  },
  signUp: {
    alignContent: "center",
    marginLeft: 70,
  },
  signInIcons: {
    paddingBottom: "14px",
  },
}));
function SignIn() {
  const [businessLogin, setBusinessLogin] = useFormFields({
    user_name: "",
    password: "",
  });
  // const [loggedInBusinessId, setLoggedInBusinessID] = useState();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("1");
    try {
      return axios
        .post(`${apiURL}business/login`, businessLogin, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("res: ", res);
          if (res.data.token) {
            // setLoggedInBusinessID(res.data["business_id"]);
            console.log(res.data["business_id"]);
            window.localStorage.setItem("business_id", res.data["business_id"]);
            console.log(window.localStorage.getItem("business_id"));
            console.log("possible token: ", res.data.token);
            window.localStorage.setItem("token", res.data.token);
            window.location.assign("/profile/home");
          }
        });
    } catch (err) {
      console.log(err.message);
    }
    console.log("2");
  };
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  let isSignedIn = window.localStorage.getItem("token") in [null, ""]; //? false : true;
  if (isSignedIn === false) {
    console.log(window.localStorage.getItem("token"));
    return (
      <div>
        <Grid>
          <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Paper elevation={10} className={classes.paper}>
              <div className={classes.inputField}>
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  alignItems="center"
                  alignContent="center"
                  wrap="nowrap"
                >
                  <img
                    className={classes.logo}
                    src="/assets/BizWiz landing logo.PNG"
                    alt=""
                  />
                </Grid>
                <TextField
                  className={classes.inputUsername}
                  margin="normal"
                  label="Username"
                  placeholder="Enter Username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        className={classes.signInIcons}
                        position="start"
                      >
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className={classes.inputPassword}
                  margin="normal"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        className={classes.signInIcons}
                        position="start"
                      >
                        <LockRounded />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  className={classes.signIn}
                  type="submit"
                  variant="contained"
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
                <Typography variant="subtitle2" className={classes.signUp}>
                  Don't have an account? <Link href="/register">Sign Up</Link>
                </Typography>
              </div>
            </Paper>
          </Collapse>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <ProfilePage />
      </div>
    );
  }
}

export default SignIn;
