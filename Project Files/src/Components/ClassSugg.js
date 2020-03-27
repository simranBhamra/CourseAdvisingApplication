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





const useStyles = makeStyles(theme => ({
   
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
 
    width: 450,
    maxHeight: 10000
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
   
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  gridheader: {
      backgroundColor: theme.palette.background.paper,
      backgroundColor: '#0336FF',
      color: "white",
      margin: "auto",
      textAlign: "center",
      width: 430.5,
      height: 50,
      padding: theme.spacing(0.09),
    
     
  },
  textField: {
    //   padding: theme.spacing(1),
    //   maxHeight: 60,
    //   color: '#374785'

      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
  },
  leftText: {
      padding: theme.spacing(2.3),
  }
}));

export default function CommentBox() {
   const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} >


        <Grid item xs={12} className={classes.gridheader}>
            <h3>
            Suggested Classes
            </h3>
        </Grid>

   
        <Grid container className="qNumGrid" xs={12}>
            
            <Grid item xs={12} className={classes.textField}>
            <TextField
          id="filled-full-width"
          label="Search"
          style={{  top_margin: 2 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Button variant="contained" size="large" className={classes.margin} style ={{ color: "white", marginTop: '20px',marginBottom: '20px' ,backgroundColor:"#36BF26", minWidth: "100%"}}>
        CS-356      
        <br></br>
        Software Engineering  
        </Button>

        <Button variant="contained" size="large"  className={classes.margin} style ={{ color: "white",marginBottom: '20px',backgroundColor:"#36BF26", minWidth: "100%"}}>
        CS-360  
        <br></br>
        Database Analysis and Design
        </Button>

        <Button variant="contained" size="large"  className={classes.margin} style ={{ color: "white",marginBottom: '20px',backgroundColor:"#FFA70E", minWidth: "100%"}}>
        PS-265
        <br></br>
        Psychobiology
        </Button>

        <Button variant="contained" size="large"  className={classes.margin} style ={{ color: "white",marginBottom: '20px',backgroundColor:"#742AE4", minWidth: "100%"}}>
        CJ-160
        <br></br>
        Criminal Law
        </Button>
        

        <Button variant="contained" size="large"  className={classes.margin} style ={{ color: "white",marginBottom: '20px',backgroundColor:"#742AE4", minWidth: "100%"}}>
        CJ-260
        <br></br>
        Law Enforcement
        </Button>

        <Button variant="contained" size="large"  className={classes.margin} style ={{ color: "white",marginBottom: '33px',backgroundColor:"#03CFFF", minWidth: "100%"}}>
        HI-204
        <br></br>
        History of Latin America
        </Button>


            </Grid>
        </Grid>

      </Paper>
    </div>
  );
}