import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { loginUser } from "./actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignIn(props) {
  const classes = useStyles();
  const [formData, setState] = useState({
    email: "",
    password: ""
  });
  const handleOnChange = (type, value) => {
    setState({
      ...formData,
      [type]: value
    });
  };
  const onLoginClick = () => {
    props.dispatch(loginUser(formData));
  };
  let loginStatus = localStorage.getItem("loggedIn");
  if (loginStatus == "true") {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <Container component="main" maxWidth="xs">
        <Snackbar
          open={props.errorLogginIn ? true : false}
          autoHideDuration={600}
        >
          <Alert severity="error">{props.errorLogginIn}</Alert>
        </Snackbar>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            error={formData.email ? false : true}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            helperText="Email Address can't be empty"
            onChange={event => {
              handleOnChange("email", event.target.value);
            }}
          />
          <TextField
            variant="outlined"
            error={formData.password ? false : true}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText="Password can't be empty"
            autoComplete="current-password"
            onChange={event => {
              handleOnChange("password", event.target.value);
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onLoginClick}
          >
            Sign In
          </Button>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = ({ loginReducer }) => {
  const { loggedIn, loading, errorLogginIn } = loginReducer;
  return {
    loggedIn,
    loading,
    errorLogginIn
  };
};

export default connect(mapStateToProps)(SignIn);
