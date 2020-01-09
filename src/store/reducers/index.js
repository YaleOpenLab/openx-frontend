import { combineReducers } from "redux";
import projectsReducer from "../../components/Explore/Projects/store/reducers";
import projectReducer from "../../components/Explore/SingleProject/store/reducers";
import userAccountReducer from "../../components/Profile/store/reducers";
import errorReducer from "./errors";
import verifyAccountReducer
	from "../../components/Profile/Settings/Pages/Profiles/pages/VerifyProfilePage/store/reducers";
import fundsAccountReducer from "../../components/Profile/Settings/Pages/ManageFunds/pages/store/reducers";
import progressReducer from "./progress";

const rootReducer = combineReducers({
  projects: projectsReducer,
  project: projectReducer,
  error: errorReducer,
	verify: verifyAccountReducer,
	funds: fundsAccountReducer,
  profile: userAccountReducer,
	progress: progressReducer,
});

export default rootReducer;
