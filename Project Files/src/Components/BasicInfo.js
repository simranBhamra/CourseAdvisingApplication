//importing libraries and components 
//Author: Simran Bhamra
import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InlineEdit from '../index';
import basicUserInfo from '../data/basicUserInfo.json'; 


/**
 * This component is the card which allows the user to edit their basic information
 * data from this is stored into the basicUserInfo.json
 */

//making the application window open only using electron so the app can access the files
var app = window.require('electron').remote;
const fs = app.require('fs');

//path for the basic information data
const userDataPath = './src/data/basicUserInfo.json';
let userData = require('../data/basicUserInfo.json')


//console log to check correct input 
console.log(userData)


//styling for basic info 
const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 550,
    minHeight:700,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  paper: {
    padding: theme.spacing(2),
 
    width: 200,
    maxHeight: 10000
  },
  title: {
    fontSize: 14,
  },

  pos: {
    marginBottom: 12,
  },
}));


//styling for the actual card
var cardStyle = {
  display: 'block',
  width: '26vw',
  transitionDuration: '0.3s',
  height: '31vw'
}




//simple card class 
class SimpleCard extends Component {

  
//constructor to take store temp values from the user
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      userId: 0,
      tempName:'',
      tempClass:''
    };

    //edit mode
    this.editMode  = () => {
      this.setState({
        disabled:false,
        tempName:userData.name,
        tempClass:userData.class
      })
    };



//saving the edited values 
    this.handleSave = () => {
      this.setState({
        disabled: true
      })

      userData.name = this.state.tempName
      userData.class = this.state.tempClass
//writing to file
      fs.writeFile(userDataPath, JSON.stringify(userData), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(userData));
        console.log('writing to ' + userDataPath);
      });

      console.log('saved user info')

    }


   
  };

  //rending the styled components on to the page
  //calling the set state and save on change for the textfield values 
  render() {

    const { classes } = this.props

    return(
      <Card className={classes.root} style={cardStyle}>


      <CardContent>
  
    <Grid>
        <h1 align= "left" style={{ color: '#FF0266' }}>Basic Information</h1>
        <h3  align= "left" style={{ color: 'black' }}>Name</h3>
        <TextField
          disabled={this.state.disabled}
          id="outlined-disabled"
          label="Name"
          defaultValue = {userData.name}
          variant="outlined"
          onChange={(e) => this.setState({tempName:e.target.value})}
        />
    </Grid>
    <Grid>

    <h3  align= "left" style={{ color: 'black' }}>Class</h3>
    <TextField
          disabled={this.state.disabled}
          id="outlined-disabled"
          label="Class"
          defaultValue=  {userData.class}
          variant="outlined"
          onChange={(e) => this.setState({tempClass:e.target.value})}
        />
 </Grid>
      
     

<Grid container alignItems="flex-start" justify="flex-end" direction="row">

<Button  variant="contained" style={{color:"white" ,margin: 15, backgroundColor:"#FF0266"}} onClick = {this.editMode} >
    Edit
  </Button>

  <Button  variant="contained" style={{color:"white" ,margin: 15, backgroundColor:"#FF0266"}} onClick = {this.handleSave} >
    Save
  </Button>
  
  


</Grid>

      


      </CardContent>
      
    </Card>
    );
  }
}export default withStyles(useStyles)(SimpleCard); 
//exporting default function 