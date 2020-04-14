import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
//import basicInfo from '../data/basicUserInfo.json'; 
import Grid from '@material-ui/core/Grid';
import InlineEdit from '../index';
import basicUserInfo from '../data/basicUserInfo.json'; 
//import storage from './storage'

//const file = require(fileName);


var app = window.require('electron').remote;
const fs = app.require('fs');

const userDataPath = './src/data/basicUserInfo.json';
let userData = require('../data/basicUserInfo.json')

console.log(userData)


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

// var json = JSON.parse(basicInfo);


class SimpleCard extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      userId: 0,
      tempName:'',
      tempClass:''
    };

    this.editMode  = () => {
      this.setState({
        disabled:false,
        tempName:userData[this.state.userId].name,
        tempClass:userData[this.state.userId].class
      })
    };

    this.handleSave = () => {
      this.setState({
        disabled: true
      })

      userData[this.state.userId].name = this.state.tempName
      userData[this.state.userId].class = this.state.tempClass

      fs.writeFile(userDataPath, JSON.stringify(userData), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(userData));
        console.log('writing to ' + userDataPath);
      });

      console.log('saved user info')

    }


   
  };
  render() {

    const { classes } = this.props

    return(
      <Card className={classes.root}>


      <CardContent>
    <Grid>
        <h1 align= "left" style={{ color: '#FF0266' }}>Basic Information</h1>
        <h3  align= "left" style={{ color: 'black' }}>Name</h3>
        <TextField
          disabled={this.state.disabled}
          id="outlined-disabled"
          label="Name"
          defaultValue = {userData[this.state.userId].name}
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
          defaultValue=  {userData[this.state.userId].class}
          variant="outlined"
          onChange={(e) => this.setState({tempClass:e.target.value})}
        />
 </Grid>
      {/* {basicInfo.map((userData) => {
        return  <div>
          <h1>{userData.name}</h1>
           <h2>{userData.classStatus}</h2>
        </div>
        
      })} */}
     

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