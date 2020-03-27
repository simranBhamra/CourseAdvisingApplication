import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
//import 'typeface-ubuntu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(6),
    margin: 'auto',
    
    maxWidth: 300,
    backgroundColor: "#ffffff" //https://material-ui.com/customization/color/
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  avatar: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  ProfileNameText:{
    fontSize: 30,
    variant: "h1",
    //fontFamily: "ubuntu",
  },

}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.ProfileNameText}>
                  My Profile
                </Typography>
              </Grid>
              <Grid item>
              <Button variant="contained"
                  color="primary"
                  startIcon={<EditIcon/>}>
                  Edit Profile
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatar}><PersonIcon/></Avatar>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}