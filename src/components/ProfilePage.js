import React, { useState } from "react";
import { makeStyles, Grid, Container } from "@material-ui/core";
import PostCard from "./PostCards";
import DrawerForProfile from "./DrawerForProfile";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
}));

const data = [
  {
    id: 1,
    title: "Test post",
    content: "This is a test post",
  },
  {
    id: 2,
    title: "Supermarket",
    content: "we have the best avocadoes",
  },
  {
    id: 3,
    title: "Come Shop with us",
    content: "we got the goods",
  },
  {
    id: 4,
    title: "Test post",
    content: "This is a test post",
  },
  {
    id: 5,
    title: "Farmers Marker",
    content: "we have the best avocadoes",
  },
  {
    id: 6,
    title: "Walmart",
    content: "we got the goods",
  },
];

export default function ProfilePage() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="md" className={classes.container}>
        <Grid container justify="flex-end">
          <Grid item>
            <DrawerForProfile />
          </Grid>

          {data.map((ele) => (
            <Grid
              item
              key={ele.id}
              xs={8}
              md={12}
              spacing={3}
              className={classes.cards}
            >
              <PostCard post={ele} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
