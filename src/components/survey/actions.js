import {
    FETCH_SURVEY_INFO_FAILURE,
    FETCH_SURVEY_INFO,
    FETCH_SURVEY_INFO_SUCCESS
  } from "./constants";
import {POST} from "../api"
export const saveSurveyData = (data) => {
    return dispatch => {
      dispatch({
        type: FETCH_SURVEY_INFO_SUCCESS,
        data:data
      });
    };
  };

  export const postSurveyData = (data,url) => {
    return dispatch => {
    //   dispatch({
    //     type: FETCH_SURVEY_INFO_SUCCESS,
    //   });
        var response = POST(url,data)
        console.log(response,"respomnse")
    };
  };