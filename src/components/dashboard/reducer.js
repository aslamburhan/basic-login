import {
  FETCH_USER_INFO_FAILURE,
  FETCH_USER_INFO,
  FETCH_USER_INFO_SUCCESS
} from "./constants";
import { assign } from "lodash";

const initialState = {
  loggedIn: false,
  userInfo: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_FAILURE:
      return state;
    case FETCH_USER_INFO:
      return assign({}, state, { loading: true });
    case FETCH_USER_INFO_SUCCESS:
      return assign({}, state, { userInfo: action.data, loading: false });
    default:
      return state;
  }
};
