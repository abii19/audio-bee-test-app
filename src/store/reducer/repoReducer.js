import {
  GET_REPO_TAGS,
  GET_REPO_LANGUAGES,
  SET_GET_REPO_DETAILS_ACTIVE,
  SET_GET_REPO_DETAILS_INACTIVE,
} from "../actions/actionTypes";

const initialState = {
  isGetRepoDetailsActive: false,
  tags: [],
  languages: [],
};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GET_REPO_DETAILS_ACTIVE:
      return {
        ...state,
        isGetRepoDetailsActive: true,
      };
    case SET_GET_REPO_DETAILS_INACTIVE:
      return {
        ...state,
        isGetRepoDetailsActive: false,
      };
    case GET_REPO_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    case GET_REPO_LANGUAGES:
      return {
        ...state,
        languages: action.payload,
      };
    default:
      return state;
  }
};

export default repoReducer;
