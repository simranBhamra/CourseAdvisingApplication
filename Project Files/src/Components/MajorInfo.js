import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import basicInfo from '../data/basicUserInfo.json'; 
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth:550,
    minHeight:700,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  paper: {
    padding: theme.spacing(2),
 
    width: 200,
    maxHeight: 10000
  },
  title: {
    fontSize: 14,
  },

  pos: {
    marginBottom: 12,
  },
}));

export default function MajorInfoCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
    <CardContent>

<Grid>
      <h1  align= "left" style={{ color: '#FF0266' }}>Major Information</h1>
      <h3  align= "left" style={{ color: 'black' }}>Primary Major</h3>
        <TextField
          disabled
          id="outlined-disabled"
          label="Major"
          defaultValue= {basicInfo[0].primaryMajor}
          variant="outlined"
        />
</Grid>
<Grid>
    <h3  align= "left" style={{ color: 'black' }}>Secondary Major</h3>
    <TextField
          disabled
          id="outlined-disabled"
          label="Second Major"
          defaultValue= {basicInfo[0].secondaryMajor}
          variant="outlined"
        />
</Grid>

<Grid>
<h3  align= "left" style={{ color: 'black' }}>Minor</h3>
    <TextField
          disabled
          id="outlined-disabled"
          label="Minor"
          defaultValue= {basicInfo[0].minor}
          variant="outlined"
        />
</Grid>

<Grid container alignItems="flex-start" justify="flex-end" direction="row">
<Button variant="contained" style={{color:"white" ,margin: 15, backgroundColor:"#FF0266"}} >
    Edit
</Button>
</Grid>

    </CardContent>
    
  </Card>
  );
}