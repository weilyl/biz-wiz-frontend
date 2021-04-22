// import { Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import BusinessPage from "./Business.js";
import { login } from "../services/auth.js";
// import { useFormFields } from "../lib/customHooks";
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

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    height: "70vh",
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
}));
function SignIn() {
  // const [businessLogin, setBusinessLogin] = useFormFields({
  //   user_name: '',
  //   password: ''
  // })

  // const handleLogin = (event) => {
  //   console.log('1')
  //   event.preventDefault();
  //   login(businessLogin);
  //   console.log("2")
  // }

  // let isSignedIn = window.localStorage.getItem('token') in [null, ''] ? true : false;


  // if (!isSignedIn) {
  //   console.log(window.localStorage.getItem('token'))

 // let isSignedIn = true//window.localStorage.getItem('token') in [null, ''] ? true : false;  


  //   return (
  //     <div>
  //       <h2>Sign In</h2>
  //       <div>
  //         <Form>
  //           <Form.Group>
  //             <Form.Label
  //               htmlFor="user_name">Username</Form.Label>
  //             <Form.Control
  //               type="text"
  //               placeholder="Enter Username"
  //               name="user_name"
  //               value={businessLogin.user_name}
  //               onChange={setBusinessLogin}
  //             />
  //           </Form.Group>

  //           <Form.Group>
  //             <Form.Label
  //               htmlFor="password"
  //             >Password</Form.Label>
  //             <Form.Control
  //               type="password"
  //               placeholder="Password"
  //               name="password"
  //               value={businessLogin.password}
  //               onChange={setBusinessLogin}
  //             />
  //           </Form.Group>

  //           <Button
  //             variant="primary"
  //             type="submit"
  //             onClick={handleLogin}
  //           >
  //             Sign In
  //           </Button>
  //         </Form>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <BusinessPage />
  //     </div>
  //   );
  // }
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
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
                    <InputAdornment position="start">
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
                    <InputAdornment position="start">
                      <LockRounded />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                className={classes.signIn}
                type="submit"
                variant="contained"
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
}

export default SignIn;
