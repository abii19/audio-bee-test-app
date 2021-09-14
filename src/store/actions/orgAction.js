import {
  GET_ORG_DETAILS,
  SET_GET_ORG_DETAILS_ACTIVE,
  SET_GET_ORG_DETAILS_INACTIVE,
} from "./actionTypes";

import { showErrorToaster } from "./toasterAction";
const getOrgDetailsSuccess = (data) => {
  return {
    type: GET_ORG_DETAILS,
    payload: data,
  };
};

export const setGetOrgDetailsActive = () => {
  return {
    type: SET_GET_ORG_DETAILS_ACTIVE,
  };
};
export const setGetOrgDetailsInActive = () => {
  return {
    type: SET_GET_ORG_DETAILS_INACTIVE,
  };
};

export const getOrgDetails = (url) => {
  return async (dispatch) => {
    await fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getOrgDetailsSuccess(data));
      })
      .catch((error) => {
        dispatch(showErrorToaster(error.response.message));
      });
  };
};
