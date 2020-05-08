//importing libraries and components 
//Author: Simran Bhamra
import React from 'react';
import Button from '@material-ui/core/Button';


/*
This component contains the button to actually trigger the pdf to be created and downloaed 
*/
export default (props) => {
  
  //creating the pdf
  const bodyRef = React.createRef();
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <section className="pdf-container">
      <section className="pdf-toolbar">
        <Button variant="contained" style={{color:"white" ,margin: 15, backgroundColor:"#FF0266"} }  onClick={createPdf}>Download PDF</Button>
      </section>
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
    </section>
  )
}