import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import {saveSurveyData} from "../../components/survey/actions"
const useStyles = makeStyles(theme => ({
  root: {
    color: "white !important"
  },
  textField: {
    margin: theme.spacing(2),
    width: "80%",
    color: "white !important"
  },
  formControl: {
    margin: theme.spacing(0),
    width:"100%",
    minWidth: 120,
    minHeight: 194,
    color: "white !important"
  },
  formControlLabel:{
    textAlign: "LEFT",
    padding: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: "white !important"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: "white",
    backgroundColor: "#8b4fff"
  },
  bottomBar:{
      backgroundColor:"#13141757",
      padding: theme.spacing(1),
      width:'100%',
      textAlign: "right"
  },
  select:{
      marginTop: theme.spacing(5),

  },

}));
function RadioButtons(props) {
  const [value, setValue] = React.useState("female");
  const classes = useStyles();

  const handleChange = event => {
    setValue(event.target.value);
  };
  console.log(props, "dddddddddddddddddddd");
  return (
    <FormControl className={classes.formControl} component="fieldset">
      <Paper className={classes.paper}>
        <FormLabel style={{ color: "white" }} component="legend">
          {props.data.title}
        </FormLabel>
      </Paper>
      <Divider variant="middle" />

      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        {props.data.options.map((option, id) => {
          return (
            <FormControlLabel
            className={classes.formControlLabel}
              value={option.display_name}
              control={<Radio />}
              label={option.display_name}
            />
          );
        })}
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
      </RadioGroup>
      <Grid className={classes.bottomBar}>
      <Button className={classes.button} onClick={()=>{console.log(value,"valuee")
         props.saveData(props.data,value)
    
    }} variant="contained" color="primary">
        Submit
      </Button>
    </Grid>


    </FormControl>
  );
}
export function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormLabel style={{ color: "white" }} component="legend">
        Where are you located at?
      </FormLabel>
      <TextField
        style={{ color: "white" }}
        className={classes.textField}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
    </form>
  );
}
function SimpleSelect(props) {
  const classes = useStyles();
  const [value, setState] = React.useState("");

  const handleChange = event => {
    setState(event.target.value);
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <FormLabel style={{ color: "white" }} component="legend">
          {props.data.title}
        </FormLabel>
      </Paper> 

      {/* <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel style={{ color: "white" }} id="demo-simple-select-label">
          Age
        </InputLabel>
        <Select
          style={{ color: "white" }}
          className={classes.select}

          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
        >
             {props.data.options.map((option, id) => {
          return (
          <MenuItem value={option.display_name}>{option.display_name}</MenuItem>)})}
        </Select>
      </FormControl> */}

      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel style={{ color: "white" }} id="demo-simple-select-filled-label">Select one</InputLabel>
        <Select
        className={classes.select}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={handleChange}
        >
  {props.data.options.map((option, id) => {
          return (
          <MenuItem value={option.display_name}>{option.display_name}</MenuItem>)})}
        </Select>
      </FormControl>

      <Grid className={classes.bottomBar}>
      <Button className={classes.button} onClick={()=>{console.log(value,"valuee")
         props.saveData(props.data,value)
    
    }} variant="contained" color="primary">
        Submit
      </Button>
    </Grid>
    </div>
  );
}
const mapStateToProps = ({ surveyReducer }) => {
    const { surveyResponses,loading } = surveyReducer;
    return {
        surveyResponses,
        loading
    };
  };
const SelectMenu = connect(mapStateToProps)(SimpleSelect)
const RadioButtonsGroup = connect(mapStateToProps)(RadioButtons)
export {RadioButtonsGroup, SelectMenu}