import React from 'react';
import ButtonExport from '../Components/ButtonExport'

  


function Export(){
    return (
        <div className = "Export">
            <h1 style={{  color: 'white' }}> The copy of you schedule below will be downloaded</h1>
            <ButtonExport></ButtonExport>
        
        </div>
    );
}

export default Export; 


