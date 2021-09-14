import {
  GET_REPO_TAGS,
  GET_REPO_LANGUAGES,
  SET_GET_REPO_DETAILS_ACTIVE,
  SET_GET_REPO_DETAILS_INACTIVE,
} from "./actionTypes";
import { showErrorToaster } from "./toasterAction";
const getRepoTagsSuccess = (data) => {
  return {
    type: GET_REPO_TAGS,
    payload: data,
  };
};

const getRepoLanguagesSuccess = (data) => {
  return {
    type: GET_REPO_LANGUAGES,
    payload: data,
  };
};

export const setGetRepoDetailsActive = () => {
  return {
    type: SET_GET_REPO_DETAILS_ACTIVE,
  };
};
export const setGetRepoDetailsInActive = () => {
  return {
    type: SET_GET_REPO_DETAILS_INACTIVE,
  };
};

export const getRepoTags = (tags_url) => {
  return async (dispatch) => {
    await fetch(`${tags_url}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getRepoTagsSuccess(data));
      })
      .catch((error) => {
        dispatch(showErrorToaster(error.response.message));
      });
  };
};

export const getRepoLanguages = (languages_url) => {
  return async (dispatch) => {
    await fetch(`${languages_url}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getRepoLanguagesSuccess(data));
      })
      .catch((error) => {
        dispatch(showErrorToaster(error.response.message));
      });
  };
};
