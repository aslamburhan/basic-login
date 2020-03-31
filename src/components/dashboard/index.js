import React, { useEffect, Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Redirect} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { fetchUserData } from "./actions";
import Button from "@material-ui/core/Button";
import SimpleCard from "../../common/card";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  inline: {
    display: "inline"
  }
}));

function Dashboard(props) {
  const classes = useStyles();
  const [loginStatus, setState] = useState(true);
  useEffect(() => {
    props.dispatch(fetchUserData());
  }, [props.loggedIn]);
  let loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn === "false" || loginStatus == false) {
    return <Redirect to="/" />;
  } else {
    const mapDataList = () => {
      return (
        props.userInfo.user &&
        props.userInfo.user.map((data, id) => {
          return (
            <Fragment>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="A" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={data.name}
                  secondary={
                    <React.Fragment>
                      <strong> Email:</strong> {data.email}
                      <br />
                      <strong>Age:</strong> {data.age} <br />
                      <strong>Gender:</strong> {data.gender} <br />
                      <strong>Phone No:</strong> {data.phoneNo} <br />
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          );
        })
      );
    };
    return (
        <Grid className={classes.root} container direction="row" spacing={1} justify="center" alignItems="center">
    {  [{title:"Daily Symptoms Log", frequency:"Daily",url:"surveys/generalsurvey"},{title:"Onboarding Profile Survey", frequency:"Onboarding",url:"surveys/onboardingsurvey"}].map((option)=>{
        return( <Grid >
        {/* <List className={classes.root}>{mapDataList()}</List> */}
      
     <SimpleCard url={option.url} title={option.title} frequency={option.frequency} status={"Not Filled"}/>
    



     </Grid>)})
     
  }
    <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setState(false);
            localStorage.setItem("token", "");
            localStorage.setItem("loggedIn", "false");
          }}
        >
          Logout
        </Button>
      </Grid>
    );
  }
}
const mapStateToProps = ({ dashboardreducer, loginReducer }) => {
  const { loggedIn } = loginReducer;
  const { userInfo, loading } = dashboardreducer;
  return {
    loggedIn,
    userInfo,
    loading
  };
};
export default connect(mapStateToProps)(Dashboard);
