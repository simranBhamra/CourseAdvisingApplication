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
import basicInfo from '../data/basicUserInfo.json'; 
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

/**
 * This component is the card shown on the profile page which allows students to edit their major, minor, or secondary major
 */

//requiring the application to open in electron so the files can be accessed
var app = window.require('electron').remote;
const fs = app.require('fs');


//data paths of the JSON files 
const MajorDataPath = './src/data/majors.json';
var MajorData = require('../data/majors.json')

const userDataPath = './src/data/basicUserInfo.json';
let userData = require('../data/basicUserInfo.json')


//styling used on the components 
const useStyles = makeStyles(theme => ({
  root: {
    minWidth:550,
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

var cardStyle = {
  display: 'block',
  width: '26vw',
  transitionDuration: '0.3s',
  height: '31vw'
}



class MajorInfoCard extends Component {
 
//constructor 
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
      userId: 0,
      tempMajor:'',
      tempSMajor:'',
      tempMinor:''
    };

    //edit mode to save data temporarily 
    this.editMode  = () => {
      this.setState({
        disabled:false,
        tempMajor:userData.primaryMajor,
        tempSMajor:userData.secondaryMajor,
        tempMinor: userData.minor
      })
    };

    //saving data to JSON file
    this.handleSave = () => {
      this.setState({
        disabled: true
      })
      console.log(this.state)
      userData.primaryMajor = this.state.tempMajor
      userData.secondaryMajor = this.state.tempSMajor
      userData.minor = this.state.tempMinor
      console.log(userData)
      fs.writeFile(userDataPath, JSON.stringify(userData), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(userData));
        console.log('writing to ' + userDataPath);
      });

      console.log('saved user info')

    }


   
  };
 

render(){


  const { classes } = this.props

  
//search box for the majors, searching alphabetically 
  const options = MajorData.majorInfo.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Card className={classes.root} style={cardStyle}>
    <CardContent>

    

<Grid>
      <h1  align= "left" style={{ color: '#FF0266' }}>Major Information</h1>
      <h3  align= "left" style={{ color: 'black' }}>Primary Major</h3>
      <Autocomplete
      id="grouped-majors"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      disabled={this.state.disabled} 
      defaultValue = {userData.primaryMajor}   
     onChange={(e, v) => this.setState({tempMajor:v.name})}

      style={{ width: 300 }}
      renderInput={(params) =>
         <TextField {...params} label= {userData.primaryMajor}  variant="outlined" 
        
        />}
    />
</Grid>

<Grid>
    <h3  align= "left" style={{ color: 'black' }}>Secondary Major</h3>
    <Autocomplete
      id="grouped-majors"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      disabled={this.state.disabled} 
      defaultValue = {userData.secondaryMajor}   
     onChange={(e, v) => this.setState({tempSMajor:v.name})}
      style={{ width: 300 }}



      renderInput={(params) => <TextField {...params} label= {userData.secondaryMajor}  variant="outlined"
 
      />}
    />
</Grid>

<Grid>
<h3  align= "left" style={{ color: 'black' }}>Minor</h3>
<Autocomplete
      id="grouped-majors"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}

      disabled={this.state.disabled} 
      defaultValue = {userData.minor}   
     onChange={(e, v) => this.setState({tempMinor:v.name})}

      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label= {userData.minor}   variant="outlined" 
 
      
      />}
    />
</Grid>

<Grid>

</Grid>


<Grid container alignItems="flex-start" justify="flex-end" direction="row">
<Button variant="contained" style={{color:"white" ,margin: 15, backgroundColor:"#FF0266"} }  onClick = {this.editMode}>
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
}export default withStyles(useStyles)(MajorInfoCard);