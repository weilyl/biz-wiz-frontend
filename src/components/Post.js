import React, { useState } from "react";
import "./Post.css";
import {
  Button,
  Container,
  Paper,
  makeStyles,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import DrawerForProfile from "./DrawerForProfile";
import axios from "axios";
import { apiURL } from "../services/config";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
    minHeight: "500px",
    maxHeight: "100vh",
    width: " 100vh",
    height: "80vh",
    margin: "20px auto",
  },
  postBtn: {
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
    top: 40,
    marginBottom: 40,
  },
  titleField: {
    margin: "20 auto",
    display: "block",
  },
  contentField: {
    top: 20,
  },
}));

export default function Post() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const handleCreatePost = (e) => {
    e.preventDefault();
    setTitleError(false);
    setContentError(false);
    if (title === "") {
      setTitleError(true);
    }

    if (content === "") {
      setContentError(true);
    }

    if (content && title) {
      try {
        return axios
          .post(
            `${apiURL}business/create-post`,
            { title: title, content: content },
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${window.localStorage.getItem("token")}`,
              },
            }
          )
          .then(() => history.push("/profile/home"));
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <div>
      <Paper elevation={10} className={classes.paper}>
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
          <DrawerForProfile />
          <Grid item xs={8} md={10}>
            <Typography
              variant="h6"
              color="initial"
              component="h2"
              gutterBottom
            >
              Create A Post
            </Typography>
            <form autoComplete="off" noValidate onSubmit={handleCreatePost}>
              <TextField
                variant="outlined"
                label="Title"
                fullWidth
                className={classes.titleField}
                require
                onChange={(e) => setTitle(e.target.value)}
                error={titleError}
              />
              <TextField
                id="outlined-multiline-static"
                label="Content"
                multiline
                rows={10}
                variant="outlined"
                fullWidth
                className={classes.contentField}
                required
                onChange={(e) => setContent(e.target.value)}
                error={contentError}
              />
              <Button
                className={classes.postBtn}
                type="submit"
                variant="contained"
              >
                Create Post
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
      </Paper>
    </div>
  );
}
