import React, { Component } from "react";
import InvestedProjects from "./InvestedProjects/InvestedProjects";
import InvestmentSummary from "./InvestmentSummary/InvestmentSummary";
import "./Dashboard.scss";
import { connect } from "react-redux";
import { fetchInvestor } from "../../../../pages/Investor/store/actions";
import axios from 'axios';

class Dashboard extends Component {
  componentDidMount = () => {
    this.props.fetchInvestor();
  };

  componentDidUpdate = prevProps => {
    console.log(this.props.investor);
    if(this.props.investor.items && this.props.investor.items.U){
      this.setState({
        investor: this.props.investor
      });
      axios.get(`https://api.openx.solar/user/balance/asset?username=${this.props.investor.items.U.Username}&pwhash=${this.props.investor.items.U.Pwhash}&asset=STABLEUSD`)
      .then(res => {
        const balance = res.data;
        this.setState({
          balance: Number(balance)
        })
      });
    }
  };

  render() {
    const { investor } = this.props;
    // const { balance } = this.state || 0 ;
    const balance = "998000"
    return (
      <div className="investor-dashboard">
        {investor && investor.U && <InvestmentSummary investor={investor} balance={balance} />}
        {investor && investor.U && investor.InvestedSolarProjects && (
          <InvestedProjects projects={investor.InvestedSolarProjectsIndices} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  investor: state.investor.items
});

const mapDispatchToProps = dispatch => ({
  fetchInvestor: () => dispatch(fetchInvestor())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
