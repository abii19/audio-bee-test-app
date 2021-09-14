import { url } from "../../components/api/api";
import {
  FETCH_USERS,
  GET_USER,
  GET_USER_REPOS,
  GET_USER_ORGS,
  CHANGE_GET_USER_LOADING_STATE,
} from "./actionTypes";
import { showErrorToaster } from "./toasterAction";
const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS,
    payload: data,
  };
};
const getUserSuccess = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};
const getUserReposSuccess = (data) => {
  return {
    type: GET_USER_REPOS,
    payload: data,
  };
};
const getUserOrgsSuccess = (data) => {
  return {
    type: GET_USER_ORGS,
    payload: data,
  };
};

const changeGetUserLoadingState = (data) => {
  return {
    type: CHANGE_GET_USER_LOADING_STATE,
    payload: data,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    await fetch(`${url}/users`)
      .then((response) => response.json())
      .then((data) => {
        // Timeout used to show the loading state for some seconds
        setTimeout(() => {
          dispatch(fetchUsersSuccess(data));
        }, 3000);
      })
      .catch((error) => {
        dispatch(showErrorToaster(error.response.message));
      });
  };
};

export const getUser = (username) => {
  return async (dispatch) => {
    dispatch(changeGetUserLoadingState(username));
    localStorage.setItem("current_user", username);
    await fetch(`${url}/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        // Timeout used to show the loading state for some seconds
        setTimeout(() => {
          dispatch(getUserSuccess(data));
        }, 3000);
      })
      .catch((error) => {
        dispatch(showErrorToaster(error.response.message));
      });
  };
};

export const getUserRepos = (username) => {
  return async (dispatch) => {
    await fetch(`${url}/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        // Timeout used to show the loading state for some seconds
        setTimeout(() => {
          dispatch(getUserReposSuccess(data));
        }, 3000);
      })
      .catch((error) => {
        dispatch(showErrorToaster(error.response.message));
      });
  };
};

export const getUserOrgs = (username) => {
  return async (dispatch) => {
    await fetch(`${url}/users/${username}/orgs`)
      .then((response) => response.json())
      .then((data) => {
        // Timeout used to show the loading state for some seconds
        setTimeout(() => {
          dispatch(getUserOrgsSuccess(data));
        }, 3000);
      })
      .catch((error) => {
        dispatch(showErrorToaster(error.response.message));
      });
  };
};
