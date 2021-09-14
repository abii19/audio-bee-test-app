import {
  SHOW_SUCCESS_TOASTER,
  SHOW_ERROR_TOASTER,
  HIDE_TOASTER,
} from "./actionTypes";

export const showSuccessToaster = (message) => {
  return {
    type: SHOW_SUCCESS_TOASTER,
    payload: message,
  };
};
export const showErrorToaster = (message) => {
  return {
    type: SHOW_ERROR_TOASTER,
    payload: message,
  };
};
export const hideToaster = () => {
  return {
    type: HIDE_TOASTER,
  };
};
