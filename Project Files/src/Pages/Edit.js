//David Herrington
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NestedGrid from '../Components/Timetable';
import CustomizedTables from '../Components/Table'; 
import DenseAppBar from '../Components/NavBar';
import ComplexGrid from '../Components/ProfileButton';
import ScheduleTools from '../Components/ScheduleTools';
import Button from '@material-ui/core/Button';
import SuggBox from '../Components/ClassSugg';


function Edit(){
    return (
        <div className = "View">
    

<Grid container spacing={10}>
<Grid item xs={12}>

  <h1 style={{  color: 'white', paddingLeft: '80px', paddingRight: '80px' }}> Editor</h1>
  <Button variant="contained" style={{color:"white" ,   backgroundColor:"#FF0266"}} >
    Export
  </Button>


  <Button variant="contained" style={{color:"white" ,margin: 15, backgroundColor:"#FF0266"}} >
    Save
    </Button>
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
export default Edit; 
