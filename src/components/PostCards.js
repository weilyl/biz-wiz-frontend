import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { apiURL, token } from "../services/config";
import axios from "axios";
import clsx from "clsx";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.standard,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  // postCard: {
  //   maxWidth: "300px",
  // },
}));

export default function PostCard({ post, setIsPostChanged, isPostChanged }) {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    handleLoadComments();
  }, []);

  const handleDelete = (e) => {
    console.log("post id", post.id);
    console.log("event id", e.target.value);

    try {
      console.log(post.id);
      return axios
        .delete(`${apiURL}business/posts/post/${post.id}/remove`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then(() => {
          console.log(typeof setIsPostChanged);
          console.log("first: ", isPostChanged);
          setIsPostChanged(!isPostChanged);
          console.log("second: ", isPostChanged);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLoadComments = () => {
    try {
      return axios
        .get(`${apiURL}business/posts/post/${post.id}/comments/all`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data) {
            setComments(res.data);
            return res.data;
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.postCard} elevation={10}>
        <CardHeader
          action={
            <IconButton onClick={handleDelete}>
              <DeleteOutlined />
            </IconButton>
          }
          title={post.title}
        />
        <CardContent>
          <Typography variant="body2">{post.content}</Typography>
        </CardContent>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <List>
              {comments.map((comment) => (
                <ListItem key={comment.id}>
                  <Typography paragraph>{comment.content}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
