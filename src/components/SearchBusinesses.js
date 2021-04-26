import axios from 'axios';
import { useHistory, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import {
    Button, 
    Container, 
    Fade, 
    Grow, 
    makeStyles, 
    Card,
    CardContent,
    CardHeader, 
    List,
    ListItem,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    rootDiv: {
      margin: "0px auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    logo: {
      height: "50px",
      marginLeft: "20px",
      marginBottom: "10px",
    },
    logoContainer: {
      display: "flex",
      padding: "10px",
    },
    MuiTextField: {
      textDecoration: "none",
    },
    resultsContainer: {
        display: "flex",
        flexDirection: "column",
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
      marginRight: "20px",
      height: "44px",
      width: "482px",
      outline: "none",
      textIndent: "30px",
      textDecoration: "none",
    },
    searchContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyItems: "space-around",
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
      padding: "10px",
      fontSize: "14px",
      lineHeight: "16px",
      height: "44px",
      borderWidth: "0",
      borderRadius: "30px",
    },
  }));
  

export default function SearchBusinesses() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const [checked, setChecked] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [newSearchInput, setNewSearchInput] = useState('');
    const [resultsChanged, setResultsChanged] = useState(false);

    useEffect(() => {
        setChecked(true);
        if (location.state) {
        handleLoadResults(location.state.from);
        }    
    }, []);

    useEffect(() => {
        console.log(newSearchInput);
    }, [newSearchInput]);

    useEffect(() => {
        console.log(searchResults)
        if (resultsChanged) {
            setResultsChanged(false)
            setNewSearchInput('')
        }
    }, [resultsChanged])
    
    const handleLoadResults = (input) => {
        console.log(input)
        try {
            return axios
            .get(`https://biz-wiz.herokuapp.com/business/find/name/${input}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                  }
            })
            .then((res) => {
                setSearchResults(res.data);
                setResultsChanged(!resultsChanged);
                return searchResults
            })
        } catch (err) {
            console.log("err msg: ", err.message)
        }
        setResultsChanged(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            return axios
            .get(`https://biz-wiz.herokuapp.com/business/find/name/${newSearchInput}`, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                  }
            })
            .then((res) => {
                setSearchResults(res.data);
                console.log(1, searchResults);
                console.log(2, resultsChanged)
                setResultsChanged(!resultsChanged);
                console.log(3, resultsChanged)
                history.push('/search-businesses');
                return searchResults
            })
        } catch (err) {
            console.log("err msg: ", err.message)
        }
        setResultsChanged(false);
    }

    return (
    <div>
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
        <form action="" 
            className={classes.searchContainer}>
          <input 
            className={classes.searchBar} 
            type="text" 
            value={newSearchInput}
            onChange={(e) => setNewSearchInput(e.target.value)}/>
          <Button
            type="submit"
            className={classes.submitButton}
            variant="contained"
            size="small"
            onClick={handleSubmit}
          >
            <SearchIcon />
          </Button>
        </form>
      </Grow>
    </Container>

    <Container className={classes.resultsContainer}>
        { searchResults.length !== 0 ? 
            searchResults.map((result) => {
                return (
                    <Card>
                        <CardHeader 
                        title={result["business_name"]}
                        subheader={result["business_type"]}
                        />
                        <CardContent>
                            <Typography >
                            Location: {' '}
                            {result["street_address"]}{' '}
                            {result["city"]}, {result["state"]}, {result["zip"]}{' '}
                            </Typography>
                        </CardContent>

                    </Card>
                )
            }) : <Card><CardHeader title="No matches" /></Card>
        }

        
    </Container>

    </div>
    )
}