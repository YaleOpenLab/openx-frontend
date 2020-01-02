import { combineReducers } from "redux";
import projectsReducer from "../../components/Explore/Projects/store/reducers";
import projectReducer from "../../components/Explore/SingleProject/store/reducers";
import investorReducer from "../../pages/Investor/store/reducers";
import receiverReducer from "../../pages/Receiver/store/reducers";
import userAccountReducer from "../../components/Profile/store/reducers";
import errorReducer from "./errors";

const rootReducer = combineReducers({
  projects: projectsReducer,
  project: projectReducer,
  investor: investorReducer,
  receiver: receiverReducer,
  error: errorReducer,
  profile: combineReducers({
    account: userAccountReducer
  }),
	userProfile: userAccountReducer
});

export default rootReducer;
