import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import toasterReducer from "./toasterReducer";
import repoReducer from "./repoReducer";
import orgReducer from "./orgReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  repo: repoReducer,
  org: orgReducer,
  toaster: toasterReducer,
});

export default rootReducer;
