//David Herrington
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NestedGrid from '../Components/Timetable';
import CustomizedTables from '../Components/BlankTimeTable';
import DenseAppBar from '../Components/NavBar';
import ComplexGrid from '../Components/ProfileButton';
import ScheduleTools from '../Components/ScheduleTools';
import Button from '@material-ui/core/Button';
import './View.css';
import SuggBox from '../Components/ClassSugg';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  
  }));
 
function NewSched(){
    return (
        <div className = "NewSched">
<Grid container spacing={10}>
<Grid item xs={12}>

  <h1 style={{  color: 'white', paddingLeft: '80px', paddingRight: '80px' }}> Edit New Schedule</h1>
  

</Grid>
</Grid>



<Grid container spacing={10}>
<Grid item></Grid>
<Grid item xs={8}>
<CustomizedTables></CustomizedTables>
</Grid>

<Grid item xs={7} sm={3}>
          
          <SuggBox></SuggBox>
        </Grid>
</Grid>



        </div>
    );
}

export default NewSched; 