import React, {useState, useEffect} from "react";
import InvestedProjects from "./InvestedProjects/InvestedProjects";
import InvestmentSummary from "./InvestmentSummary/InvestmentSummary";
import "./Dashboard.scss";
import {connect} from "react-redux";
import {validateAction} from "../../../Profile/store/actions";
import Storage from "../../../../services/Storage";
import NotAvailable from "../../../UI/NotAvailable/NotAvailable";

const Dashboard = ({investor, account, fetchInvestor, authorized, loading}) => {
	const [balance, setBalance] = useState(0);

	useEffect(() => {
		fetchInvestor("investor", Storage.get("username"));
	}, []);

	if(!authorized) {
		return <NotAvailable text={"You have not registered as an investor"}/>
	}
	console.log(investor, "investor");
	return (
		<div className="investor-dashboard">
				<InvestmentSummary investor={investor} balance={balance}/>
				{investor.InvestedSolarProjects && (
				<InvestedProjects projects={investor.InvestedSolarProjectsIndices} investor={investor}/>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
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
