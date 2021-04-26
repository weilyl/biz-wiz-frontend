import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import DrawerForProfile from "./DrawerForProfile";
import { apiURL } from "../services/config";
import axios from "axios";
import { useFormFields } from "../lib/customHooks";

const useStyles = makeStyles((theme) => ({
  accountPaper: {
    padding: "20px",
    minHeight: "500px",
    maxHeight: "100vh",
    width: " 100vh",
    height: "80vh",
    margin: "20px auto",
  },
  accountBtn: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
    },
    color: "#f6f8f9",
    background: "#2c63a6",
    // padding: "12px 18px",
    fontSize: "14px",
    lineHeight: "16px",
    height: "auto",
    borderWidth: "0",
    // borderRadius: "20px",
    margin: "10px",
  },
  btns: {
    marginTop: "-10px",
  },
  inputField: {
    fontSize: "1em",
  },
  logo: {
    width: 200,
    marginTop: "-20px",
  },
}));

export default function Account({ setLoggedIn }) {
  const classes = useStyles();
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [businessInfo, setBusinessInfo] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [newBusinessInfo, setNewBusinessInfo] = useFormFields({
    ...businessInfo,
    acct_type: "Business",
    logo: "img",
  });
  const profile = () => {
    try {
      return axios
        .get(`${apiURL}business/home/profile`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log("here is the business info", res.data);
          setBusinessInfo(res.data);
          return res.data;
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(e, e.target);
    console.log(newBusinessInfo);
    try {
      return axios
        .patch(`${apiURL}business/home/update`, newBusinessInfo, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setIsBeingEdited(false);
          setIsSending(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    console.log(isBeingEdited);
  }, [isBeingEdited]);

  useEffect(() => {
    profile();
  }, [isSending]);
  return (
    <div>
      <Container className={classes.container}>
        <Grid container spacing={1}>
          <Grid item>
            <DrawerForProfile setLoggedIn={setLoggedIn} />
          </Grid>
          <Paper elevation={20} className={classes.accountPaper}>
            <Grid
              container
              spacing={1}
              justify="center"
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
            <form action="" onSubmit={handleSave}>
              <Grid container spacing={1} justify="space-around">
                <Grid item className={classes.fields} xs={4}>
                  <Typography
                    className={classes.keys}
                    variant="body1"
                    color="initial"
                  >
                    First Name{" "}
                  </Typography>
                  <Typography variant="subtitle1" color="initial">
                    {isBeingEdited ? (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        onChange={setNewBusinessInfo}
                        defaultValue={businessInfo.first_name}
                        name="first_name"
                      />
                    ) : (
                      <TextField
                        className={classes.inputField}
                        variant="outlined"
                        style={{ backgroundColor: "#6c757d40" }}
                        disabled
                        value={businessInfo.first_name}
                        name="first_name"
                        size="small"
                      />
                    )}
                  </Typography>
                </Grid>
                <Grid item className={classes.fields} xs={4}>
                  <Typography
                    className={classes.keys}
                    variant="body1"
                    color="initial"
                  >
                    Last Name{" "}
                  </Typography>
                  <Typography variant="subtitle1" color="initial">
                    {isBeingEdited ? (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        onChange={setNewBusinessInfo}
                        defaultValue={businessInfo.last_name}
                        name="last_name"
                      />
                    ) : (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        style={{ backgroundColor: "#6c757d40" }}
                        disabled
                        value={businessInfo.last_name}
                        name="last_name"
                      />
                    )}
                  </Typography>
                </Grid>
                <Grid item className={classes.fields} xs={4}>
                  <Typography
                    className={classes.keys}
                    variant="body1"
                    color="initial"
                  >
                    Business Name{" "}
                  </Typography>
                  <Typography variant="subtitle1" color="initial">
                    {isBeingEdited ? (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        onChange={setNewBusinessInfo}
                        defaultValue={businessInfo.business_name}
                        name="business_name"
                      />
                    ) : (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        style={{ backgroundColor: "#6c757d40" }}
                        disabled
                        value={businessInfo.business_name}
                        name="business_name"
                      />
                    )}
                  </Typography>
                </Grid>
                <Grid item className={classes.fields} xs={4}>
                  <Typography
                    className={classes.keys}
                    variant="body1"
                    color="initial"
                  >
                    Username{" "}
                  </Typography>
                  <Typography variant="subtitle1" color="initial">
                    {isBeingEdited ? (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        onChange={setNewBusinessInfo}
                        defaultValue={businessInfo.user_name}
                        name="user_name"
                      />
                    ) : (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        style={{ backgroundColor: "#6c757d40" }}
                        disabled
                        value={businessInfo.user_name}
                        name="user_name"
                      />
                    )}
                  </Typography>
                </Grid>
                <Grid item className={classes.fields} xs={4}>
                  <Typography
                    className={classes.keys}
                    variant="body1"
                    color="initial"
                  >
                    Email{" "}
                  </Typography>
                  <Typography variant="subtitle1" color="initial">
                    {isBeingEdited ? (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        onChange={setNewBusinessInfo}
                        defaultValue={businessInfo.email}
                        name="email"
                      />
                    ) : (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        style={{ backgroundColor: "#6c757d40" }}
                        disabled
                        value={businessInfo.email}
                        name="email"
                      />
                    )}
                  </Typography>
                </Grid>
                <Grid item className={classes.fields} xs={4}>
                  <Typography
                    className={classes.keys}
                    variant="body1"
                    color="initial"
                  >
                    Address{" "}
                  </Typography>
                  <Typography variant="subtitle1" color="initial">
                    {isBeingEdited ? (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        onChange={setNewBusinessInfo}
                        defaultValue={businessInfo.street_address}
                        name="street_address"
                      />
                    ) : (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        style={{ backgroundColor: "#6c757d40" }}
                        disabled
                        value={businessInfo.street_address}
                        name="street_address"
                      />
                    )}
                  </Typography>
                </Grid>
                <Grid item className={classes.fields} xs={4}>
                  <Typography
                    className={classes.keys}
                    variant="body1"
                    color="initial"
                  >
                    City{" "}
                  </Typography>
                  <Typography variant="subtitle1" color="initial">
                    {isBeingEdited ? (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        onChange={setNewBusinessInfo}
                        defaultValue={businessInfo.city}
                        name="city"
                      />
                    ) : (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        style={{ backgroundColor: "#6c757d40" }}
                        disabled
                        value={businessInfo.city}
                        name="city"
                      />
                    )}
                  </Typography>
                </Grid>
                <Grid item className={classes.fields} xs={4}>
                  <Typography
                    className={classes.keys}
                    variant="body1"
                    color="initial"
                  >
                    State{" "}
                  </Typography>
                  <Typography variant="subtitle1" color="initial">
                    {isBeingEdited ? (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        onChange={setNewBusinessInfo}
                        defaultValue={businessInfo.state}
                        name="state"
                      />
                    ) : (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        style={{ backgroundColor: "#6c757d40" }}
                        disabled
                        value={businessInfo.state}
                        name="state"
                      />
                    )}
                  </Typography>
                </Grid>
                <Grid item className={classes.fields} xs={4}>
                  <Typography
                    className={classes.keys}
                    variant="body1"
                    color="initial"
                  >
                    Zip{" "}
                  </Typography>
                  <Typography color="initial">
                    {isBeingEdited ? (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        onChange={setNewBusinessInfo}
                        defaultValue={businessInfo.zip}
                        name="zip"
                      />
                    ) : (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        style={{ backgroundColor: "#6c757d40" }}
                        disabled
                        value={businessInfo.zip}
                        name="zip"
                      />
                    )}
                  </Typography>
                </Grid>
                <Grid item className={classes.fields} xs={4}>
                  <Typography
                    className={classes.keys}
                    variant="body1"
                    color="initial"
                  >
                    Business Type{" "}
                  </Typography>
                  <Typography variant="subtitle1" color="initial">
                    {isBeingEdited ? (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        onChange={setNewBusinessInfo}
                        defaultValue={businessInfo.business_type}
                        name="business_type"
                      />
                    ) : (
                      <TextField
                        className={classes.inputField}
                        size="small"
                        variant="outlined"
                        style={{ backgroundColor: "#6c757d40" }}
                        disabled
                        value={businessInfo.business_type}
                        name="business_type"
                      />
                    )}
                  </Typography>
                </Grid>
              </Grid>
              {isBeingEdited ? (
                <div className={classes.btns}>
                  <Button disabled onClick={() => setIsBeingEdited(true)}>
                    Edit
                  </Button>
                  <Button
                    className={classes.accountBtn}
                    type="submit"
                    onClick={(e) => {
                      setIsSending(true);
                      handleSave(e);
                    }}
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <div className={classes.btns}>
                  <Button
                    className={classes.accountBtn}
                    onClick={() => setIsBeingEdited(true)}
                  >
                    Edit
                  </Button>
                  <Button disabled onClick={() => setIsBeingEdited(false)}>
                    Save
                  </Button>
                </div>
              )}
            </form>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}
