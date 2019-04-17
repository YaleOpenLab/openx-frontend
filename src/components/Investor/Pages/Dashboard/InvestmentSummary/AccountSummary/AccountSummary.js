import React from 'react';
import DivBox from '../../../../../General/DivBox/DivBox';
import './AccountSummary.scss';

const AccountSummary = props => (
  <React.Fragment>
    <div className="investor-sub-title">Account Summary</div>
    <div className="investor-separator"/>
    <div className="account-summary-form">
      <div className="row">
        <div className="col-12 col-md-4">
          <DivBox
            type="full"
            text={props.investor.U.Name}
            label="investor"
            leftIcon="investor-icon"
            rightIcon="profile-edit-icon"
            col="12"
            actionLabel="edit profile & wallet setup >"
            link="/profile/settings/account"
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
                text: props.investor.U.PublicKey,
                link: 'https://testnet.steexp.com/account/' + props.investor.U.PublicKey,
                label: 'main wallet',
                leftIcon: 'wallet-icon',
                actionLabel: 'edit wallet name >',
                type: 'primary'
              },
              {
                text: "$" + props.usdbalance,
                label: 'ACCOUNT BALANCE',
                actionLabel: 'Transaction History >',
                actionLabelLink: 'https://testnet.steexp.com/account/' + props.investor.U.PublicKey + "#transactions",
              },
              {
                text: "$" + props.usdbalance,
                label: 'AVAILABLE FUNDS',
                actionLabel: 'Load More Funds >',
                actionLabelLink: '/development',
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
                text: props.investor.U.SecondaryWallet ? props.investor.U.SecondaryWallet.PublicKey : 'N/A',
                label: 'INFLOWS WALLET',
                link: 'https://testnet.steexp.com/account/' + props.investor.U.SecondaryWallet.PublicKey,
                leftIcon: 'wallet-icon',
                actionLabel: 'edit wallet name >',
                type: 'primary'
              },
              {
                text: "$0",
                label: 'ACCOUNT BALANCE',
                actionLabel: 'Transaction History >',
                actionLabelLink: 'https://testnet.steexp.com/account/' + props.investor.U.SecondaryWallet.PublicKey + "#transactions",
              },
              {
                text: "$0",
                label: 'AVAILABLE FUNDS',
                actionLabel: 'Load More Funds >',
                actionLabelLink: '/development',
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
        <span className="sum-price">$ {props.usdbalance}</span>
      </div>
    </div>
  </React.Fragment>
);

export default AccountSummary;
