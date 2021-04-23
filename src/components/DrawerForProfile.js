import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import NavbarNew from "./NavbarNew";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import {
  AccountCircleOutlined,
  AddCircleOutlineOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({}));

export default function DrawerForProfile() {
  const classes = useStyles();
  const history = useHistory();
  const itemList = [
    {
      text: "My Posts",
      icon: <ListAltOutlinedIcon />,
      onClick: () => history.push("/profile/home"),
    },
    {
      text: "Create A Post",
      icon: <AddCircleOutlineOutlined />,
      onClick: () => history.push("/create-post"),
    },
    {
      text: "Account",
      icon: <AccountCircleOutlined />,
      onClick: () => history.push("/account"),
    },
  ];
  return (
    <div className={classes.container}>
      <Drawer className={classes.drawer} variant="permanent" anchor="left">
        <NavbarNew />
        <div>
          <Typography variant="h5" color="initial">
            My Business
          </Typography>
        </div>
        <List>
          {itemList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
