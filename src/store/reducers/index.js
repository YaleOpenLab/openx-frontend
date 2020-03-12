import { combineReducers } from "redux";
import projectsReducer from "../../components/Explore/Projects/store/reducers";
import projectReducer from "../../components/Explore/SingleProject/store/reducers";
import userAccountReducer from "../../components/Profile/store/reducers";
import errorReducer from "./errors";
import verifyAccountReducer from "../../components/Profile/Settings/Pages/Profiles/pages/VerifyProfilePage/store/reducers";
import fundsAccountReducer from "../../components/Profile/Settings/Pages/ManageFunds/pages/store/reducers";

const appReducer = combineReducers({
  projects: projectsReducer,
  project: projectReducer,
  error: errorReducer,
  verify: verifyAccountReducer,
  funds: fundsAccountReducer,
  profile: userAccountReducer
});
const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
