
//importing libraries and components 
//Simran Bhamra, David Herrington, and Michael Fishler
import React from 'react';
import Nav from './Nav';
import Profile from './Pages/Profile';
import HomePage from './Pages/HomePage';
import Home from './Home';
import Edit from './Pages/Edit';
import Export from './Pages/Export';
import View from './Pages/View';
import NewSched from './Pages/NewSched';
import DenseAppBar from './Components/NavBar';
import OnBoard from './Pages/Onboarding';

import './App.css';

//renaming the browser router as router 
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 


try{
    let userData = require('./data/basicUserInfo.json')
    console.log(userData.name)
    if(userData.name != ''){
        console.log(userData.name)
        var priorUser = true;
    } 
    else{
        var priorUser = false;
    }
}
catch{
}

console.log(priorUser)


function App(){
    return (
//the application bar in imported here to it shows up consitanty on each page
//routing for each page in is in the switch tags, they are linked to the correct pages, the "/..." is what would be in the url if it was online
        <Router>
        <div className = "App">
        <DenseAppBar></DenseAppBar>
        

             <Switch>  
          
                
                <Route path = "/home" exact component = {HomePage}/> 
                <Route path = "/profile" component = {Profile}/> 
                <Route path = "/edit" component = {Edit}/> 
                <Route path = "/view" component = {View}/> 
                <Route path = "/export" component = {Export}/> 
                <Route path = "/new" component = {NewSched}/>
                <Route path = "/onboard" component = {OnBoard}/>
                <Route path = "/">
                    {priorUser?<Redirect to="/home"/>: <OnBoard/>}
                </Route>
            </Switch>
           
        </div>
        </Router>
    );
}




export default App; 
