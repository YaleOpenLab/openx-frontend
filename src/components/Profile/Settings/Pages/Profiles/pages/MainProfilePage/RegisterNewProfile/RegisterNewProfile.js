import React from "react";
import DivBox from "../../../../../../../General/DivBox/DivBox";
import {Highlight, StyledHeader, StyledFlexContainer} from "../../../../styles";
import ROUTES from "../../../../../../../../routes/routes";
import {registerAction} from "../../../../../../store/actions";
import {connect} from "react-redux";
import {withSnackbar} from "notistack";
import {withRouter} from "react-router-dom";
import {confirmAlert} from 'react-confirm-alert';
import ConfirmModal from "../../../../../../../UI/ConfirmModal/ConfirmModal"; // Import
import styled from 'styled-components';
import {Variables} from "../../../../../../../../styles/variables";

const StyledConfirmBody = styled.div`
		margin: 24px 0;
`;
const StyledConfirmBodySection = styled.div`
		font-size: 12px;
		margin: 8px 0;
		color: ${Variables.Colors.secondaryColor};
		text-align: center;
`;
const ConfirmBodyItem = styled.div`
		font-size: 18px;
		margin: 8px 0;
    text-align: center;
		color: ${Variables.Colors.secondaryColor};
`;

const RegisterNewProfile = withRouter(({investor, recipient, account, registerAccount, match, isInvestor, isRecipient}) => {

	const handleRegister = (type) => {
		confirmAlert({
			customUI: ({onClose}) => {
				return (
					<ConfirmModal
						onCancel={onClose}
						onConfirm={() => handleRegistration(type)}
						title={isInvestor || isRecipient ? 'PROFILE MISMATCH' : 'Register Profile'}
						body={
							<StyledConfirmBody>
								{(isInvestor || isRecipient) && <StyledConfirmBodySection>
									You previously registered as an:
									{isInvestor && <ConfirmBodyItem>Investor</ConfirmBodyItem>}
									{isRecipient && <ConfirmBodyItem>Recipient</ConfirmBodyItem>}
								</StyledConfirmBodySection>}
								<StyledConfirmBodySection>
									{isInvestor || isRecipient ? "And you are requesting to also have this profile:" :
									"You are requesting to have profile as"
									}
									{type && <ConfirmBodyItem>{type.charAt(0).toUpperCase() + type.slice(1)}</ConfirmBodyItem>}
								</StyledConfirmBodySection>
							</StyledConfirmBody>
						}
					/>
				);
			}
		})
	};

	const handleRegistration = type => {
		const registerValues = {
			username: account.Username,
			email: account.Email,
			name: account.Name,
			pwhash: account.Pwhash
		};
		if(type) {
			registerAccount(type, registerValues);
		}else {
		}
	};

	return (
		<React.Fragment>
			<StyledHeader>Register a New User Profile</StyledHeader>
			<StyledFlexContainer style={{flexDirection: 'row'}}>
				<DivBox
					type="full"
					text="DEVELOPER NAME"
					label="Developer"
					leftIcon="developer-icon"
					rightIcon="profile-add-icon"
					action={() => handleRegister('developer')}
				/>
				{!investor && <DivBox
					type="full"
					text="INVESTOR NAME"
					label="investor"
					leftIcon="investor-icon"
					rightIcon="profile-add-icon"
					action={() => handleRegister('investor')}
				/>}
				{!recipient && <DivBox
					type="full"
					text="RECEIVER NAME"
					label="receiver"
					leftIcon="beneficiary-icon"
					rightIcon="profile-add-icon"
					action={() => handleRegister('recipient')}
				/>}
			</StyledFlexContainer>
		</React.Fragment>
	)
});

const mapStateToProps = state => ({
	account: state.profile.user.items,
	isInvestor: state.profile.investor.authorized,
	isRecipient: state.profile.recipient.authorized,
	investor: state.profile.investor.items.U,
	recipient: state.profile.recipient.items.U,
	loading: state.profile.user.isLoading,
});

const mapDispatchToProps = dispatch => ({
	registerAccount: (entity, data) => dispatch(registerAction(entity, data)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withSnackbar(RegisterNewProfile));
