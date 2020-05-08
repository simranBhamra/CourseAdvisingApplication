import React from 'react';
import Nav from './Nav';
import Profile from './Pages/Profile';
import Edit from './Pages/Edit';
import Export from './Pages/Export';
import View from './Pages/View';




function Home(){
    return (
        <div className = "Home">
           <Nav/>
       <h1>Home page</h1>
        </div>
    );
}

export default Home; 