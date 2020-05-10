//importing libraries and components 
//Author: Simran Bhamra
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import data from '../data/courses.json';
import Autocomplete from '@material-ui/lab/Autocomplete';

/**
 * This component is the card on the profile page which allows the student to edit their classes taken
 */

//requiring the app to open in electron so the files can be accesssed 
var app = window.require('electron').remote;
const fs = app.require('fs');


//path for files 
const userDataPath = './src/data/basicUserInfo.json';
let userData = require('../data/basicUserInfo.json')


//styling 
const useStyles = makeStyles(theme => ({
  root: {
   
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
  choose: {
    width: 400,
    height: 400,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },

  title: {
    fontSize: 14,
    marginLeft: '23%',
  },

  pos: {
    marginBottom: 12,
  },
}));



//card style styling 
var cardStyle = {
  display: 'block',
  width: '26vw',
  transitionDuration: '0.3s',
  height: '31vw'
}


//map of data for each course 
let courses = data.courses.map(
  function (course) {
      return (course.course) + ": " + (course.title)
  }
)

let selectedCourses = []

//function to record change of a value/class taken  
function handleThisChange(e, value){
  console.log(value)
  selectedCourses = value
  console.log(selectedCourses)
}

export default function ClassesTakenCard() {
 

  selectedCourses = userData.selectedCourses
  console.log(selectedCourses)

  const classes = useStyles();


  function onSave(){
   
    userData.selectedCourses = selectedCourses

    
    console.log(userData)
  
//write new added classes or deleted classes to json file 
    fs.writeFile(userDataPath, JSON.stringify(userData), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(userData));
        console.log('writing to ' + userDataPath);
      });

      console.log('saved user info')
}



  return (
    <Card className={classes.root} style={cardStyle}>
    <CardContent>


<Grid>
<h1  align= "left" style={{ color: '#FF0266' }}>Classes</h1>

<Autocomplete
        className = {classes.choose}
        multiple
        id="tags-standard"
        options={courses}
        max
        defaultValue={selectedCourses}
        onChange={handleThisChange}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
          
            label="Add Classes"
            placeholder="Class"
          />
        )}
      />


</Grid>


<Grid container alignItems="flex-start" justify="flex-end" direction="row">
<Button variant="contained" style={{color:"white" ,margin: 15, backgroundColor:"#FF0266"}} >
    Edit
</Button>
<Button variant="contained" style={{color:"white" ,margin: 15, backgroundColor:"#FF0266"}}  onClick={onSave} >
    Save
</Button>
    </Grid>
    </CardContent>
    
  </Card>
  );
}