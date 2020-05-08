//importing libraries and components 
//Simran Bhamra
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { styled } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Grid from '@material-ui/core/Grid';
import caaLogo from './caaLogo.svg';
import {Link} from'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';

//styling for nav bar
const MyAppBar = styled(AppBar)({
  background: '#DEB405',
  color: 'white',



  
});


//adding icons and linking to the nav bar using the react dom 

export default function StyledComponents() {



  return (
    //using grid here to organise the layout of the nav bar
    <div >
      <MyAppBar position="static">
        <Toolbar variant="dense">
          <Grid container>
            <Grid item>
             
            <IconButton   edge="start"  color="inherit"  aria-label="menu" >
              <MenuIcon fontSize="large" />
            </IconButton>
            
            </Grid>
            <Grid>


              <Grid item>
              <IconButton edge="start"  color="inherit" aria-label="menu">
              <img src={caaLogo} alt="logo icon" height = "38"></img>
            </IconButton>
              </Grid>

            </Grid>
          </Grid>


          

          <Grid>
          <Link to = '/' >  
            <IconButton edge="end"   style={{color:"white"}}aria-label="menu">
              <HomeIcon fontSize="large" />
            </IconButton>
         </Link>
          </Grid>

          <Link   to = "/profile"> 
           <IconButton edge="end"   style={{color:"white"}} aria-label="menu">
              <PersonIcon fontSize="large" />
            </IconButton>
            </Link>


        </Toolbar>
      </MyAppBar>
    </div>
  );
}

