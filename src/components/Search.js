import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'
import {BrowserRouter as Link} from "react-router-dom";
import MapContainer from "./Map"
import { Button, Fade, Grow, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  filterbutton: {
    "&:hover": {
      borderColor: "#adcaec",
      boxShadow: "0 1px 6px #adcaec",
      backgroundColor: "#12417b",
      color:"white",
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

class BusinessList extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      businesses: []
    }
  }
  
  // setBusinesses(businesNames){
  //   this.setState({businesNames});
  // }

  //done in SearchBusinesses Function
  //functions for fetching and filtering business data during search
  // nameFilter(name){
  //   console.log(name)
  //   let businesses = ''
  //   this.setState({businesses})
  //   axios.get(`http://biz-wiz.herokuapp.com/business/find/?search=:${name}`)
  //   .then(res => {
  //     this.props.list = res.data;
  //     this.setState(this.props.list);
  //   })
  // }

  categoryFilter (type){
    let businesses = ''
    this.setState({businesses})
    axios.get(`http://biz-wiz.herokuapp.com/business/category/${type}`)
    .then(res => {
      businesses = res.data;
      this.setState({ businesses });
    })
  }

  locationCategoryFilter(type, location){
    let businesses = ''
    this.setState({businesses})
    axios.get(`http://biz-wiz.herokuapp.com/business/category/${type}/distance/${location}`)
    .then(res => {
      businesses = res.data;
      this.setState({ businesses });
    })
  }

  //rewritten by Davi outside this class, but not showing up on screen
  componentDidMount() {
    axios.get(`http://biz-wiz.herokuapp.com/business/all`)
      .then(res => {
        const businesses = res.data;
        this.setState({ businesses });
      })
  }

  render() {
    return (
      <div>
        <div className='list'>
            { this.state.businesses.map((business, index) =><div className='business' key={index}>
              <div id="business-info">{business.business_name}</div>
              <div id="business-info">{business.business_type}</div>
            </div>)}
        </div>
        <div>
              <MapContainer />
        </div>
      </div>
    )
  }
}

// class ViewButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
//   render() {
//     if(this.state){
//       return (
//         <div>
//           <Button variant="primary" onClick={this.handleClick}>
//             {this.state.isToggleOn ? 'List' : 'Map'}
//           </Button>
//         </div>
//       );
//     }else{
//       return (
//         <div>
//           <button onClick={this.handleClick}>
//             {this.state.isToggleOn ? 'List' : 'Map'}
//           </button>
//         </div>
//       );
//     }
//   }
// }

// class SearchForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {value: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleChange(event){
//     this.setState({value: event.target.value})
//   }
//   handleSubmit(event){
//     //console.log(this.state.value)
//     event.preventDefault()
//   }
//   render(){
//     return(
//       <div>
//       <form onSubmit={this.handleSubmit}>  
//         <label>
//         <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <button className='search' type="submit" value="Submit">Search for Business</button>
//       </form>
//       </div>
//     )
//   }
// }

function SearchBusiness() {
  //let MyBusinessList= new BusinessList();
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
      setChecked(true);
  }, []);

  const [input, setInput] = useState("");
  // useEffect(() => {
  //   console.log(businesses)
  // }, businesses)

  const [businesses, setBusinesses] =useState([]);

  const nameFilter = (event) =>{
    event.preventDefault();
    console.log(event.target.input.value)
    //let businesses = ''
    //BusinessList.setState({businesses})
    try{
      axios.get(`http://biz-wiz.herokuapp.com/business/find/name/${event.target.input.value}`) 
      .then(res => {
        //console.log(res.data)
        setBusinesses(res.data);
        console.log(businesses);
        //attempts to see filtered data to screen
          //BusinessList.setBusinesses({ businesses });
          //BusinessList.setState({businesses});
          //MyBusinessList.setState({ businesses });
          //BusinessList.call(this, setBusinesses({businesses}))
      })
    }catch(err){
      console.log(err.message)
    }
  }

  const handleChange = (event) =>{
    console.log(event.target.value);
    setInput(event.target.value);
    console.log(event.target.value);
  }
    return (
      
      <body>
        {/* <div><SearchForm /></div> */}

        {/* have the search bar appear, main purpose to search by name -I.T.*/}
        <Grow in={checked} {...(checked ? { timeout: 3000 } : {})}>
          {/* Form now prints to console, now just needs to change what is displayed to the screen */}
          <form onSubmit={nameFilter}> 
            <input className={classes.searchBar}
              type="text"
              id='searchField'
              value={input}
              name="input"
              placeholder="Business Name Search"
              onChange={handleChange}
            />
            <Button
              type="submit"
              className={classes.submitButton}
              variant="contained"
              size="small"
              //onClick = {console.log('Search Clicked')}

              // onClick={nameFilter}

              // onClick={(event)=>{
              //   event.preventDefault();
              //   let value = "";
              //   value = document.getElementById('searchField').value
              //   console.log(value);
              //   nameFilter(value);
              // }}

              //onClick={BusinessList.nameFilter(document.getElementById('searchField').value)}
              // onclick = {() => {
              //   console.log(businesses);
              //   //setBusinesses(businesses);
              //   console.log(businesses);
              // }}
            >
              Search
            </Button>
          </form>
        </Grow>

        <div className='page-container'>
        <div className='filter-container'>
        <div>
          <filter>Filter By :</filter>
        </div>
        <div>
          <filterby>Category</filterby><br/>
          {/* call functions when check boxes are clicked => onChange={BusinessList.categoryFilter("Education")} */}
          <input type='checkbox' ></input>Local Markets<br/>
          <input type='checkbox' ></input>Technology<br/>
          <input type='checkbox' ></input>Beauty<br/>
          <input type='checkbox' ></input>Education<br/>
          <input type='checkbox' ></input>Crafting<br/>
        </div>
        <div>

          <filterby>Location</filterby><br/>
          <input type='checkbox' name='New York'></input>New York<br/>
          <input type='checkbox' name='New Jersey'></input>New Jersey<br/>
          <input type='checkbox' name='Conneticut'></input>Conneticut<br/>
          <input type='checkbox'></input>Other<br/>
        </div>
        {/* <div><ViewButton /></div> */}
        <br/>
        <Button
        type='submit'
        variant='contained'
        size='small'
        className={classes.filterbutton}
        >Filter</Button>
        </div>
        <div className='list-container'>
          {/* <GetAllBusinesses />
          <RenderList /> */}
          <BusinessList />
          {/* <MyBusinessList /> */}
        </div>
        </div>
      </body>
    );
  }

export default SearchBusiness;