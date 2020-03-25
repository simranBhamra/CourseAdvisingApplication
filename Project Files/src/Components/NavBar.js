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
import caaLogo from './caaLogo.svg'

const MyAppBar = styled(AppBar)({
  background: '#DEB405',
  color: 'white',



  
});



export default function StyledComponents() {



  return (
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
            <IconButton edge="end"  color="inherit" aria-label="menu">
              <HomeIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Toolbar>
      </MyAppBar>
    </div>
  );
}
