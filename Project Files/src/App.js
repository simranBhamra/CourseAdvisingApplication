

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
import './App.css';

//renaming the browser router as router 
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 




function App(){
    return (

        <Router>
        <div className = "App">
        <DenseAppBar></DenseAppBar>
        
             <Switch>  
          
                <Route path = "/" exact component = {HomePage}/> 
                <Route path = "/profile" component = {Profile}/> 
                <Route path = "/edit" component = {Edit}/> 
                <Route path = "/view" component = {View}/> 
                <Route path = "/export" component = {Export}/> 
                <Route path = "/new" component = {NewSched}/>
            </Switch>
           
        </div>
        </Router>
    );
}

// //help to render just a homepage
// const Home = () => (
// <div>
//     <h1> Home Page</h1>
// </div> 
// ); 



export default App; 
