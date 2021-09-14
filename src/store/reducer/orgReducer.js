import {
  GET_ORG_DETAILS,
  SET_GET_ORG_DETAILS_ACTIVE,
  SET_GET_ORG_DETAILS_INACTIVE,
} from "../actions/actionTypes";

const initialState = {
  isGetOrgDetailsActive: false,
  orgDetails: {},
};

const orgReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GET_ORG_DETAILS_ACTIVE:
      return {
        ...state,
        isGetOrgDetailsActive: true,
      };
    case SET_GET_ORG_DETAILS_INACTIVE:
      return {
        ...state,
        isGetOrgDetailsActive: false,
      };
    case GET_ORG_DETAILS:
      return {
        ...state,
        orgDetails: action.payload,
      };
    default:
      return state;
  }
};

export default orgReducer;
