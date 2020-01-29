import React, {useState, useEffect} from "react";
import InvestedProjects from "./InvestedProjects/InvestedProjects";
import InvestmentSummary from "./InvestmentSummary/InvestmentSummary";
import "./Dashboard.scss";
import {connect} from "react-redux";
import {validateAction} from "../../../Profile/store/actions";
import Storage from "../../../../services/Storage";
import NotAvailable from "../../../UI/NotAvailable/NotAvailable";

const Dashboard = ({investor, account, fetchInvestor, authorized, loading, projects}) => {
	const [balance, setBalance] = useState(0);

	useEffect(() => {
		fetchInvestor("investor", Storage.get("username"));
	}, []);

	if(!authorized) {
		return <NotAvailable text={"You have not registered as an investor"}/>
	}
	return (
		<div className="investor-dashboard">
				<InvestmentSummary investor={investor} balance={balance}/>
				{investor.InvestedSolarProjects && (
				<InvestedProjects projectIds={investor.InvestedSolarProjectsIndices} projects={projects} investor={investor}/>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
    projects: state.projects.items,
	account: state.profile.user.items,
	investor: state.profile.investor.items,
	loading: state.profile.investor.isLoading,
	authorized: state.profile.investor.authorized
});

const mapDispatchToProps = dispatch => ({
	fetchInvestor: (entity, username) => dispatch(validateAction(entity, username))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
