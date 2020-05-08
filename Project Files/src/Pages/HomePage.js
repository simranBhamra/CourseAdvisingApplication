//importing libraries and components 
//Simran Bhamra, David Herrington, and Michael Fishler
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NestedGrid from '../Components/Timetable';
import CustomizedTables from '../Components/Table'; 
import DenseAppBar from '../Components/NavBar';
import ComplexGrid from '../Components/ProfileButton';
import ScheduleTools from '../Components/ScheduleTools';
import './HomePage.css';

//styling 
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));


//use of grids to organise the page, on the homepage all the  needed componets are imported in and placed on the screen 
export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


<Grid container spacing={10}>
        <Grid item xs={12}>
      
          <h1 style={{ color: 'white', paddingLeft: '80px', paddingRight: '80px' }}> Welcome Student 1234</h1>
      
        </Grid>
      </Grid>

      <Grid container spacing={10}>
        <Grid item></Grid>
        <Grid item xs={8}>
        <CustomizedTables></CustomizedTables>
        </Grid>

        <Grid item xs={7} sm={3}>
          <ComplexGrid></ComplexGrid>
          <ScheduleTools></ScheduleTools>
        </Grid>

      </Grid>
    </div>
  );
}


