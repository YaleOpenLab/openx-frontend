import { combineReducers } from "redux";
import loginReducer from "../../components/AuthPageComponents/LoginComponent/store/reducers";
import projectsReducer from "../../components/Explore/Projects/store/reducers";
import projectReducer from "../../components/Explore/SingleProject/store/reducers";
import investorReducer from "../../pages/Investor/store/reducers";
import receiverReducer from "../../pages/Receiver/store/reducers";
import userAccountReducer from "../../components/Profile/store/reducers";

const rootReducer = combineReducers({
  auth: loginReducer,
  projects: projectsReducer,
  project: projectReducer,
  investor: investorReducer,
  receiver: receiverReducer,
  profile: combineReducers({
    account: userAccountReducer
  })
});
export default rootReducer;
