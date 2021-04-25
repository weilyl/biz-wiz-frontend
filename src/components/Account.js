import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import DrawerForProfile from "./DrawerForProfile";
import { apiURL } from "../services/config";
import axios from "axios";

const useStyles = makeStyles((theme) => ({}));

export default function Account({ setLoggedIn }) {
  const classes = useStyles();
  const [businessInfo, setBusinessInfo] = useState([]);
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
          <Paper>
            <Typography variant="subtitle2" color="initial"></Typography>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}
