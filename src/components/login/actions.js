import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_REQUEST_FAILURE,
  LOGIN_USER_REQUEST_SUCCESS
} from "./constants";
import { loginApi } from "../api/index";
export const loginUser = data => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER_REQUEST
    });
    const response = loginApi(data);
    if (response.status == "success") {
      dispatch(loginUserSuccess(response.loggedInUser));
    } else {
      dispatch(loginUserFailure(response.error));
    }
  };
};
export const loginUserSuccess = data => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER_REQUEST_SUCCESS,
      data: data
    });
  };
};
export const loginUserFailure = error => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER_REQUEST_FAILURE,
      data: error
    });
  };
};
