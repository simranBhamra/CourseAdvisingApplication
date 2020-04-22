import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import SimpleCard from '../Components/BasicInfo';
import Button from '@material-ui/core/Button';
import ClassesTakenCard from '../Components/ClassesTakenInfo';
import MajorInfoCard from '../Components/MajorInfo'; 

import reduxForm from './Export';


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

export default function Profile(){

  const classes = useStyles();
    
    return (
        <div className = "Login">

<Grid container spacing={10}>
        <Grid item xs={12}>
          <h1 style={{ color: 'white', paddingLeft: '80px', paddingRight: '80px' }}> Student 1234</h1>
      
     

        </Grid>
</Grid>

<Grid container spacing={7}>
        <Grid item></Grid>


        <Grid item  >
        <SimpleCard></SimpleCard>
        </Grid>

        <Grid item >
          <MajorInfoCard> </MajorInfoCard>
          
        </Grid>

        <Grid item >
          <ClassesTakenCard> </ClassesTakenCard>
          
        </Grid>
      

      </Grid>

           
           
        </div>
    );
}

//export default Profile; 
