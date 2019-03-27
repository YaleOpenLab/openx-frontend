import React from "react";
import DivBox from "../../../../../General/DivBox/DivBox";
import "./AccountSummary.scss";

const AccountSummary = props => (
  <React.Fragment>
    <div className="investor-sub-title">Account Summary</div>
    <div className="investor-separator" />
    <div className="account-summary-form">
      <div className="row">
        <div className="col-12 col-md-4">
          <DivBox
            type="full"
            text="martin wainstein"
            label="investor"
            leftIcon="investor-icon"
            rightIcon="profile-edit-icon"
            col="12"
            actionLabel="edit profile & wallet setup >"
            iconSize="29px"
            classes={["investor-marginer big-box"]}
          />
        </div>
        <div className="col-12 col-md-8">
          <DivBox
            type="long-open"
            list={[
              {
                text: "GCFONE23AB7Y6C5YZOMKUKGETP",
                label: "main wallet",
                leftIcon: "wallet-icon",
                actionLabel: "edit wallet name >",
                type: "primary"
              },
              {
                text: "$ 350’018.3",
                label: "ACCOUNT BALANCE",
                actionLabel: "Transaction History >"
              },
              {
                text: "$ 330’552.4",
                label: "AVAILABLE FUNDS",
                actionLabel: "Load More Funds >",
                type: "last"
              }
            ]}
            col="12"
            iconSize="16px"
            classes={["investor-marginer big-box"]}
          />
          <DivBox
            type="long-open"
            list={[
              {
                text: "GCFONE23AB7Y6C5YZOMKUKGETP",
                label: "INFLOWS WALLET",
                leftIcon: "wallet-icon",
                actionLabel: "edit wallet name >",
                type: "primary"
              },
              {
                text: "$ 350’018.3",
                label: "ACCOUNT BALANCE",
                actionLabel: "Transaction History >"
              },
              {
                text: "$ 330’552.4",
                label: "AVAILABLE FUNDS",
                actionLabel: "Load More Funds >",
                type: "last"
              }
            ]}
            col="12"
            iconSize="16px"
            classes={["investor-marginer big-box"]}
          />
        </div>
      </div>
      <div className="investor-separator" />
      <div className="summary-sum">
        <span className="sum-label">net position</span>
        <span className="sum-price">$ 360’070.7</span>
      </div>
    </div>
  </React.Fragment>
);

export default AccountSummary;
