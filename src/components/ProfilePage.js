import React, { useEffect, useState } from "react";
import { makeStyles, Grid, Container, Grow } from "@material-ui/core";
import PostCard from "./PostCards";
import DrawerForProfile from "./DrawerForProfile";
import { apiURL } from "../services/config";
import axios from "axios";
import { Redirect } from "react-router";

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
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    handleLoad();
    setChecked(true);
    console.log(posts);
    // console.log("initial", isPostChanged)
    if (isPostChanged) {
      setIsPostChanged(!isPostChanged);
      // console.log("changed", isPostChanged)
    }
  }, [isPostChanged]);

  useEffect(() => {
    handleLoad();
  }, []);

  let isSignedOut = [null, "", undefined].includes(
    window.localStorage.getItem("token")
  );

  if (isSignedOut) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Container maxWidth="md" className={classes.container}>
        <Grid container justify="flex-end">
          <Grid item>
            <DrawerForProfile setLoggedIn={setLoggedIn} />
          </Grid>

          {posts.map((ele) => (
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 2000 } : {})}
            >
              <Grid item key={ele.id} xs={8} md={10} className={classes.cards}>
                <PostCard
                  post={ele}
                  setIsPostChanged={setIsPostChanged}
                  isPostChanged={isPostChanged}
                />
              </Grid>
            </Grow>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
