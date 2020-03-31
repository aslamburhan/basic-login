import {
  FETCH_SURVEY_INFO_FAILURE,
  FETCH_SURVEY_INFO,
  FETCH_SURVEY_INFO_SUCCESS
} from "./constants";
import { assign } from "lodash";

const initialState = {
  surveyResponses: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SURVEY_INFO_FAILURE:
      return state;
    case FETCH_SURVEY_INFO:
      return assign({}, state, { loading: true });
    case FETCH_SURVEY_INFO_SUCCESS:
      const {surveyResponses} = state
      // return assign({}, state, { surveyResponses: {...surveyResponses ,action.data}, loading: false });
     return {...state,surveyResponses:{...surveyResponses,[action.data.id]:action.data}}
    default:
      return state;
  }
};
