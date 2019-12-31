import React from "react";
import ROUTES from "../../../../../routes/routes";
import {Switch} from "react-router-dom";
import PrivateRoute from "../../../../PrivateRouterComponent/PrivateRouterComponent";
import MainEntityPage from "./pages/MainEntityPage/MainEntityPage";
import RegisterNewEntity from "./pages/RegisterNewEntity/RegisterNewEntity";

const Entity = () => {
	return (
		<Switch>
			<PrivateRoute
				path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE}
				exact
				component={MainEntityPage}
			/>
			<PrivateRoute
				path={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE_PAGES.NEW_ENTITY}
				exact
				component={RegisterNewEntity}
			/>
		</Switch>
	)
};

export default Entity;
