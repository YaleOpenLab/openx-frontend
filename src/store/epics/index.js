import {combineEpics} from "redux-observable";
import fetchProjectsEpic from "../../components/Explore/Projects/store/epics";
import fetchProjectEpic from "../../components/Explore/SingleProject/store/epics";

import {
    getDeveloperDashboard,
    getInvestorDashboard, getRecipientDashboard,
    registerActionEpic, registerCompanyActionEpic, registerEntityActionEpic, setCompanyActionEpic,
    updateAccountEpic, validateActionEpic, validateEntityEpic, validateInvestorEpic, validateRecipientEpic
} from "../../components/Profile/store/epics";
import {
    fetchVerifyAccountEpic,
    fetchVerifyEntityAccountEpic
} from "../../components/Profile/Settings/Pages/Profiles/pages/VerifyProfilePage/store/epics";
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
        fetchVerifyEntityAccountEpic,
		fetchFundsAccountEpic,
		progressActionEpic,
        getInvestorDashboard,
        getRecipientDashboard,
        getDeveloperDashboard,
        setCompanyActionEpic,
        registerCompanyActionEpic
	)(action$, store);
