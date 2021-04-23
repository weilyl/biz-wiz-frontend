import React from "react";
import "./Post.css";
import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import DrawerForProfile from "./DrawerForProfile";

const useStyles = makeStyles((theme) => ({
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
            <form autoComplete="off">
              <TextField
                variant="outlined"
                label="Title"
                fullWidth
                className={classes.titleField}
              />
              <TextField
                id="outlined-multiline-static"
                label="Content"
                multiline
                rows={10}
                variant="outlined"
                fullWidth
                className={classes.contentField}
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
    </div>
  );
}
