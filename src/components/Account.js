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
}));

export default function Account({ setLoggedIn }) {
  const classes = useStyles();
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [businessInfo, setBusinessInfo] = useState({});
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
          console.log(res.data);
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
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    console.log(isBeingEdited);
  }, [isBeingEdited]);

  useEffect(() => {
    console.log(businessInfo);
    profile();
  }, []);
  return (
    <div>
      <Container className={classes.container}>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          <DrawerForProfile setLoggedIn={setLoggedIn} />
        </Grid>
        <Grid container spacing={1}>
          <Paper elevation={10} className={classes.accountPaper}>
            <form action="" onSubmit={handleSave}>
              {isBeingEdited ? (
                <div>
                  <Button disabled onClick={() => setIsBeingEdited(true)}>
                    Edit
                  </Button>
                  <Button
                    type="submit"
                    onClick={(e) => {
                      handleSave(e);
                      setIsBeingEdited(false);
                    }}
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <div>
                  <Button onClick={() => setIsBeingEdited(true)}>Edit</Button>
                  <Button disabled onClick={() => setIsBeingEdited(false)}>
                    Save
                  </Button>
                </div>
              )}
              <Typography variant="h6" color="initial">
                First Name:{" "}
                {isBeingEdited ? (
                  <TextField
                    onChange={setNewBusinessInfo}
                    defaultValue={businessInfo.first_name}
                    name="first_name"
                  />
                ) : (
                  businessInfo.first_name
                )}
              </Typography>
              <Typography variant="h6" color="initial">
                Last Name:{" "}
                {isBeingEdited ? (
                  <TextField
                    onChange={setNewBusinessInfo}
                    defaultValue={businessInfo.last_name}
                    name="last_name"
                  />
                ) : (
                  businessInfo.last_name
                )}
              </Typography>
              <Typography variant="h6" color="initial">
                Business Name:{" "}
                {isBeingEdited ? (
                  <TextField
                    onChange={setNewBusinessInfo}
                    defaultValue={businessInfo.business_name}
                    name="business_name"
                  />
                ) : (
                  businessInfo.business_name
                )}
              </Typography>
              <Typography variant="h6" color="initial">
                Username:{" "}
                {isBeingEdited ? (
                  <TextField
                    onChange={setNewBusinessInfo}
                    defaultValue={businessInfo.user_name}
                    name="user_name"
                  />
                ) : (
                  businessInfo.user_name
                )}
              </Typography>
              <Typography variant="h6" color="initial">
                Email:{" "}
                {isBeingEdited ? (
                  <TextField
                    onChange={setNewBusinessInfo}
                    defaultValue={businessInfo.email}
                    name="email"
                  />
                ) : (
                  businessInfo.email
                )}
              </Typography>
              <Typography variant="h6" color="initial">
                Address:{" "}
                {isBeingEdited ? (
                  <TextField
                    onChange={setNewBusinessInfo}
                    defaultValue={businessInfo.street_address}
                    name="street_address"
                  />
                ) : (
                  businessInfo.street_address
                )}
              </Typography>
              <Typography variant="h6" color="initial">
                City:{" "}
                {isBeingEdited ? (
                  <TextField
                    onChange={setNewBusinessInfo}
                    defaultValue={businessInfo.city}
                    name="city"
                  />
                ) : (
                  businessInfo.city
                )}
              </Typography>
              <Typography variant="h6" color="initial">
                State:{" "}
                {isBeingEdited ? (
                  <TextField
                    onChange={setNewBusinessInfo}
                    defaultValue={businessInfo.state}
                    name="state"
                  />
                ) : (
                  businessInfo.state
                )}
              </Typography>
              <Typography variant="h6" color="initial">
                Zip:{" "}
                {isBeingEdited ? (
                  <TextField
                    onChange={setNewBusinessInfo}
                    defaultValue={businessInfo.zip}
                    name="zip"
                  />
                ) : (
                  businessInfo.zip
                )}
              </Typography>
              <Typography variant="h6" color="initial">
                Business Type:{" "}
                {isBeingEdited ? (
                  <TextField
                    onChange={setNewBusinessInfo}
                    defaultValue={businessInfo.business_type}
                    name="business_type"
                  />
                ) : (
                  businessInfo.business_type
                )}
              </Typography>
            </form>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}
