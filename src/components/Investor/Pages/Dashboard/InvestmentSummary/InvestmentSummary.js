import React from 'react';
import SummaryCards from '../../../../General/SummaryCards/SummaryCards';
import AccountSummary from './AccountSummary/AccountSummary';

const InvestmentSummary = ({investor}) => {
  const projects = investor.ReceivedSolarProjects ? investor.ReceivedSolarProjects.length : 0;
  return (
    <React.Fragment>
      <div className="container investor-title">Your Investment Summary</div>
      <div className="investor-separator"/>
      <div className="investment-summary">
        <div className="container">
          <div className="row summary-cards">
            <div className="col-sm-6 col-lg-3 ">
              <SummaryCards
                title="your profile"
                items={[
                  {value: investor.U.Name, desc: 'investor name'},
                  {value: projects, desc: 'invested projects'}
                ]}
                icon="beneficiary-icon"
              />
            </div>
            <div className="col-sm-6 col-lg-3 ">
              <SummaryCards
                title="your investments"
                items={[
                  {value: `$${investor.AmountInvested}`, desc: 'invested to date'},
                  {value: investor.WeightedROI || '0%', desc: 'weighted roi'}
                ]}
                icon="handout-icon"
              />
            </div>
            <div className="col-sm-6 col-lg-3 ">
              <SummaryCards
                title="your returns"
                items={[
                  {value: `$${investor.AllTimeReturns || 0}`, desc: 'all time returns'},
                  {value: `${investor.ReceivedRECs || 0} (MWh)`, desc: 'recs received'}
                ]}
                icon="wallet-icon"
              />
            </div>
            <div className="col-sm-6 col-lg-3 ">
              {/*todo: integrate*/}
              <SummaryCards
                title="energy you facilitate"
                items={[
                  {value: `${investor.Prorata || 0} KWh`, desc: 'pro rata in projects'},
                  {value: '10,150 MWh', desc: 'all time'}
                ]}
                icon="solar-panel-icon"
              />
            </div>
          </div>
          <AccountSummary investor={investor} />
        </div>
      </div>
    </React.Fragment>
  )
};

export default InvestmentSummary;
