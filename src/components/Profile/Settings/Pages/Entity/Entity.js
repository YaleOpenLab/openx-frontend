import React from "react";
import StepsForm from "../../../../General/StepsForm/StepsForm";
import Register from "./EntityTabs/Register/Register";
import { connect } from "react-redux";
import { fetchUserAccount } from "../../../store/actions";

const Entity = props => (
  <div className="ProfileEntity">
    <StepsForm
      tabs={[
        { name: "register", key: 1 },
        { name: "identification", key: 2 },
        { name: "keyGen", key: 3 },
      ]}
    >
      <Register key={1} {...props} />
      <div key={2}>2</div>
      <div key={3}>3</div>
    </StepsForm>
  </div>
);

const mapStateToProps = state => ({
  account: state.profile.account.items,
  loading: state.profile.account.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchUserAccount: payload => dispatch(fetchUserAccount(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entity);