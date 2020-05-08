//importing libraries and components 
//Simran Bhamra
import React from 'react';
import {Link} from'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import caaLogo from './Components/caaLogo.svg'
import PersonIcon from '@material-ui/icons/Person';

function Nav(){


//styling of the navigation bar items 
    const navStyle ={
        color: 'white'
    };

//styled icons and links to the pafes using the React Router 
    return (
       <nav>
           <IconButton edge="start"  color="inherit" aria-label="menu">
              <img src={caaLogo} alt="logo icon" height = "38"></img>
            </IconButton>
         

           <ul className = "nav-links"> 


           <Link  style ={navStyle} to = "/home"> 
           <IconButton edge="end"  color="inherit" aria-label="menu">
              <HomeIcon fontSize="large" />
            </IconButton>
            </Link>

           <Link  style ={navStyle} to = "/profile"> 
           <IconButton edge="end"  color="inherit" aria-label="menu">
              <PersonIcon fontSize="large" />
            </IconButton>
            </Link>

            <Link style ={navStyle} to = "/edit">
                <li>Edit</li>
            </Link>
            <Link  style ={navStyle} to = "/export"> 
                <li>Export</li>
            </Link>
            <Link  style ={navStyle} to = "/view">
                <li>View</li>
            </Link>
               

           </ul>
       </nav>
    );
}

export default Nav; 
