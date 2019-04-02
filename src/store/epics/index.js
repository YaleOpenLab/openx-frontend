import { combineEpics } from "redux-observable";
import { fetchLoginEpic } from "../../components/AuthPageComponents/LoginComponent/store/epics";
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
  fetchLoginEpic,
  fetchProjectsEpic,
  fetchProjectEpic,
  fetchReceiverEpic,
  fetchUserAccountEpic,
  updateUserAccountEpic
);
