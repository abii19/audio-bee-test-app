import {
  SHOW_SUCCESS_TOASTER,
  SHOW_ERROR_TOASTER,
  HIDE_TOASTER,
} from "../actions/actionTypes";

const initialState = {
  type: "",
  message: "",
};

const toasterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SUCCESS_TOASTER:
      return {
        type: "Success",
        message: action.payload,
      };
    case SHOW_ERROR_TOASTER:
      return {
        type: "Error",
        message: action.payload,
      };
    case HIDE_TOASTER:
      return {
        type: "",
        message: "",
      };
    default:
      return state;
  }
};

export default toasterReducer;
