import { combineReducers } from "redux";
import projectsReducer from "../../components/Explore/Projects/store/reducers";
import projectReducer from "../../components/Explore/SingleProject/store/reducers";
import userAccountReducer from "../../components/Profile/store/reducers";
import errorReducer from "./errors";
import verifyAccountReducer
	from "../../components/Profile/Settings/Pages/Profiles/pages/VerifyProfilePage/store/reducers";

const rootReducer = combineReducers({
  projects: projectsReducer,
  project: projectReducer,
  error: errorReducer,
	verify: verifyAccountReducer,
  profile: userAccountReducer,
});

export default rootReducer;
