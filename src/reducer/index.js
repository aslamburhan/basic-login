import { combineReducers } from "redux";
import loginReducer from "../components/login/reducer";
import dashboardReducer from "../components/dashboard/reducer";
import surveyReducer from "../components/survey/reducer"
const rootReducer = combineReducers({
  loginReducer: loginReducer,
  dashboardreducer: dashboardReducer,
  surveyReducer: surveyReducer
});


export default rootReducer;
