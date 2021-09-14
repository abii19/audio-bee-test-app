import {
  FETCH_USERS,
  GET_USER,
  GET_USER_REPOS,
  GET_USER_ORGS,
  CHANGE_GET_USER_LOADING_STATE,
} from "../actions/actionTypes";

const initialState = {
  loading: true,
  users: [],
  // User
  selectedUser: null,
  isUserSelected: false,
  getUserLoading: true,
  user: {},
  // Repos
  getRepoCounter: 0,
  getRepoLoading: true,
  repos: [],
  // Orgs
  getOrgsCounter: 0,
  getOrgsLoading: true,
  orgs: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case CHANGE_GET_USER_LOADING_STATE:
      return {
        ...state,
        selectedUser: action.payload,
        isUserSelected: true,
        getUserLoading: true,
        getRepoLoading: true,
        getOrgsLoading: true,
      };
    case GET_USER:
      return {
        ...state,
        getUserLoading: false,
        user: action.payload,
      };
    case GET_USER_REPOS:
      return {
        ...state,
        getRepoCounter: state.getRepoCounter + 1,
        getRepoLoading: false,
        repos: action.payload,
      };
    case GET_USER_ORGS:
      return {
        ...state,
        getOrgsCounter: state.getOrgsCounter + 1,
        getOrgsLoading: false,
        orgs: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
