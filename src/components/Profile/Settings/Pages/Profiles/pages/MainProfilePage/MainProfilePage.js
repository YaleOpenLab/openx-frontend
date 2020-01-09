import React from "react";
import { connect } from "react-redux";
import RegisteredProfiles from "./RegisteredProfiles/RegisteredProfiles";
import RegisterNewProfile from "./RegisterNewProfile/RegisterNewProfile";
import ActionButtons from "../../../../ActionButtons";
import ROUTES from "../../../../../../../routes/routes";
import {StyledSeparator} from "../../../styles";

const Entity = ({investor, recipient}) => {
	return (
		<div className="ProfilePageContainer">
			<div className="row">
				<div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
					<RegisteredProfiles />
					<RegisterNewProfile investor={investor.authorized} recipient={recipient.authorized}/>
					<StyledSeparator size={4} />
					<ActionButtons
						cancelButton={{
							url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE,
							label: 'back'
						}}
						confirmButton={{
							url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS,
							label: 'next'
						}}
					/>
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = state => ({
	account: state.profile.user.items,
	investor: state.profile.investor,
	recipient: state.profile.recipient,
	loading: state.profile.user.isLoading
});

export default connect(
	mapStateToProps,
)(Entity);
