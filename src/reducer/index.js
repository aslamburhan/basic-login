import { combineReducers } from "redux";
import loginReducer from "../components/login/reducer";
import dashboardReducer from "../components/dashboard/reducer";
const rootReducer = combineReducers({
  loginReducer: loginReducer,
  dashboardreducer: dashboardReducer
});

export default rootReducer;
