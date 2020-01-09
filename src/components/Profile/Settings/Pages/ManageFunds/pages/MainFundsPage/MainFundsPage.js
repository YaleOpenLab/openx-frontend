import React from "react";
import {Highlight, StyledHeader, StyledText} from "../../../styles";
import styled from "styled-components";
import {Switch} from "react-router-dom";
import PrivateRoute from "../../../../../../PrivateRouterComponent/PrivateRouterComponent";
import ROUTES from "../../../../../../../routes/routes";
import MainProfilePage from "../../../Profiles/pages/MainProfilePage/MainProfilePage";
import VerifyProfilePage from "../../../Profiles/pages/VerifyProfilePage/VerifyProfilePage";
import ActionButtons from "../../../../ActionButtons";

const StyledFundsContainer = styled.div`

`;

const MainFundsPage = () => {
	return (
		<div className="ProfilePageContainer">
			<div className="row">
				<div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
					<StyledHeader>Manage Funds and Accounts</StyledHeader>
					<StyledText>
						<Highlight>Define your user profiles and assign them accounts. </Highlight>
						‘User Profile’ refers to the type of user action by
						which you engage in the platform. This relates to whether you are acting as an Investor, Developer or
						Receiver, and which Entity is being used for each one.
					</StyledText>
					<StyledFundsContainer>

					</StyledFundsContainer>
					<ActionButtons
						cancelButton={{
							url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES,
							label: 'back'
						}}
						confirmButton={{
							url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.LEGAL,
							label: 'next'
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default MainFundsPage;
