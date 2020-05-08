//Author: Michael Fishler

//Import libraries

import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import data from '../data/courses.json'
import Button from '@material-ui/core/Button'

//Placement & size of components on screen
const useStyles = makeStyles((theme) => ({
    root:{
        width: 500,
        height: 500,
    },
  choose: {
    width: 500,
    height: 400,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },

  title: {
      marginLeft: '23%',  //Attempt to center the title
  },

  button:{
      display:'inline-block',
      marginLeft: 75,
      marginRight: 75,
      width:100,
  }

}));

//Take the courses.json array and put it to an array by mapping
let courses = data.courses.map(
    function (course) {
        return (course.course) + ": " + (course.title)
    }
)

//Empty array for courses the user chose
let selectedCourses = []

//Is triggered when a new course is added
//Saves the chosen courses to the selectedCourses array
function handleThisChange(e, value){
    selectedCourses = value
}

//props:
  // setClassArray: method that returns the chosen classes back to the parent component
  // handleDialogClose: handles opening and closing of the dialog box from within the box
export default function SelectClasses(props) {

  //Use the styles defined above
  const classes = useStyles();

  return (

    //Buttons for saving the information
    <div className={classes.root}>
        <h1 className={classes.title}>SELECT CLASSES</h1>
        <div padding="500px">
            <Button className = {classes.button} variant="contained" color="primary" onClick={()=>{
                props.handleDialogClose(false)
            }}>
            Cancel
            </Button>
            <Button className = {classes.button} variant="contained" color="primary" onClick={()=>{
                props.setClassArray(selectedCourses)
                props.handleDialogClose(false)
            }}>
            Save
        </Button>
        </div>
        
      {/* Dropdown TextField with all courses being offered at DeSales*/}
      <Autocomplete
        className = {classes.choose}
        multiple
        id="tags-standard"
        options={courses}
        max
        onChange={handleThisChange}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Classes"
            placeholder="Classes"
          />
        )}
      />
      
      </div>
    )
}
