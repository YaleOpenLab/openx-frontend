import React, {Component} from "react";
import {Highlight, StyledHeader, StyledText} from "../styles";
import styled from "styled-components";

const StyledFundsContainer = styled.div`

`;

class Preferences extends Component {
	render() {
		return (
			<div className="ProfilePreferences">
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
					</div>
				</div>
			</div>
		);
	}
}

export default Preferences;
