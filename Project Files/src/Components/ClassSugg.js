/*
This component provides an option pane with a list of classes
that can be filtered by course title or course code using the search
bar. 
@author David Herrington
*/


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';
import CustomizedTables from './Table.js';

var app = window.require('electron').remote;
const fs = app.require('fs');

//Importing courseTimes.json
const courseDataPath = './src/data/courseTimes.json';
var courseData = require('../data/courseTimes.json');

//Importing currentSchedule.json
const currentSchedulePath = './src/data/currentSchedule.json';
var currentScheduleArray = require('../data/currentSchedule.json');


class ClassSugg extends React.Component {
  /*
  This constructor handles the state of
  the component and the tempvalues for the 
  props of the courses array in courses.json.
  */
  constructor(props){
    super(props);
    this.state = {
      search: null,
      temptitle: "",
      tempcourse: "",
      tempstartDate: "",
      tempendDate: "",
      tempstartTime: "",
      tempendTime: "",
      tempdays: "",
    }
    /*
    This function handles adding courses to the
    currentSchedule.json file.
    */
    this.handleCourseAdd = (e) =>{
      
      
      currentScheduleArray.currentSchedule[currentScheduleArray.currentSchedule.length] = {title:this.state.temptitle,course:this.state.tempcourse,startDate:this.state.tempstartDate,endDate:this.state.tempendDate,startTime:this.state.tempstartTime,endTime:this.state.tempendTime,days:this.state.tempdays}
          fs.writeFile(currentSchedulePath, JSON.stringify(currentScheduleArray), function writeJSON(err) {
            if (err) return console.log(err);
            console.log(JSON.stringify(currentScheduleArray));
            console.log('writing to ' + currentSchedulePath);
           
          });
    }

  }
   

  /*
  This function handles the search box on the
  classSugg component by using the value of the
  search box to filter the course list in real time
  by updating the state.
  */
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  

  //Re-renders the component
   render(){
    


    

    /*
    This handles the classes being displayed in the
    componet by filtering the courses by the search box
    and maping the courses to a list of buttons.
    */
    const courses = courseData.data.filter((element)=>{
      if(this.state.search == null){
        return element;
      }else if(element.title.toLowerCase().includes(this.state.search.toLowerCase()) || element.course.toLowerCase().includes(this.state.search.toLowerCase())){
        return element;
      }

    }).map(element=>{
    return(
       <Button variant="contained" size="large" onClick={this.handleCourseAdd} onMouseOver={(e)=>this.setState({temptitle:e.title,
                                                                                                tempcourse:element.course,
                                                                                                tempstartDate:element.startDate,
                                                                                                tempendDate:element.endDate,
                                                                                                tempstartTime:element.startTime,
                                                                                                tempendTime:element.endTime,
                                                                                                tempdays:element.days,})} 
        style ={{ color: "white", marginTop: '20px',marginBottom: '20px' ,backgroundColor:"#36BF26", minWidth: "100%"}}>
       {element.title}      
       <br></br>
       {element.course}  
       </Button>
      )
    });
  /*
  This return function displays the component to the page
  along with the mapped course and search bar. The component is
  displayed with html with JSX styling.
  */
  return (
    <div style={{flexGrow: 1}}>
      <Paper style={{width: 450,
                     maxHeight: 700,}} >


        <Grid item xs={12} style={{backgroundColor: '#0336FF',
                                  color: "white",
                                  margin: "auto",
                                  textAlign: "center",
                                  width: 430.5,
                                  height: 50,
                                  padding: 5,}}>
            <h3 style={{margin: "auto"}}>
            Suggested Classes
            </h3>
        </Grid>

   
        <Grid container className="qNumGrid" xs={12}>
            
      <Grid item xs={12} style={{width: '25ch', padding: 10,}}>
        <TextField
          id="filled-full-width"
          label="Search"
          style={{  top_margin: 2 }}
          fullWidth
          margin="normal"
          onChange={(e)=>this.searchSpace(e)}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      <Paper style={{maxHeight: 520, overflow: 'auto', border: 'none', padding: 20}}>
        {courses}

      </Paper> 

            </Grid>
        </Grid>

      </Paper>
    </div>
  );
}
}export default ClassSugg
