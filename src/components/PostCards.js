import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  List,
  ListItem,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { apiURL } from "../services/config";
import axios from "axios";
import clsx from "clsx";

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
  commentBtn: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
    },
    color: "#f6f8f9",
    background: "#2c63a6",
    // padding: "12px 18px",
    fontSize: "14px",
    lineHeight: "16px",
    height: "auto",
    borderWidth: "0",
    borderRadius: "20px",
    top: 5,
  },
  commentField: {
    display: "block",
  },
  commentStyle: {
    display: "block",
  },
  postCard: {
    maxWidth: "100vh",
  },
}));


export default function PostCard({ post, setIsPostChanged, isPostChanged }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [comments, setComments] = useState([]);
  const [postComment, setPostComment] = useState("");
  const [businessInfo, setBusinessinfo] = useState({});
  const [isPostAuthor, setIsPostAuthor] = useState(false);
  const [isCommentAuthor, setIsCommentAuthor] = useState(false);

  function PostTrash(){
    if (isPostAuthor) {
      return (
        <div></div>
      )
    } else {
      return <div></div>
    }
  }
  

  const checkPostAuthor = (postID) => {
    // e.preventDefault();
    console.log("initial post author: ", isPostAuthor);
    try {
      console.log("try")
      return axios
        .get(`${apiURL}business/post/author/${postID}`, 
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
        })
        .then((res) => {
          console.log(res.data)
          setIsPostAuthor(res.data.exists)
          // return res.data
          console.log(isPostAuthor)
        }).then(() => {
          setIsPostAuthor(!isPostAuthor)
          console.log(isPostAuthor)
        })
    } catch (err) {
      console.log(err.message)
    }
  }

  const checkCommentAuthor = (commentID) => {
    // e.preventDefault();
    console.log("initial comment author: ", isCommentAuthor);
    try {
      console.log("try")
      return axios
        .get(`${apiURL}business/comment/author/${commentID}`, 
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
        })
        .then((res) => {
          console.log(res.data)
          setIsCommentAuthor(res.data.exists)
          return res.data
        })
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    if (isPostAuthor === true) {
      profile()
      // setIsPostAuthor (!isPostAuthor)
    }
  }, [isPostAuthor])

  useEffect(() => {
    if (isCommentAuthor === true) {
      // setIsCommentAuthor(!isCommentAuthor)
    }
  }, [isCommentAuthor])

  useEffect(() => {
    handleLoadComments();
    console.log("business id", post.business_id);
    if (isPostChanged) {
      setIsPostChanged(!isPostChanged);
    }
  }, [isPostChanged]);

  const handlePostComment = (e) => {
    e.preventDefault();
    console.log(isPostChanged);
    try {
      console.log("try");
      return axios
        .post(
          `${apiURL}business/posts/post/${post.id}/comment/create`,
          {
            content: postComment,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          console.log(isPostChanged);
          setIsPostChanged(!isPostChanged);
          console.log(isPostChanged);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleCommentDelete = (id) => {
    console.log(id);
    try {
      return axios
        .delete(`${apiURL}business/posts/post/${post.id}/comment/${id}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setIsPostChanged(!isPostChanged);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

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

  const profile = () => {
    try {
      return axios
        .post(
          `${apiURL}business/business-info/${post.business_id}`,
          { business_id: post.business_id },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          checkPostAuthor(post.id);
          console.log("hereee", res.data);
          setBusinessinfo(res.data);
          // setIsPostAuthor(false)
          return res.data;
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    profile();
  }, []);

  return (
    <div>
      <Card className={classes.postCard} elevation={10}>
        <CardHeader
          subheader={"By " + businessInfo.business_name}
          action={ !isPostAuthor ? (
            <IconButton onClick={handleDelete}>
              <DeleteOutlined /> 
            </IconButton> ) : (<div></div>)
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
                  <Typography paragraph>{businessInfo.business_name}: {comment.content}</Typography>
                  <IconButton onClick={() => handleCommentDelete(comment.id)}>
                    <DeleteOutlined />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            <form action="" onSubmit={handlePostComment}>
              <TextField
                id="outlined-multiline-flexible"
                multiline
                rows={2}
                onChange={(e) => setPostComment(e.target.value)}
                defaultValue={postComment}
                variant="outlined"
                className={classes.commentField}
                size="small"
                fullWidth
              />
              <Button
                className={classes.commentBtn}
                type="submit"
                variant="contained"
              >
                Post
              </Button>
            </form>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
