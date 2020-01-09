import React, {useEffect} from "react";
import DivBox from "../../../../../../../General/DivBox/DivBox";
import {Highlight, StyledHeader, StyledText, StyledSeparator, StyledFlexContainer} from "../../../../styles";
import styled from "styled-components";
import ToggleButton from "../../../../../../../General/ToggleButton";
import SeeMore from "../../../../../../../UI/SeeMore/SeeMore";
import history from "../../../../../../../../helpers/history";
import ROUTES from "../../../../../../../../routes/routes";
import {Variables} from "../../../../../../../../styles/variables";
import {connect} from "react-redux";
import {withSnackbar} from "notistack";
import {validateAction} from "../../../../../../store/actions";

const StyledProfileSection = styled.div`
	display: flex;
	width: 100%;
`;

const StyledProfileActionsSection = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 0 25px;
`;

const StyledFundsInfo = styled.div`
	display: flex;
  flex-direction: column;
`;

const StyledCustomLink = styled.a`
	font-size: 10px;
	font-weight: normal;	
	color: ${Variables.Colors.thirdColorLightest};
	cursor: pointer;
`;

const StyledAccountBalance = styled.div`
	display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Balance = styled.div`
	font-size: 24px;
	color: ${Variables.Colors.secondaryColor}
`;

const Label = styled.div`
	font-size: 10px;
	text-transform: uppercase;
	color: ${Variables.Colors.secondaryColorLight}
`;

const RegisteredProfiles = ({investor, recipient}) => {
	const handleVerify = (username, userType) => {
		history.push(ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES_PAGES.VERIFY.replace(':username', username).replace(':userType', userType))
	};

	return (
		<React.Fragment>
			<StyledHeader>Your Registered Profiles & Accounts</StyledHeader>
			<StyledText>
				<Highlight>Why? </Highlight>
				While you are registered in the platform as an individual, you may want to operate on behalf of a
				company or organisation for specific solar projects.
			</StyledText>
			<StyledSeparator size={4} />
			{investor && <StyledFlexContainer>
				<StyledProfileSection>
					<DivBox
						type="full"
						text={investor.Name}
						label="INVESTOR PROFILE"
						leftIcon="investor-icon"
						rightIcon="profile-edit-icon"
					/>
					<DivBox
						text={investor.StellarWallet && investor.StellarWallet.PublicKey}
						label="wallet address"
						leftIcon="wallet-icon"
					/>
				</StyledProfileSection>
				<StyledProfileActionsSection>
					<ToggleButton
						label={<SeeMore infoContent={<div style={{fontSize: 12}}>Is your account verified? </div>}>Verified?</SeeMore>}
						checked={investor.Kyc}
						offLabel={'Start >'}
						handleChange={() => handleVerify(recipient.Username, 'investor')}
					/>
					<StyledFundsInfo>
						<StyledAccountBalance>
							<Balance>$0</Balance>
							<Label>ACCOUNT BALANCE</Label>
						</StyledAccountBalance>
						<StyledCustomLink href={void(0)} >Load Funds ></StyledCustomLink>
					</StyledFundsInfo>
				</StyledProfileActionsSection>
			</StyledFlexContainer>}
			{investor && <StyledSeparator size={4} />}
			{recipient && <StyledFlexContainer>
				<StyledProfileSection>
					<DivBox
						type="full"
						text={recipient.Name}
						label="RECEIVER PROFILE"
						leftIcon="beneficiary-icon"
						rightIcon="profile-edit-icon"
					/>
					<DivBox
						text={recipient.StellarWallet && recipient.StellarWallet.PublicKey}
						label="wallet address"
						leftIcon="wallet-icon"
					/>
				</StyledProfileSection>
				<StyledProfileActionsSection>
					<ToggleButton
						label={<SeeMore infoContent={<div style={{fontSize: 12}}>Is your account verified? </div>}>Verified?</SeeMore>}
						checked={recipient.Kyc}
						offLabel={'Start >'}
						handleChange={() => handleVerify(recipient.Username, 'recipient')}
					/>
					<StyledFundsInfo>
						<StyledCustomLink href={void(0)} >Load Funds ></StyledCustomLink>
						<StyledCustomLink href={void(0)} >Withdraw Funds ></StyledCustomLink>
					</StyledFundsInfo>
				</StyledProfileActionsSection>
			</StyledFlexContainer>}
			{recipient && <StyledSeparator size={4} />}
		</React.Fragment>
	)
};

const mapStateToProps = state => ({
	investor: state.profile.investor.items.U,
	recipient: state.profile.recipient.items.U,
});

export default connect(
	mapStateToProps,
	null
)(withSnackbar(RegisteredProfiles));
