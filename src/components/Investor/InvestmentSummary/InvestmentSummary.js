import React from "react";
import SummaryCards from "../../General/SummaryCards/SummaryCards";
import AccountSummary from "./AccountSummary/AccountSummary";

const InvestmentSummary = props => (
  <React.Fragment>
    <div className="container investor-title">Your Investment Summary</div>
    <div className="investor-separator" />
    <div className="investment-summary">
      <div className="container">
        <div className="row summary-cards">
          <SummaryCards
            title="your profile"
            items={[
              { value: "Martin Wainstein", desc: "investor name" },
              { value: "5", desc: "invested projects" }
            ]}
            icon="beneficiary-icon"
          />
          <SummaryCards
            title="your investments"
            items={[
              { value: "$150'000", desc: "invested to date" },
              { value: "3.5 %", desc: "weighted roi" }
            ]}
            icon="handout-icon"
          />
          <SummaryCards
            title="your returns"
            items={[
              { value: "$10'052.4", desc: "all time returns" },
              { value: "2 (MWh)", desc: "recs received" }
            ]}
            icon="wallet-icon"
          />
          <SummaryCards
            title="energy you facilitate"
            items={[
              { value: "845 kWh", desc: "pro rata in projects" },
              { value: "10,150 MWh", desc: "all time" }
            ]}
            icon="solar-panel-icon"
          />
        </div>
        <AccountSummary />
      </div>
    </div>
  </React.Fragment>
);

export default InvestmentSummary;