import React from 'react';
import TextField from '@material-ui/core/TextField'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
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
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

const years = [
    'Freshman',
    'Sophomore',
    'Junior',
];

const majors = [
    'Computer Science',
    'Mathematics',
];

function saveButtonClicked(){
    console.log("Fuck");
}


function Profile(){

    const classes = useStyles();
    const [classYear, setClassYear] = React.useState([]);
    
    const handleChange = event => {
        setClassYear(event.target.value);
    };

    return (
        <div>

            <form className={classes.root} noValidate autoComplete="off">
                <h1>Onboarding Page</h1>
                <div>
                    <b  className={classes.left}>Name:</b>
                    <Input className={classes.right}/>
                </div>
                <div>
                    <b className={classes.left}>Class Level:</b>
                    <Select className={classes.right}
                        labelId="ClassSelectLabel"
                        id="ClassSelectID"
                        value={classYear}
                        placeholder="Class"
                        style={{alignText:'center'}}
                        onChange={handleChange}
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
                            onClick={saveButtonClicked()}
                        >
                            View/Add
                        </Button>
                    </div>
                </div>
                <div>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    style={{marginTop:150, width:300}}
                >
                    Save
                </Button>
                </div>
            </form>
        </div>
    );
}

export default Profile; 
