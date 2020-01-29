import React, {useEffect, useState} from "react";
import {Highlight, StyledHeader, StyledText} from "../../../styles";
import styled from "styled-components";
import ROUTES from "../../../../../../../routes/routes";
import ActionButtons from "../../../../ActionButtons";
import history from "../../../../../../../helpers/history";
import {progressAction} from "../../../../../../../store/actions/actions";
import {connect} from "react-redux";
import CustomStepsForm from "./components/CustomStepsForm/CustomStepsForm";
import Transfer from "./pages/Transfer";
import Sweep from "./pages/Sweep";
import P2P from "./pages/P2P";
import Seed from "./pages/Seed";

const StyledFundsContainer = styled.div`
    margin: 40px 0;
`;

const content = [
    {url: 'transferFunds', title: 'transfer funds', content: <Transfer />},
    {url: 'sweepFunds', title: 'sweep funds', content: <Sweep />},
    {url: 'p2pAssets', title: 'p2p assets', content: <P2P />},
    {url: 'seedRecovery', title: 'seed recovery', content: <Seed /> },
];

const MainFundsPage = ({account, setProgress}) => {
    const [currentPage, setCurrentPage] = useState('transferFunds');
    useEffect(() => {
        // Http.getUserRoles({username: account.Username});
    });

	const goNext = () => {
		if(account.ProfileProgress < 90) {
			setProgress(account.Username, 90);
		}
		history.push(ROUTES.PROFILE_PAGES.SETTINGS_PAGES.LEGAL);
	};

	const changePage = (url) => {
        setCurrentPage(url);
    };

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
                        <CustomStepsForm
                            active={currentPage}
                            setActive={changePage}
                            content={content}
                        />
					</StyledFundsContainer>
					<ActionButtons
						cancelButton={{
							url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES,
							label: 'back'
						}}
						confirmButton={{
							action: goNext,
							label: 'next'
						}}
					/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	account: state.profile.user.items,
});

const mapDispatchToProps = dispatch => ({
	setProgress: (username, progress) => dispatch(progressAction(username, progress)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainFundsPage);
