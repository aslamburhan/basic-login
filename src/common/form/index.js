import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    root: {
        color: "white !important",
     
    },
    textField:{
        margin: theme.spacing(2),
        width: '80%',
        color: "white !important",
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
        color: "white !important",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
        color: "white !important",
      },

  }));
export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl  component="fieldset">
      <FormLabel style={{color:'white'}} component="legend">What is your gender?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}
export function BasicTextFields() {
    const classes = useStyles();
  
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <FormLabel style={{color:'white'}} component="legend">Where are you located at?</FormLabel>
        <TextField style={{color:'white'}} className={classes.textField} id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    );
  }
  export function SimpleSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = event => {
      setAge(event.target.value);
    };
  
    return (
      <div>
                  <FormLabel style={{color:'white'}} component="legend">What is you age?</FormLabel>

        <FormControl className={classes.formControl}>

          <InputLabel style={{color:'white'}} id="demo-simple-select-label">Age</InputLabel>
          <Select
          style={{color:'white'}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </div>
  );
}