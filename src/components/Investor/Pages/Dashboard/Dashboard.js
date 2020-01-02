import React, { Component } from "react";
import InvestedProjects from "./InvestedProjects/InvestedProjects";
import InvestmentSummary from "./InvestmentSummary/InvestmentSummary";
import "./Dashboard.scss";
import { connect } from "react-redux";
import { fetchInvestor } from "../../../../pages/Investor/store/actions";
import {validateAction} from "../../../Profile/store/actions";

class Dashboard extends Component {
  state = {
    balance: 0
  };

  componentDidMount = () => {
    this.props.fetchInvestor("investor", "morsmetus");
  };

  render() {
    const { investor } = this.props;
    console.log(investor)

		return (
			<div className="investor-dashboard">
				{investor && investor.U && (
					<InvestmentSummary investor={investor} balance={this.state.balance} />
				)}
				{investor && investor.U && investor.InvestedSolarProjects && (
					<InvestedProjects projects={investor.InvestedSolarProjectsIndices} investor={investor} />
				)}
			</div>
		);
  }
}

const mapStateToProps = state => ({
  investor: state.userProfile.investor.items,
  loading: state.userProfile.investor.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchInvestor: (entity, username) => dispatch(validateAction(entity, username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
