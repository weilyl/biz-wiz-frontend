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


const useStyles = makeStyles((theme) => ({
  accountPaper: {
    padding: "20px",
    minHeight: "500px",
    maxHeight: "100vh",
    width: " 100vh",
    margin: "20px auto",
  },
}));


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

          <Paper className={classes.accountPaper}>
            <Typography variant="h6" color="initial">
              First Name: {businessInfo.first_name}
            </Typography>
            <Typography variant="h6" color="initial">
              Last Name: {businessInfo.last_name}
            </Typography>
            <Typography variant="h6" color="initial">
              Business Name: {businessInfo.business_name}
            </Typography>
            <Typography variant="h6" color="initial">
              Username: {businessInfo.user_name}
            </Typography>
            <Typography variant="h6" color="initial">
              Email: {businessInfo.email}
            </Typography>
            <Typography variant="h6" color="initial">
              Address: {businessInfo.street_address}
            </Typography>
            <Typography variant="h6" color="initial">
              City: {businessInfo.city}
            </Typography>
            <Typography variant="h6" color="initial">
              State: {businessInfo.state}
            </Typography>
            <Typography variant="h6" color="initial">
              Zip: {businessInfo.zip}
            </Typography>
            <Typography variant="h6" color="initial">
              Business Type: {businessInfo.business_type}
            </Typography>

          </Paper>
        </Grid>
      </Container>
    </div>
  );
}




