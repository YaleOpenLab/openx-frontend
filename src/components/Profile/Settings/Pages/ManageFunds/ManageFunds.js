import React from "react";
import {Switch} from "react-router-dom";
import PrivateRoute from "../../../../PrivateRouterComponent/PrivateRouterComponent";
import ROUTES from "../../../../../routes/routes";
import MainFundsPage from "./pages/MainFundsPage/MainFundsPage";
import LoadFunds from "./pages/LoadFunds/LoadFunds";
import WithdrawFunds from "./pages/WithdrawFunds/WithdrawFunds";

const ManageFunds = () => (
	<Switch>
		<PrivateRoute
			path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS}
			exact
			component={MainFundsPage}
		/>
		<PrivateRoute
			path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS_PAGES.LOAD_FUNDS}
			component={LoadFunds}
		/>
		<PrivateRoute
			path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS_PAGES.WITHDRAW_FUNDS}
			component={WithdrawFunds}
		/>
	</Switch>
);

export default ManageFunds;
