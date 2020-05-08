//importing libraries and components 
//Author: Simran Bhamra
import React, { Component } from 'react';
import { render } from 'react-dom';
import Doc from './DocService';
import PdfContainer from './PdfContainer';
import CustomizedTables from './Table';
import Grid from '@material-ui/core/Grid';

/**
 * This component contains the layout for the export page and all the state variables used for testing the export of the time table(html) component 
 */

//class to export PDF of the timetable 
class ButtonExport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Simran',
      rank: 'SGT',
      description: 'Demonstrate export PDF'
    };
  }  

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((state) => {
      state[name] = value;
      return state;
    })
  }
//creating the pdf
  createPdf = (html) => Doc.createPdf(html);
//rending the page to show the table that will be exported 
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
       
        <PdfContainer createPdf={this.createPdf}>
          <React.Fragment>

         

          <Grid container spacing={10}>
          <Grid item></Grid>
        <Grid item xs={11}>
        <CustomizedTables></CustomizedTables>
        </Grid>
        </Grid>


          </React.Fragment>
        </PdfContainer>
      </React.Fragment>
    );
  }
} export default ButtonExport
//rendering the button export as needed
render(<ButtonExport />, document.getElementById('root'));
