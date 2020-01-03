import React from "react";
import { connect } from "react-redux";
import {Switch} from "react-router-dom";
import PrivateRoute from "../../../../PrivateRouterComponent/PrivateRouterComponent";
import ROUTES from "../../../../../routes/routes";
import VerifyProfilePage from "./pages/VerifyProfilePage/VerifyProfilePage";
import MainProfilePage from "./pages/MainProfilePage/MainProfilePage";
import RegisterNewEntity from "./pages/RegisterNewProfile/RegisterNewEntity";

const Entity = props => (
	<Switch>
		<PrivateRoute
			path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES}
			exact
			component={MainProfilePage}
		/>
		<PrivateRoute
			path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES_PAGES.NEW_PROFILE}
			exact
			component={RegisterNewEntity}
		/>
		<PrivateRoute
			path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES_PAGES.VERIFY}
			component={VerifyProfilePage}
		/>
	</Switch>
);

const mapStateToProps = state => ({
  account: state.profile.user.items,
  loading: state.profile.user.isLoading
});

export default connect(
  mapStateToProps,
)(Entity);
