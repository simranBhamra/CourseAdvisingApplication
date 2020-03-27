import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';
import NestedGrid from './Components/Timetable';
import CustomizedTables from './Components/Table'; 
import DenseAppBar from './Components/NavBar';
import ComplexGrid from './Components/ProfileButton';
import ScheduleTools from './Components/ScheduleTools'

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



export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={10}>
        <Grid item xs={12}>
        <DenseAppBar></DenseAppBar>
        </Grid>
      </Grid>


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