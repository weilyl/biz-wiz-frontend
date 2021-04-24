import React, {useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Search.css'
import MapContainer from "./Map"
import { useFormFields} from "../lib/customHooks";
import {
  makeStyles,
  Box,
  Button,
  Grid,
  TextField,
  Card,
  TextareaAutosize,
  Grow
} from "@material-ui/core";
import { Form } from "react-bootstrap";
import ReactDOM from 'react-dom'

const businessStyles=makeStyles((theme)=>({
  businessStyle:{
    color: "white"
  },
}));

const buttonStyles = makeStyles((theme) => ({
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

const gridStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
});

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


class ViewButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    if(this.state){
      return (
        <div>
          <Button variant="primary" onClick={this.handleClick}>
            {this.state.isToggleOn ? 'List' : 'Map'}
          </Button>
        </div>
      );
    }else{
      return (
        <div>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'List' : 'Map'}
          </button>
        </div>
      );
    }
  }
}

function SearchBusiness() {
  const gridclass=gridStyles()
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const[business, setBusinessState]=useFormFields({
    business_name:'',
    business_type:'',
    location:''
  });

  const handleChange = (event) =>{
    console.log(event.target.value);
    setInput(event.target.value);
    console.log(event.target.value);
  }

  //for filtering by name
  const nameFilter = (event) =>{
    event.preventDefault();
    console.log(event.target.input.value);
    try{
      axios.get(`http://biz-wiz.herokuapp.com/business/find/name/${event.target.input.value}`)
      .then(res => {
        const businesses = res.data;
          const businessList=businesses.map((business)=><Grid><Card style={{backgroundColor:'#3168b0'}}>{business.business_name}<p> </p>{business.business_type}</Card></Grid>)
          console.log(businesses.length)
          if(businesses.length>0){
            ReactDOM.render(
            <div>{businessList}<MapContainer /></div>,
            document.getElementById('list')
          )}
          else{
            ReactDOM.render(<div>Match Could Not Be Found</div>,document.getElementById('list'))
          }
        //setBusinessState(res.data);
        //console.log(business);
      })
    }catch(err){
      console.log(err.message)
    }
  }

  //for filtering
  const handleSubmit=event=>{
    event.preventDefault()
    let businessType=JSON.stringify(business.business_type)
    businessType=businessType.replace(/['"]+/g, '')

    let businessLocation=JSON.stringify(business.location)
    businessLocation=businessLocation.replace(/['"]+/g, '')

//filter by location and type
    if(businessLocation&&businessType){                                             
      axios.get(`http://biz-wiz.herokuapp.com/business/category/`+businessType)
      .then(res =>{
        let sortByState=[]
        const businesses = res.data;
        for(let i=0; i<businesses.length; i++){
          if(businesses[i].state==businessLocation){
            sortByState.push(businesses[i].business_type);
          }
        }
        console.log(sortByState)
        let businessList=[]
        if(sortByState.length==0){
          ReactDOM.render(<div>Match Could Not Be Found</div>,document.getElementById('list'))
        }
        else{
          let businessList=sortByState.map((business)=><Grid><Card>{business}</Card></Grid>)
          ReactDOM.render(<div>{businessList}<MapContainer /></div>,document.getElementById('list'))}})}

//filter by type alone
    else{
      if(!businessLocation && businessType){                                    
        axios.get('http://biz-wiz.herokuapp.com/business/category/'+businessType)
        .then(res =>{
          const businesses = res.data;
          const businessList=businesses.map((business)=><Grid><Card style={{backgroundColor:'#3168b0'}}>{business.business_name}<p> </p>{business.business_type}</Card></Grid>)
          console.log(businesses.length)
          if(businesses.length>0){
            ReactDOM.render(
            <div>{businessList}<MapContainer /></div>,
            document.getElementById('list')
          )}
          else{
            ReactDOM.render(<div>Match Could Not Be Found</div>,document.getElementById('list'))}})}

  //output if no filter is selected
    else{
        if(!businessLocation&&!businessType){
            axios.get(`http://biz-wiz.herokuapp.com/business/all`)
              .then(res =>{
                const businesses = res.data;
                console.log(businesses)
                const businessList=businesses.map((business)=><Grid><Card style={{backgroundColor:'#3168b0'}}>{business.business_name}<p> </p>{business.business_type}</Card></Grid>)
                ReactDOM.render(
                  <div>{businessList}<MapContainer /></div>,
                  document.getElementById('list'))})}

//filter by state
        else{
          axios.get(`http://biz-wiz.herokuapp.com/business/all`)
          .then(res =>{
            let sortByState=[]
            const businesses = res.data;
            for(let i=0; i<businesses.length; i++){
              if(businesses[i].state==businessLocation){
                sortByState.push(businesses[i].business_type)
              }
            }
            console.log(sortByState)
            if(sortByState.length==0){
              ReactDOM.render(<div>Match Could Not Be Found</div>,document.getElementById('list'))
            }
            else{
              let businessList=sortByState.map((business)=><Grid><Card>{business}</Card></Grid>)
              ReactDOM.render(<div>{businessList}<MapContainer /></div>,document.getElementById('list'))}})}}}};

    return (
      <body>
        {/* <div><SearchForm /></div> */}
        {/* <formdiv>
        
          <form onSubmit={nameFilter}>
            <Form.Control className={classes.searchBar} type="text" id='searchField'/>
            <Button
              fullWidth="10px"
              type="submit"
              className={classes.submitButton}
              variant="contained"
              size="small"
              placeholder='Search by name'
              onClick = {console.log('Search Clicked')}
              // onClick={BusinessList.nameFilter(document.getElementById('searchField').value)}
            >
              Search
            </Button>
          </form>
        </formdiv> */}
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
          <input type="radio" value='Local Market' onClick={setBusinessState} name='business_type' /> Local Markets<br/>
          <input type="radio" value='Technology' onClick={setBusinessState} name="business_type" /> Technology<br/>
          <input type="radio" value='Crafting' onClick={setBusinessState} name="business_type" /> Crafts<br/>
          <input type="radio" value='Education' onClick={setBusinessState} name="business_type" /> Education<br/>
          <input type="radio" value='Wholesale' onClick={setBusinessState} name="business_type" /> Wholesale<br/>
          <input type="radio" value='Hardware' onClick={setBusinessState} name="business_type" /> Hardware<br/>
          <input type="radio" value='Beauty' onClick={setBusinessState} name="business_type" /> Beauty<br/>
          <input type="radio" value='Decor' onClick={setBusinessState} name="business_type" /> Decor<br/>
          <input type="radio" value='Other' onClick={setBusinessState} name="business_type" /> Other<br/>
        </div>
          <div>
            <filterby>Location</filterby><br/>
          <input type="radio" value="New York" onClick={setBusinessState} name="location" />New York<br/>
          <input type="radio" value="Technology" onClick={setBusinessState} name="location" />New Jersey<br/>
          <input type="radio" value="Conneticut" onClick={setBusinessState} name="location" />Conneticut<br/>
          <input type="radio" value="Wyoming" onClick={setBusinessState} name="location" />Wyoming<br/>
          <input type="radio" value="Maryland" onClick={setBusinessState} name="location" />Maryland<br/>
          <input type="radio" value="California" onClick={setBusinessState} name="location" />California<br/>
          <input type="radio" value="Alabama" onClick={setBusinessState} name="location" />Alabama<br/>
          <input type="radio" value="Alaska" onClick={setBusinessState} name="location" /> Alaska <br/>
          <input type="radio" value="Colorado" onClick={setBusinessState} name="location" />Colorado <br/>
          <input type="radio" value="Delaware" onClick={setBusinessState} name="location" />Delaware <br/>
          <input type="radio" value="Georgia" onClick={setBusinessState} name="location" />Georgia <br/>
          <input type="radio" value="Hawaii" onClick={setBusinessState} name="location" />Hawaii <br/>
          <input type="radio" value="Idaho" onClick={setBusinessState} name="location" />Idaho <br/>
          <input type="radio" value="Illinois" onClick={setBusinessState} name="location" />Illinois <br/>
          <input type="radio" value="Florida" onClick={setBusinessState} name="location" />Florida<br/>
          <input type="radio" value="Indiana" onClick={setBusinessState} name="location" />Indiana <br/>
          <input type="radio" value="Iowa" onClick={setBusinessState} name="location" />Iowa <br/>
          <input type="radio" value="Kansas" onClick={setBusinessState} name="location" />Kansas <br/>
          <input type="radio" value="Kentucky" onClick={setBusinessState} name="location" /> Kentucky <br/>
          <input type="radio" value="Louisiana" onClick={setBusinessState} name="location" />Louisiana <br/>
          <input type="radio" value="Maine" onClick={setBusinessState} name="location" />Maine <br/>
          <input type="radio" value="Other" onClick={setBusinessState} name="location" />Other <br/>
          </div>
        {/* <div><ViewButton /></div><br/> */}
        <Button
        type='submit'
        variant='contained'
        size='small'
        onClick={handleSubmit}
        >Filter</Button>
        </div>
          <list id='list' className='list-container'/>
        </div>
      </body>
    );
  }
export default SearchBusiness;