import React, {useEffect, useState} from 'react';
import {
	StyledHeader,
	Highlight,
	StyledText,
	StyledSeparator,
	StyledFieldSection
} from "../../../../styles";
import DivBox from "../../../../../../../General/DivBox/DivBox";
import {registerAction} from "../../../../../../store/actions";
import {connect} from "react-redux";
import CustomLink from "../../../../../../../UI/CustomLink/CustomLink";
import ROUTES from "../../../../../../../../routes/routes";
import TutorialStep from "../../../../../TutorialStep/TutorialStep";
import {fetchVerifyAccount} from "../store/actions";
import {withRouter} from "react-router-dom";

const Verify = withRouter(({handleContinue, fetchVerifyUser, account, history, match}) => {
	useEffect(() => {
		fetchVerifyUser(match.params.userType, match.params.username)
	}, []);

	return (
		<div className="Register">
			<div className="row">
				<div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
					<StyledFieldSection>
						<DivBox
							type="full"
							text={account.Name}
							label="individual"
							leftIcon="profile-user-icon"
							rightIcon="profile-edit-icon"
						/>
						<DivBox
							text={account.StellarWallet && account.StellarWallet.PublicKey}
							label="public key"
							leftIcon="profile-badge-icon"
						/>
					</StyledFieldSection>
					<StyledFieldSection style={{margin: '15px'}}>
						<CustomLink weight="normal" label={"Verify a different entity? Go Back >"}
												url={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE}/>
					</StyledFieldSection>
					<StyledSeparator/>
					<StyledHeader>Verify Your Profile </StyledHeader>
					<StyledText>
						<Highlight>Why? </Highlight>
						Profile verification is needed for regulatory compliance whenever managing funds that are tied to
						investments. The standard procedure is called KYC, which stands for ‘Know Your Customer.’ In this case, KYC
						is needed to acquire stable digital funds (called USDx) for use in your account.
					</StyledText>
					<StyledSeparator noBorder={true} size={5}/>
					<TutorialStep
						step={"STEP 1"}
						description={<span><Highlight>Access Anchor USD and Create an Account </Highlight>
						Description of the step that the user needs to take. Lorem ipsum
						needed for regulatory compliance whenever managing funds that are tied to investments. The standard
						procedure is called KYC, which stands for ‘Know Your Customer.’ In this case, KYC is needed to acquire
						stable digital funds (called USDx) for use in your account.</span>}
						link={{label: 'LINK HERE >', url: '#'}}
						image={{description: 'You should see a screen like this: '}}
					/>
					<TutorialStep
						step={"STEP 2"}
						description={<span><Highlight>Submit your personal details for your Anchor USD account. </Highlight>
						Description of the step that the user needs to take. Lorem ipsum needed for regulatory compliance whenever
						managing funds that are tied to investments. The standard procedure is called KYC, which stands for ‘Know Your Customer.’
						In this case, KYC is needed to acquire stable digital funds (called USDx) for use in your account.  </span>}
						image={{description: 'You should see a screen like this: '}}
					/>

					<TutorialStep
						step={"STEP 3"}
						description={<span><Highlight>You will receive a confirmation email. Now you can buy USDx </Highlight>
						Description of the step that the user needs to take. Lorem ipsum needed for regulatory compliance whenever
						managing funds that are tied to investments. The standard procedure is called KYC, which stands for ‘Know Your Customer.’
						In this case, KYC is needed to acquire stable digital funds (called USDx) for use in your account. </span>}
						image={{description: 'You should see a screen like this: '}}
					/>
					<StyledSeparator size={5}/>
					<StyledText>
						<Highlight>Profile Verification Status: </Highlight>
						Not Submitted
					</StyledText>
					<StyledText>
						Once your profile is verified and activated by the KYC provider, you can go to the next step to purchase and
						load digital funds. If you have submitted the form and are waiting confirmation, check your email inbox for
						messages from the KYC provider.
					</StyledText>
					<StyledSeparator size={3}/>
				</div>
			</div>
		</div>
	)
});

const mapStateToProps = state => ({
	account: state.verify.user
});

const mapDispatchToProps = dispatch => ({
	registerEntity: (entity, info) => dispatch(registerAction(entity, info)),
	fetchVerifyUser: (entity, account) => dispatch(fetchVerifyAccount(entity, account))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Verify);
