//importing libraries and components 
//Simran Bhamra 
import React from 'react';
import ButtonExport from '../Components/ButtonExport'

  

//styling and layout of page is containted in this function and the Button Export component is shown 
function Export(){
    return (
        <div className = "Export">
            <h1 style={{  color: 'white' }}> The copy of your schedule below will be downloaded</h1>
            <ButtonExport></ButtonExport>
        
        </div>
    );
}

export default Export; 


