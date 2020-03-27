import {
  FETCH_USER_INFO,
  FETCH_USER_INFO_SUCCESS
} from "./constants";
import { dashboardApi } from "../api";
export const fetchUserData = () => {
  return dispatch => {
    dispatch({
      type: FETCH_USER_INFO
    });
    const response = dashboardApi();
    dispatch(loginUserSuccess(response));
  };
};
export const loginUserSuccess = data => {
  return dispatch => {
    dispatch({
      type: FETCH_USER_INFO_SUCCESS,
      data: data
    });
  };
};
