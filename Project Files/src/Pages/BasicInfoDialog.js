import React, {Component, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import basicUserInfo from '../data/basicUserInfo.json'; 



export default class FormDialog extends Component {

  constructor(props) {
    super(props);

    this.setOpen = false

    this.state = {
      dialogOpen: false,
      requiredItem: 0,
      name: '',
      course: '',
      brochure: [
        {
          name: "User Name",
          classStatus: "Freshman"
        }
        
      ]
    }


    this.handleClickOpen = () => {

      this.setState({
        dialogOpen : true
      });
      this.myCourse = ''
      this.myName = ''

  }


  this.handleClose = () => {
  
    this.setState({
      dialogOpen : false
    });
  };

  this.setName = (name) => {
    this.setState({
      name:name
    });
  };

  this.setCourse = (course) => {
    this.setState({
      course:course
    })
  };


  // this.saveModalDetails = (item) => {
  //   const requiredItem = this.state.requiredItem;
  //   let tempbrochure = this.state.brochure;
  //   tempbrochure[requiredItem] = item;
  //   this.setState({ brochure: tempbrochure });
  // };

  }



  // const [myName,setName] = useState('')
  // const [myClass, setClass] = useState('')
 

  
  

 
  render () {
    return (
      <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Edit
      </Button>
      <Dialog open={this.state.dialogOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Basic Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit your basic infomation
          </DialogContentText>

          <TextField 
            autoFocus
            margin="dense"
            id="name"
            label= {basicUserInfo[0].name}
            value = {this.state.brochure[this.state.requiredItem].name}
            onChange={(e) => this.setName(e.target.value)}
            fullWidth
          />

        <TextField 
            autoFocus
            margin="dense"
            id="class Status"
            label={basicUserInfo[0].classStatus}
            value= {this.state.course}
            onChange={(e) => this.setCourse(e.target.value)}
            fullWidth
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.props.saveModalDetails, this.handleClose} color="primary">
            Save
          </Button>
        </DialogActions>

     

      </Dialog>
    </div>
    )
  }
};