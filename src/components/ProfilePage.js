import React, { useEffect, useState } from "react";
import { makeStyles, Grid, Container } from "@material-ui/core";
import PostCard from "./PostCards";
import DrawerForProfile from "./DrawerForProfile";
import { apiURL, token } from "../services/config";
import axios from "axios";
import jwt_decode from "jwt-decode";
const loggedInID = jwt_decode(window.localStorage.getItem("token"));

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
}));

export default function ProfilePage() {

  const id = 1; //window.localStorage.getItem("business_id");


  const handleLoad = () => {
    try {
      return axios
        .get(`${apiURL}business/home/posts/${id}/all`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((res) => {

          if (res.data) {
            setPosts(res.data);
            return res.data;
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    handleLoad();
    console.log(posts);
  }, []);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    handleLoad();
  }, [posts]);

  return (
    <div>
      <Container maxWidth="md" className={classes.container}>
        <Grid container justify="flex-end">
          <Grid item>
            <DrawerForProfile />
          </Grid>

          {posts.map((ele) => (
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
