import React, { useEffect, useState } from "react";
import { makeStyles, Grid, Container } from "@material-ui/core";
import PostCard from "./PostCards";
import DrawerForProfile from "./DrawerForProfile";
import { apiURL } from "../services/config";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
}));

export default function ProfilePage({ setLoggedIn }) {
  const handleLoad = () => {
    try {
      return axios
        .get(`${apiURL}business/home/posts/all`, {
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
  const [isPostChanged, setIsPostChanged] = useState(false);

  useEffect(() => {
    handleLoad();
    // console.log(posts);
    // console.log("initial", isPostChanged)

    if (isPostChanged) {
      setIsPostChanged(!isPostChanged);
      // console.log("changed", isPostChanged)
    }
  }, [isPostChanged]);

  useEffect(() => {
    handleLoad();
  }, [posts]);

  return (
    <div>
      <Container maxWidth="md" className={classes.container}>
        <Grid container justify="flex-end">
          <Grid item>
            <DrawerForProfile setLoggedIn={setLoggedIn} />
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
              <PostCard
                post={ele}
                setIsPostChanged={setIsPostChanged}
                isPostChanged={isPostChanged}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
