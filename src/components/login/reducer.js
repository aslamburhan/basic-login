import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_REQUEST_FAILURE,
  LOGIN_USER_REQUEST_SUCCESS
} from "./constants";
import { assign } from "lodash";

const initialState = {
  loggedIn: false,
  loading: false,
  errorLogginIn: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return assign({}, state, { errorLogginIn: "", loading: true });
    case LOGIN_USER_REQUEST_SUCCESS:
      localStorage.setItem("token", action.data);
      localStorage.setItem("loggedIn", true);
      return assign({}, state, { loggedIn: true, loading: false });
    case LOGIN_USER_REQUEST_FAILURE:
      return assign({}, state, {
        errorLogginIn: action.data,
        loggedIn: false,
        loading: false
      });
    default:
      return state;
  }
};
