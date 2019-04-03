import React from 'react';
import DivBox from '../../../../../General/DivBox/DivBox';
import './AccountSummary.scss';

const AccountSummary = ({investor}) => (
  <React.Fragment>
    <div className="investor-sub-title">Account Summary</div>
    <div className="investor-separator"/>
    <div className="account-summary-form">
      <div className="row">
        <div className="col-12 col-md-4">
          <DivBox
            type="full"
            text={investor.U.Name}
            label="investor"
            leftIcon="investor-icon"
            rightIcon="profile-edit-icon"
            col="12"
            actionLabel="edit profile & wallet setup >"
            iconSize="29px"
            classes={['investor-marginer big-box']}
          />
        </div>
        {/*todo: integrate*/}
        <div className="col-12 col-md-8">
          <DivBox
            type="long-open"
            list={[
              {
                text: investor.U.PublicKey,
                label: 'main wallet',
                leftIcon: 'wallet-icon',
                actionLabel: 'edit wallet name >',
                type: 'primary'
              },
              {
                text: '$350,018',
                label: 'ACCOUNT BALANCE',
                actionLabel: 'Transaction History >'
              },
              {
                text: '$330,552',
                label: 'AVAILABLE FUNDS',
                actionLabel: 'Load More Funds >',
                type: 'last'
              }
            ]}
            col="12"
            iconSize="20px"
            classes={['investor-marginer big-box']}
          />
          {/*todo: integrate*/}
          <DivBox
            type="long-open"
            list={[
              {
                text: investor.U.SecondaryWallet ? investor.U.SecondaryWallet.PublicKey : 'N/A',
                label: 'INFLOWS WALLET',
                leftIcon: 'wallet-icon',
                actionLabel: 'edit wallet name >',
                type: 'primary'
              },
              {
                text: '$350,018',
                label: 'ACCOUNT BALANCE',
                actionLabel: 'Transaction History >'
              },
              {
                text: '$330,552',
                label: 'AVAILABLE FUNDS',
                actionLabel: 'Load More Funds >',
                type: 'last'
              }
            ]}
            col="12"
            iconSize="20px"
            classes={['investor-marginer big-box']}
          />
        </div>
      </div>
      <div className="summary-sepparator"/>
      <div className="summary-sum">
        <span className="sum-label">net position</span>
        {/*todo: integrate*/}
        <span className="sum-price">$360,070</span>
      </div>
    </div>
  </React.Fragment>
);

export default AccountSummary;
