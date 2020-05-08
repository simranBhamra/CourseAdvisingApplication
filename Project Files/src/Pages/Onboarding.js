//Authors: Michael Fishler

//Import libraries
import React from 'react';
import TextField from '@material-ui/core/TextField'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import data from '../data/courses.json'
import SelectClasses from '../Components/SelectClasses'

//Define styles
const useStyles = makeStyles(theme => ({

    spinner: {
      margin: theme.spacing(1),
      minWidth: 500,
      maxWidth: 600,
    },
    full:{
        display: "inline-block",
        direction:"column",
        alignItems:"center",
        justify:'center',
    },
    left:{
        display: "inline-block",
        paddingRight: '15px',
        width: 100,
        textAlign:'right',
        verticalAlign: "middle",
        marginTop: 20,
        },
    right:{
        display: "inline-block",
        paddingTop: '20px',
        width: 300,
        textAlign: 'center',
        verticalAlign: "bottom",
        alignContent: "center",
    },
    button:{
        display: "inline-block",
        width: 100,
        textAlign: 'center',
        marginTop: 20,
    }
  
  
  
  }));

//Allows this app to be used as an electron app
var app = window.require('electron').remote;
//Will be used to read/write files
const fs = app.require('fs');

//Get the information from the user
const userDataPath = './src/data/basicUserInfo.json';
let userData = require('../data/basicUserInfo.json')

//Classes user can choose
const years = [
    'Freshman',
    'Sophomore',
    'Junior',
];

//Majors user can choose
const majors = [
    'Computer Science',
    'Mathematics',
];

function Profile(){

    //State for opening and closing of the dialog box
    const [dialogOpen, setDialogOpen] = React.useState(false);

    //Function that controls dialog box state
    const handleDialogOpen = () => {
        setDialogOpen(true);
      };
    
      const handleDialogClose = () => {
        setDialogOpen(false);
      };

    const classes = useStyles(); //Use classes from above
    const [name, setName] = React.useState("")  //Set state for name
    const [classYear, setClassYear] = React.useState(); //Set state for class year
    const [major, setMajor] = React.useState(); //Set state for major
    const [minor, setMinor] = React.useState(); //Set state for minor
    const [classArray, setClassArray] = React.useState([]) //Set array for chosen classes

    //Collect all of the data from the screen
    function onSave(){
        userData[0].name = name
        userData[0].class = classYear
        userData[0].primaryMajor = major
        userData[0].minor = minor
        userData[0].selectedCourses = classArray

        console.log("sfddfs")
        console.log(userData[0])
        console.log("fsdsdf")

        //Write data to a file
        fs.writeFile(userDataPath, JSON.stringify(userData[0]), function writeJSON(err) {
            if (err) return console.log(err);
            console.log(JSON.stringify(userData[0]));
            console.log('writing to ' + userDataPath);
          });
    
          console.log('saved user info')
    }

    //Each section is reserved for the user's name, class year, major, minor and assigned classes
    //Save button for writing all information
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <h1>Onboarding Page</h1>
                <div>
                    <b  className={classes.left}>Name:</b>
                    <Input className={classes.right} onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                </div>
                <div>
                    <b className={classes.left}>Class Level:</b>
                    <Select className={classes.right}
                        labelId="ClassSelectLabel"
                        id="ClassSelectID"
                        value={classYear}
                        placeholder="Class"
                        style={{alignText:'center'}}
                        input={<Input />}
                    >
                        {years.map(year => (
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>
                        ))}
                    </Select>
                </div>
                <div className={classes.full}>
                    <b className={classes.left}>Major: </b>
                    <Autocomplete
                        className={classes.right}
                        options={majors}
                        id="debug"
                        debug
                        value={major}
                        onChange={(event, value)=>{
                            setMajor(value)
                        }}
                        style = {{width: 300}}
                        renderInput={(params) => <TextField {...params} label="Major"/>}
                    />
                </div>
                <div>
                    <b className={classes.left}>Minor: </b>
                    <Autocomplete
                        className={classes.right}
                        options={majors}
                        id="debug"
                        debug
                        style = {{width: 300}}
                        onChange={(event, value)=>{
                            setMinor(value)
                        }}
                        renderInput={(params) => <TextField {...params} label="Minor"/>}
                    />
                </div>
                <div>
                    <b className={classes.left}>Classes: </b>
                    <div className={classes.right}>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            onClick={handleDialogOpen}
                        >
                            View/Add
                        </Button>

                        <Dialog open={dialogOpen} onClose={handleDialogClose}>
                            <SelectClasses setClassArray={setClassArray} handleDialogClose={setDialogOpen}></SelectClasses>
                        </Dialog>
                    </div>
                </div>
                <div>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    style={{marginTop:150, width:300}}
                    onClick={onSave}
                >
                    Save
                </Button>
                </div>
            </form>
        </div>
    );
}

export default Profile; 
