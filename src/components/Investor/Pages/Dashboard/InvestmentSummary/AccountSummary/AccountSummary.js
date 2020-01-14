import React from 'react';
import DivBox from '../../../../../General/DivBox/DivBox';
import './AccountSummary.scss';
import ROUTES from "../../../../../../routes/routes";

const AccountSummary = ({investor, usdbalance}) => (
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
								text: investor.U.StellarWallet.PublicKey,
								link: {
									url: 'https://testnet.steexp.com/account/' + investor.U.StellarWallet.PublicKey,
									target: 'blank'
								},
								label: 'primary address',
								leftIcon: 'wallet-icon',
								type: 'primary'
							},
							{
								text: "$" + usdbalance,
								label: 'ACCOUNT BALANCE',
								actionLabel: 'Account History >',
								actionLabelLink: {
									url: 'https://testnet.steexp.com/account/' + investor.U.StellarWallet.PublicKey + "#transactions",
									target: 'blank'
								},
							},
							{
								text: "$" + usdbalance,
								label: 'AVAILABLE FUNDS',
								actionLabel: 'Deposit Funds >',
								actionLabelLink: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS_PAGES.LOAD_FUNDS
									.replace(':username', investor.U.Username).replace(':userType', 'investor'),
								secondaryLink: {
									url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS_PAGES.WITHDRAW_FUNDS
										.replace(':username', investor.U.Username).replace(':userType', 'investor'),
									label: 'Withdraw Funds >'
								},
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
								label: 'Secondary Address',
								link: {
									url: 'https://testnet.steexp.com/account/' + investor.U.SecondaryWallet.PublicKey,
									target: 'blank'
								},
								leftIcon: 'wallet-icon',
								type: 'primary'
							},
							{
								text: "$0",
								label: 'ACCOUNT BALANCE',
								actionLabel: 'Account History >',
								actionLabelLink: {
									url: 'https://testnet.steexp.com/account/' + investor.U.SecondaryWallet.PublicKey + "#transactions",
									target: 'blank'
								},
							},
							{
								text: "$0",
								label: 'AVAILABLE FUNDS',
								actionLabel: 'Deposit Funds >',
								actionLabelLink: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS_PAGES.LOAD_FUNDS
									.replace(':username', investor.U.Username).replace(':userType', 'investor'),
								secondaryLink: {
									url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS_PAGES.WITHDRAW_FUNDS
										.replace(':username', investor.U.Username).replace(':userType', 'investor'),
									label: 'Withdraw Funds >'
								},
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
				<span className="sum-label">ballance</span>
				{/*todo: integrate*/}
				<span className="sum-price">$ {usdbalance}</span>
			</div>
		</div>
	</React.Fragment>
);

export default AccountSummary;
