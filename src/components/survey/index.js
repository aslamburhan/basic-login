import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import {
  RadioButtonsGroup,
  BasicTextFields,
  SelectMenu
} from "../../common/form";
import { useParams } from "react-router-dom";

import { saveSurveyData,postSurveyData } from "./actions";

import { survey_json } from "./survey_data";
import { Typography } from "@material-ui/core";
import {
    normalize,
    schema
} from 'normalizr';
import { POST } from "../api";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1),
    marginTop: theme.spacing(6)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
    backgroundColor: "#2c303a",
    margin: theme.spacing(1)
  }
}));

function Survey(props) {
  const classes = useStyles();
  let { type } = useParams();

  function saveData(data, value) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    props.dispatch(
      saveSurveyData({
        id: data.id,
        question_survey: data.question_survey,
        str_value: value,
        entry_date: dateTime,
        survey_type: "General"
      })
    );
  }
  function postData(){
   var surveykeys = Object.keys(props.surveyResponses)
   var observations=surveykeys.map((value,id)=>{

       var tempObj =[]
      var temp2 =props.surveyResponses[value]
      return temp2
   })
   var data = {
    participant_id:3096,
    observations
   }
   console.log(JSON.stringify(data),"vvvvvvvvvvvvvvvvv")
POST("https://staging-appbakery.ainfo.io/api/surveys/1543/observations/",JSON.stringify(data))

  }
  postData()
  function FormRow() {
    return (
      <React.Fragment>
        {/* <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.paper}>
            <RadioButtonsGroup />
          </Paper>
        </Grid> */}
        {/* <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.paper}>
            <BasicTextFields />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className={classes.paper}>
            <SimpleSelect />
          </Paper>
        </Grid> */}
      </React.Fragment>
    );
  }
  var generalSurvey = survey_json.data.surveys.map((data, id) => {
    console.log(data.type, "typeeeeeeee");
    if (data.type == "General") {
      var radioQuestions = data.questions.map((questionData, id) => {
        if (questionData.display_type == "radio") {
          console.log(questionData.display_type, "typeeeeeeee");
          return (
            <Fragment>
              <Grid item xs={12} md={6} lg={4}>
                <Paper className={classes.paper}>
                  <RadioButtonsGroup saveData={saveData} data={questionData} />
                </Paper>
              </Grid>
            </Fragment>
          );
        } else if (questionData.display_type == "dropdown") {
          console.log(questionData.display_type, "typeeeeeeee");
          return (
            <Fragment>
              <Grid item xs={12} md={6} lg={4}>
                <Paper className={classes.paper}>
                  <SelectMenu saveData={saveData} data={questionData} />
                </Paper>
              </Grid>
            </Fragment>
          );
        } else {
          return "";
        }
      });
    }
    return radioQuestions;
  });

  var profileSurvey = survey_json.data.surveys.map((data, id) => {
    console.log(data.type, "typeeeeeeee");
    if (data.type == "Profile") {
      var radioQuestions = data.questions.map((questionData, id) => {
        if(questionData.display_type == "dropdown") {
            console.log(questionData.display_type, "typeeeeeeee");
            return (
              <Fragment>
                <Grid item xs={12} md={6} lg={4}>
                  <Paper className={classes.paper}>
                    <SelectMenu saveData={saveData} data={questionData} />
                  </Paper>
                </Grid>
              </Fragment>
            );
          } else if(questionData.display_type == "radio") {
            console.log(questionData.display_type, "typeeeeeeee");
            return (
              <Fragment>
                <Grid item xs={12} md={6} lg={4}>
                  <Paper className={classes.paper}>
                    <RadioButtonsGroup saveData={saveData} data={questionData} />
                  </Paper>
                </Grid>
              </Fragment>
            );
          }  else {
          return "";
        }
      });
    }
    return radioQuestions;
  });
  console.log(Object.keys(props.surveyResponses),"ssssssssssssssssss");

//   console.log(props, "ssssssssssssssssssssssssssssssssssssss");
  return (

    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" gutterBottom>
        {type == "generalsurvey" ? "General Survey":" Profile survey"}
        </Typography>
      </Paper>
      <Grid
        container
        direction="row"
        justify="flex-star"
        alignItems="flex-star"
        spacing={2}
      >
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}

        {type == "generalsurvey" ? generalSurvey : ""}

        {type == "onboardingsurvey" ? profileSurvey : ""}
      </Grid>
    </div>
  );
}
const mapStateToProps = ({ surveyReducer }) => {
  const { surveyResponses, loading } = surveyReducer;
  return {
    surveyResponses,
    loading
  };
};
export default connect(mapStateToProps)(Survey);
