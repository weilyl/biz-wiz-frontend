import React from "react";
//import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";
import { register } from "../services/auth";
import { useState, useEffect } from "react";
import { useFormFields } from "../lib/customHooks";
import {
  Grid,
  Paper,
  makeStyles,
  TextField,
  Button,
  Typography,
  Link,
  Collapse,
  Container,
} from "@material-ui/core";

import "./SignUp.css";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    minHeight: "500px",
    height: "70vh",
    width: "100vh",
    margin: "0 auto",
  },
  logo: {
    width: 200,
  },

  signUp: {
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
  container: {},
}));

export default function SignUp({ setLoggedIn, loggedIn }) {
  const history = useHistory();

  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [business, setBusinessState] = useFormFields({
    first_name: "",
    last_name: "",
    business_name: "",
    user_name: "",
    password: "",
    email: "",
    street_address: "",
    city: "",
    state: "",
    zip: "",
    logo: "",
    business_type: "",
    acct_type: "Business",
  });

  const handleRegister = (event) => {
    event.preventDefault();
    register(business);
    history.push("/profile/home");
    setLoggedIn(true);
  };

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div>
      <Container className={classes.container}>
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <Paper elevation={20} className={classes.paper}>
            <Grid
              container
              spacing={1}
              direction="row"
              justify="center"
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
            <form autoComplete="off" onSubmit={handleRegister}>
              <Grid container justify="space-around" spacing={1}>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="First Name"
                    name="first_name"
                    defaultValue={business.first_name}
                    onChange={setBusinessState}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="Last Name"
                    name="last_name"
                    defaultValue={business.last_name}
                    onChange={setBusinessState}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    className={classes.inputUsername}
                    label="Username"
                    name="user_name"
                    defaultValue={business.user_name}
                    onChange={setBusinessState}
                  />
                </Grid>

                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="Password"
                    type="password"
                    name="password"
                    defaultValue={business.password}
                    onChange={setBusinessState}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="Email"
                    name="email"
                    defaultValue={business.email}
                    onChange={setBusinessState}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="Business Name"
                    name="business_name"
                    defaultValue={business.business_name}
                    onChange={setBusinessState}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="Business Type"
                    name="business_type"
                    defaultValue={business.business_type}
                    onChange={setBusinessState}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="Address"
                    name="street_address"
                    defaultValue={business.street_address}
                    onChange={setBusinessState}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="City"
                    name="city"
                    defaultValue={business.city}
                    onChange={setBusinessState}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="State"
                    name="state"
                    defaultValue={business.state}
                    onChange={setBusinessState}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    margin="small"
                    size="small"
                    label="Zip"
                    name="zip"
                    defaultValue={business.zip}
                    onChange={setBusinessState}
                  />
                </Grid>
              </Grid>
              <Button
                className={classes.signUp}
                type="submit"
                variant="contained"
              >
                Sign up
              </Button>
              <Typography variant="subtitle2">
                <Link href="/login">Already have an account? Sign In</Link>
              </Typography>
            </form>
          </Paper>
        </Collapse>
      </Container>
    </div>
  );
}
