import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import data from '../data/courses.json'
import Button from '@material-ui/core/Button'
import {useState} from 'react'

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
      marginLeft: '23%',
  },

  button:{
      display:'inline-block',
      marginLeft: 75,
      marginRight: 75,
      width:100,
  }

}));

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

export default function SelectClasses(props) {
  const classes = useStyles();

  return (
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
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
      
      </div>
    )
}