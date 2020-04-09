import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import ForwardIcon from '@material-ui/icons/Forward';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 500,
    maxWidth: 600,
  },



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
  'Senior',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ChooseClass() {
  const classes = useStyles();
  const theme = useTheme();
  const [classYear, setClassYear] = React.useState([]);

  const handleChange = event => {
    setClassYear(event.target.value);
  };


  return (

    <div className={classes.root}>
      

      <Grid container spacing={0} direction="column"  alignItems="center" alignContent="center" justify='center'>
        <Grid item xs={12}>
            <h1 style={{ color: 'white', textAlign: 'center'}}> What is your class level?</h1>
          </Grid>
          <Grid item xs={10}>
            <FormControl className={classes.formControl}>
              <InputLabel id="ClassLabel">Class</InputLabel>
              <Select
                labelId="ClassSelectLabel"
                id="ClassSelectID"
                value={classYear}
                onChange={handleChange}
                input={<Input />}
                MenuProps={MenuProps}
              >
                {years.map(year => (
                  <MenuItem key={year} value={year} style={getStyles(year, classYear, theme)}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={10}>
            <IconButton size="large" variant="contained" color="primary" alignItems="right"  style={{  color: 'white'}}>
              <ForwardIcon/>
            </IconButton>
          </Grid>
        </Grid>
    </div>
  );
}
