/*
This component handles the data being displayed to the timetable
component by creating an array of rows sorted by the createData
function to show cells for each day of the week.
@author David Herrington, Simran Bhamra
*/

import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';



var app = window.require('electron').remote;
const fs = app.require('fs');

//Imports currentSchedule.json
const currentSchedulePath = './src/data/currentSchedule.json';
var currentScheduleArray = require('../data/currentSchedule.json');


//Handles styling for the table cells.
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor:'#FF0266',
    color: theme.palette.common.white,
    fontSize: 20,
  },
  body: {
    fontSize: 15,
  },
}))(TableCell);





//Handles styling for the table rows.
const StyledTableRow = styled(TableRow)({
  background: '#FFFFFF'
  
});

/*
This function formats the rows array by weekdays.
*/
function createData(Monday, Tuesday, Wednesday, Thursday, Friday) {
  return { Monday, Tuesday, Wednesday, Thursday, Friday };
}





const useStyles = makeStyles({
  table: {
    minWidth: 700,
    height: 725,
  },
});

//The rows array handles populating the individual cells on the timetable.
var rows = [
  createData('no class selected', 'no class selected', 'no class selected', 'no class selected', 'no class selected'),
  createData('no class selected', 'no class selected', 'no class selected', 'no class selected', 'no class selected'),
  createData('no class selected', 'no class selected', 'no class selected', 'no class selected', 'no class selected'),
  createData('no class selected', 'no class selected', 'no class selected', 'no class selected', 'no class selected'),
  createData('no class selected', 'no class selected', 'no class selected', 'no class selected', 'no class selected'),
  
];

class CustomizedTables extends React.Component {
  
  /*
  This constructor handles the temp variables for
  course name and course time to be displayed 
  on the table. Along with managing the state
  of the component.
  */
  constructor(props){
    super(props);
    this.state = {
      tempCourseName:"",
      tempCourseTime:"",
    }
    /*
    This function was an attempt at making 
    changes to the rows array for displaying
    selected classes.
    */
    this.changeData = () =>{
      var tempArray = [rows];
      rows[0][0] = "New class";
      this.setState({rows});
    }
  }
  

  

/*
This render function displays the table to the timetable component
with weekdays along the top row and five possible cells under each day
that can contain classes. This is achieved by using the map function
to map the rows array to the cells.
*/
render(){
  return (
    <TableContainer component={Paper}>
      <Table style={{minWidth:700, height: 725}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Monday</StyledTableCell>
            <StyledTableCell >Tuesday</StyledTableCell>
            <StyledTableCell >Wednesday</StyledTableCell>
            <StyledTableCell >Thursday</StyledTableCell>
            <StyledTableCell >Friday</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.Monday}>
              <StyledTableCell component="th" scope="row">
                {row.Monday}
              </StyledTableCell>
              <StyledTableCell >{row.Tuesday}</StyledTableCell>
              <StyledTableCell >{row.Wednesday}</StyledTableCell>
              <StyledTableCell >{row.Thursday}</StyledTableCell>
              <StyledTableCell >{row.Friday}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
 }
}export default CustomizedTables
