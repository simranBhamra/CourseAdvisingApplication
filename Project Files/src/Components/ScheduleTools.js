import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { blue } from '@material-ui/core/colors';
import {Link} from'react-router-dom';


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: 400,
    height: 100, 
    backgroundColor: "#ffffff"
    
    
  },
  extendedIcon: {
    marginRight: theme.spacing(5),
  },
  root: {
    flexGrow: 1,
    width: 400,
  },
  header: {
      fontSize: 25,
      textAlign: "left",
      paddingLeft: 20,
      color: "blue",
     
  },
  buttonText: {
      textAlign: "left",
      width: 400,
      color: "blue",
      fontSize: 20,
      

  }
 
}));

export default function ScheduleTools() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>My Schedule Tools</h1>
      </div>

      
      <div>
      <Link to = '/edit'>
        <Button  renderAs="button" variant="contained" size="large" color="white" className={classes.button}>
            <div className={classes.buttonText}>Edit</div><ArrowForwardIcon color= "primary" ></ArrowForwardIcon>
        </Button>
        </Link>
      </div>
     


      <div>
      <Link to = '/view'>
        <Button renderAs="button" variant="contained" size="large" color="white" className={classes.button}>
            <div className={classes.buttonText}>View</div><ArrowForwardIcon color="primary"></ArrowForwardIcon>
        </Button>
        </Link>
      </div>

      <div>
        <Link to = "/export">
        <Button renderAs="button"  variant="contained" size="large" color="white" className={classes.button}>
            <div className={classes.buttonText}>Export</div><ArrowForwardIcon color="primary"></ArrowForwardIcon>
        </Button>
        </Link>
      </div>


      <div>
        <Link to = "/new">
        <Button  renderAs="button" variant="contained" size="large" color="white" className={classes.button}>
            <div className={classes.buttonText}>Start a new schedule</div><ArrowForwardIcon color="primary"></ArrowForwardIcon>
        </Button>
        </Link>
      </div>
    
    </div>
  );
}