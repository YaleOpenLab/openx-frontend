import {combineEpics} from "redux-observable";
import fetchProjectsEpic from "../../components/Explore/Projects/store/epics";
import fetchProjectEpic from "../../components/Explore/SingleProject/store/epics";

import {
	registerActionEpic,
	updateAccountEpic, validateActionEpic, validateInvestorEpic, validateRecipientEpic
} from "../../components/Profile/store/epics";
import {fetchVerifyAccountEpic} from "../../components/Profile/Settings/Pages/Profiles/pages/VerifyProfilePage/store/epics";

export const rootEpic = (action$, store) =>
	combineEpics(
		fetchProjectsEpic,
		fetchProjectEpic,
		updateAccountEpic,
		registerActionEpic,
		validateActionEpic,
		validateInvestorEpic,
		validateRecipientEpic,
		fetchVerifyAccountEpic,
	)(action$, store);
