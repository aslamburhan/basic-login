import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RadioButtonsGroup,{BasicTextFields,SimpleSelect} from '../../common/form'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(6)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "white",
    backgroundColor: '#2c303a'
  },
}));

export default function Survey() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.paper}><RadioButtonsGroup/></Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.paper}><BasicTextFields/></Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.paper}><SimpleSelect/></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
      </Grid>
    </div>
  );
}
