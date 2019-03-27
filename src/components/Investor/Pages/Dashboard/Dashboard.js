import React from "react";
import InvestedProjects from "./InvestedProjects/InvestedProjects";
import InvestmentSummary from "./InvestmentSummary/InvestmentSummary";
import "./Dashboard.scss";

const Dashboard = props => (
  <div className="investor-dashboard">
    <InvestmentSummary />
    <InvestedProjects />
  </div>
);

export default Dashboard;
