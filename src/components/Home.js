import axios from 'axios';
import { useHistory, useLocation } from 'react-router';
import React, { useEffect, useState } from "react";
import { Button, Container, Fade, Grow, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  rootDiv: {
    margin: "0px auto",
  },
  logo: {
    width: "400px",
    marginLeft: "-39px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  MuiTextField: {
    textDecoration: "none",
  },
  searchBar: {
    "&:hover": {
      borderColor: "rgba(223,225,229,0)",
      boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
    },
    "&:focus": {
      borderColor: "rgba(223,225,229,0)",
      boxShadow: "0 1px 6px rgb(32 33 36 / 28%)",
    },
    backgroundColor: "#00000000",
    display: "flex",
    border: " 1px solid #dfe1e5",
    borderRadius: "24px",
    height: "44px",
    margin: "40px auto 20px",
    width: "482px",
    outline: "none",
    textIndent: "30px",
    textDecoration: "none",
  },

  submitButton: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
      color: "white",
    },
    color: "#f6f8f9",
    background: "#2c63a6",
    padding: "12px 18px",
    fontSize: "14px",
    lineHeight: "16px",
    height: "auto",
    borderWidth: "0",
    borderRadius: "30px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let businesses;
    try {
      return axios
        .get(`https://biz-wiz.herokuapp.com/business/find/name/${searchInput}`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
              }
        })
        .then((res) => {
          console.log('home promise: ', res.data)
          businesses = setResults(res.data);
        })
        .then(()=> {
          console.log("results state set? ", businesses);
        })
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <Container className={classes.rootDiv}>
      <Fade in={checked} {...(checked ? { timeout: 3000 } : {})}>
        <div className={classes.logoContainer}>
          <img
            className={classes.logo}
            src="/assets/BizWiz landing logo.PNG"
            alt=""
          />
        </div>
      </Fade>
      <Grow in={checked} {...(checked ? { timeout: 3000 } : {})}>
        <form action="" /*onSubmit={(e) => history.push(`/search-businesses/?query=${searchInput}`, {results: results})}*/>
          <input className={classes.searchBar} type="text" onChange={(e) => setSearchInput(e.target.value)} />
          <Button
            // type="submit"
            className={classes.submitButton}
            variant="contained"
            size="small"
            onClick={() => history.push("/search-businesses", {from: searchInput})}
          >
            Search
          </Button>
        </form>
      </Grow>
    </Container>

  );
}
