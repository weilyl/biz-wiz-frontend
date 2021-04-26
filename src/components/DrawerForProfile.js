import React, { useEffect, useState } from "react";
import {
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import {
  AccountCircleOutlined,
  AddCircleOutlineOutlined,
} from "@material-ui/icons";
import { useHistory } from "react-router";
import NavbarLoggedIn from "./NavbarLoggedIn";
import { apiURL } from "../services/config";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  business_name: {
    margin: "10 auto",
  },
  listContainer: {
    display: "inline",
  },
}));

export default function DrawerForProfile({ setLoggedIn }) {
  const classes = useStyles();
  const history = useHistory();
  const [businessInfo, setBusinessinfo] = useState([]);
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

  const profile = () => {
    try {
      return axios
        .get(`${apiURL}business/home/profile`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setBusinessinfo(res.data);
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
    <Container className={classes.container}>
      <Drawer className={classes.drawer} variant="permanent" anchor="left">
        <NavbarLoggedIn setLoggedIn={setLoggedIn} />
        <div className={classes.businessName}></div>
        <List>
          <ListItem>
            <Typography
              className={classes.businessName}
              variant="h5"
              color="initial"
            >
              {businessInfo.business_name}
            </Typography>
          </ListItem>
          {itemList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                <div className={classes.listContainer}>
                  {icon}
                  <ListItemText primary={text} />
                </div>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Container>
  );
}
