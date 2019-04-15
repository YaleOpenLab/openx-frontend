import React, { Component } from "react";
import InvestedProjects from "./InvestedProjects/InvestedProjects";
import InvestmentSummary from "./InvestmentSummary/InvestmentSummary";
import "./Dashboard.scss";
import { connect } from "react-redux";
import { fetchInvestor } from "../../../../pages/Investor/store/actions";
import axios from "axios";

class Dashboard extends Component {
  state = {
    balance: 0
  };

  componentDidMount = () => {
    this.props.fetchInvestor();
  };

  componentDidUpdate = prevProps => {
    if (this.props.investor !== prevProps.investor) {
      axios
        .get(
          `https://api.openx.solar/user/balance/asset?username=${
            this.props.investor.U.Username
          }&pwhash=${this.props.investor.U.Pwhash}&asset=STABLEUSD`
        )
        .then(res => {
          const balance = res.data;
          if(typeof(balance) === "object") return;
          this.setState({
            balance: Number(balance)
          })
        });
    }
  };

  render() {
    const { investor } = this.props;

    return (
      <div className="investor-dashboard">
        {investor && investor.U && (
          <InvestmentSummary investor={investor} balance={this.state.balance} />
        )}
        {investor && investor.U && investor.InvestedSolarProjects && (
          <InvestedProjects projects={investor.InvestedSolarProjectsIndices} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  investor: state.investor.items,
  loading: state.investor.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchInvestor: () => dispatch(fetchInvestor())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
