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


var app = window.require('electron').remote;
const fs = app.require('fs');

const userDataPath = './src/data/basicUserInfo.json';
let userData = require('../data/basicUserInfo.json')

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

var cardStyle = {
  display: 'block',
  width: '26vw',
  transitionDuration: '0.3s',
  height: '31vw'
}


let courses = data.courses.map(
  function (course) {
      return (course.course) + ": " + (course.title)
  }
)

let selectedCourses = []

function handleThisChange(e, value){
  console.log(value)
  selectedCourses = value
  console.log(selectedCourses)
}

export default function ClassesTakenCard() {
 

  selectedCourses = userData[0].selectedCourses
  console.log(selectedCourses)

  const classes = useStyles();


  function onSave(){
   
    userData[0].selectedCourses = selectedCourses

    
    console.log(userData[0])
  

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