import { combineEpics } from "redux-observable";
import fetchProjectsEpic from "../../components/Explore/Projects/store/epics";
import { fetchLoginEpic } from "../../components/AuthPageComponents/LoginComponent/store/epics";

export const rootEpic = combineEpics(fetchProjectsEpic, fetchLoginEpic);
