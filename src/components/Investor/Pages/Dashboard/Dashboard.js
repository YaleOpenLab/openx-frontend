import React, { Component } from 'react';
import InvestedProjects from './InvestedProjects/InvestedProjects';
import InvestmentSummary from './InvestmentSummary/InvestmentSummary';
import './Dashboard.scss';
import connect from 'react-redux/es/connect/connect';
import { fetchInvestor } from '../../../../pages/Investor/store/actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investor: null
    };
  }

  componentDidMount = () => {
    this.props.fetchInvestor();
  };

  render() {
    const {investor} = this.props;
    return (
      <div className="investor-dashboard">
        {investor && (
          <InvestmentSummary investor={investor}/>

        )}
        {investor && investor.InvestedSolarProjects && (
          <InvestedProjects projects={investor.InvestedSolarProjects}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    investor: state.investor,
});

const mapDispatchToProps = dispatch => ({
  fetchInvestor: () => dispatch(fetchInvestor())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);