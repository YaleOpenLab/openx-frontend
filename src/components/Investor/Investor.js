import React, { Component } from "react";

import "./Investor.scss";
import InvestmentSummary from "./InvestmentSummary/InvestmentSummary";

class InvestorComponent extends Component {
  render() {
    return (
      <div className="InvestorComponent">
        <InvestmentSummary />
        <div className="invested-projects" />
      </div>
    );
  }
}

export default InvestorComponent;
