import React, { useEffect, useState } from "react";
import {
    Button, 
    Container,
    Fade, 
    Grid,
    Grow, 
    makeStyles 
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { apiURL } from '../services/config';
import { useHistory } from 'react-router';
import PostCard from "./PostCards";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
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

export default function SearchContent() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isPostChanged, setIsPostChanged] = useState(false);
  useEffect(() => {
    console.log(searchResults)
  }, [searchResults])
  useEffect(() => {
    if (searched) {
      setSearched(!searched)
    }
  }, [searched])

  useEffect(() => {
    console.log(posts);
    // console.log("initial", isPostChanged)
    if (isPostChanged) {
      setIsPostChanged(!isPostChanged);
      // console.log("changed", isPostChanged)
    }
  }, [isPostChanged]);

  const handleSearch = (e) => {
    e.preventDefault();
    try {
        console.log("inside try")
        return axios
        .get(`${apiURL}business/find/content/?content=${searchInput}`, {
            headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`
            }
        })
        .then((res) => {
            console.log("response received")
            // if (res.data.length === 0) {
            //     return <div>No Results</div>
            // } else {
                console.log(res.data)
                setSearchResults(res.data)
            // }
        })
    } catch (err) {
        console.log(err.message)
    }
  }

  return (
    <div className="rootDiv">
      <Fade in={checked} {...(checked ? { timeout: 3000 } : {})}>
        <div className={classes.logoContainer}>
          <img
            className={classes.logo}
            src="/assets/BizWiz landing logo.PNG"
            alt="Logo of a wizard's hat over the 'B' in Biz Wiz with a wand for the 'i' in 'Wiz'"
          />
        </div>
      </Fade>
      <Grow in={checked} {...(checked ? { timeout: 3000 } : {})}>
        <form action="" onSubmit={handleSearch}>
          <input className={classes.searchBar} 
            type="text" 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}/>
          <Button
            type="submit"
            className={classes.submitButton}
            variant="contained"
            size="small"
          >
            Search
          </Button>
        </form>
      </Grow>
      <Container maxWidth="md" className={classes.container}>
        <Grid container justify="flex-end">
            {searchResults.map((ele) => (
                <Grid
                item
                key={ele.id}
                xs={8}
                md={10}
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
