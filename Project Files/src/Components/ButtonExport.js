import React, { Component } from 'react';
import { render } from 'react-dom';

import Doc from './DocService';
import PdfContainer from './PdfContainer';
import CustomizedTables from './Table';
import Grid from '@material-ui/core/Grid';

class ButtonExport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Simran',
      rank: 'SGT',
      description: 'Demonstrate how to export an HTML section to PDF'
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

  createPdf = (html) => Doc.createPdf(html);

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

render(<ButtonExport />, document.getElementById('root'));
