import { combineEpics } from "redux-observable";
import { fetchLoginEpic } from "../../components/AuthPageComponents/LoginComponent/store/epics";
import fetchProjectsEpic from "../../components/Explore/Projects/store/epics";
import fetchProjectEpic from "../../components/Explore/SingleProject/store/epics";

export const rootEpic = combineEpics(fetchLoginEpic, fetchProjectsEpic, fetchProjectEpic);
