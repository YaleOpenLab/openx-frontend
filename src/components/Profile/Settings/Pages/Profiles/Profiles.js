import React from "react";
import StepsForm from "../../../../General/StepsForm/StepsForm";
import Register from "./ProfilesTabs/Register/Register";
import { connect } from "react-redux";

const Entity = props => (
  <div className="ProfileUsers">
    <StepsForm
      tabs={[
        { name: "register", key: 1 },
        { name: "verify", key: 2 },
        { name: "wallet", key: 3 }
      ]}
    >
      <Register key={1} account={props.account} />
      <div key={2}>2</div>
      <div key={3}>3</div>
    </StepsForm>
  </div>
);

const mapStateToProps = state => ({
  account: state.userProfile.user.items,
  loading: state.userProfile.user.isLoading
});

export default connect(
  mapStateToProps,
)(Entity);
