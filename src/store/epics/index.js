import { combineEpics } from "redux-observable";
import fetchProjectsEpic from "../../components/Explore/Projects/store/epics";
import fetchProjectEpic from "../../components/Explore/SingleProject/store/epics";
import fetchInvestorEpic from "../../pages/Investor/store/epics";
import fetchReceiverEpic from "../../pages/Receiver/store/epics";
import {
  fetchUserAccountEpic,
  updateUserAccountEpic
} from "../../components/Profile/store/epics";

export const rootEpic = combineEpics(
  fetchInvestorEpic,
  fetchProjectsEpic,
  fetchProjectEpic,
  fetchReceiverEpic,
  fetchUserAccountEpic,
  updateUserAccountEpic
);
