import React, { useState, useEffect } from "react";
import InvestedProjects from "./InvestedProjects/InvestedProjects";
import InvestmentSummary from "./InvestmentSummary/InvestmentSummary";
import "./Dashboard.scss";
import { connect } from "react-redux";
import {
  dashboardAction,
  validateAction
} from "../../../Profile/store/actions";
import Storage from "../../../../services/Storage";
import NotAvailable from "../../../UI/NotAvailable/NotAvailable";

const Dashboard = ({
  investor,
  fetchInvestor,
  fetchInvestorDashboard,
  authorized,
  loading
}) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetchInvestor("investor", Storage.get("username"));
    fetchInvestorDashboard("investor", Storage.get("username"));
  }, []);

  if (!authorized) {
    return <NotAvailable text={"You have not registered as an investor"} />;
  }
  return (
    <div className="investor-dashboard">
      <InvestmentSummary investor={investor} balance={balance} />
      {investor["Your Invested Projects"] && (
        <InvestedProjects projects={investor["Your Invested Projects"]} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  investor: state.profile.investor.dashboard,
  loading: state.profile.investor.isLoading,
  authorized: state.profile.investor.authorized
});

const mapDispatchToProps = dispatch => ({
  fetchInvestorDashboard: (entity, username) =>
    dispatch(dashboardAction(entity, username)),
  fetchInvestor: (entity, username) =>
    dispatch(validateAction(entity, username))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
