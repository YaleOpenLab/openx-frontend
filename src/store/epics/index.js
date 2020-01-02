import { combineEpics } from "redux-observable";
import fetchProjectsEpic from "../../components/Explore/Projects/store/epics";
import fetchProjectEpic from "../../components/Explore/SingleProject/store/epics";
import fetchInvestorEpic from "../../pages/Investor/store/epics";
import fetchReceiverEpic from "../../pages/Receiver/store/epics";

import {
	registerActionEpic,
	updateAccountEpic, validateActionEpic
} from "../../components/Profile/store/epics";

export const rootEpic = (action$, store) =>
	combineEpics(
		fetchInvestorEpic,
		fetchProjectsEpic,
		fetchProjectEpic,
		fetchReceiverEpic,
		updateAccountEpic,
		registerActionEpic,
		validateActionEpic
	)(action$, store);
