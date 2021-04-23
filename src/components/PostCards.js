import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
}));

export default function PostCard({ post }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={classes.postCard} elevation={10}>
        <CardHeader
          action={
            <IconButton>
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
            <Typography paragraph>COMMENTS GO HERE</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
