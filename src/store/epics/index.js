import {combineEpics} from "redux-observable";
import fetchProjectsEpic from "../../components/Explore/Projects/store/epics";
import fetchProjectEpic from "../../components/Explore/SingleProject/store/epics";

import {
    getInvestorDashboard, getRecipientDashboard,
    registerActionEpic, registerEntityActionEpic,
    updateAccountEpic, validateActionEpic, validateEntityEpic, validateInvestorEpic, validateRecipientEpic
} from "../../components/Profile/store/epics";
import {fetchVerifyAccountEpic} from "../../components/Profile/Settings/Pages/Profiles/pages/VerifyProfilePage/store/epics";
import {fetchFundsAccountEpic} from "../../components/Profile/Settings/Pages/ManageFunds/pages/store/epics";
import {progressActionEpic} from "./progress";

export const rootEpic = (action$, store) =>
	combineEpics(
		fetchProjectsEpic,
		fetchProjectEpic,
		updateAccountEpic,
		registerActionEpic,
		registerEntityActionEpic,
		validateActionEpic,
		validateInvestorEpic,
		validateRecipientEpic,
        validateEntityEpic,
		fetchVerifyAccountEpic,
		fetchFundsAccountEpic,
		progressActionEpic,
        getInvestorDashboard,
        getRecipientDashboard,
	)(action$, store);
