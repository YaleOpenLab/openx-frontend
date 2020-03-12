import React, { useEffect, useState } from "react";
import {
  StyledHeader,
  Highlight,
  StyledText,
  StyledSeparator,
  StyledFieldSection,
  StyledFundsInfo,
  StyledAccountBalance,
  Balance,
  Label
} from "../../../styles";
import DivBox from "../../../../../../General/DivBox/DivBox";
import { dashboardAction, registerAction } from "../../../../../store/actions";
import { connect } from "react-redux";
import ROUTES from "../../../../../../../routes/routes";
import TutorialStep from "../../../../TutorialStep/TutorialStep";
import { fetchFundsAccount } from "../store/actions";
import { withRouter } from "react-router-dom";
import ActionButtons from "../../../../ActionButtons";
import { displayErrorAction } from "../../../../../../../store/actions/actions";
import ToggleButton from "../../../../../../General/ToggleButton";
import SeeMore from "../../../../../../UI/SeeMore/SeeMore";
import { Http } from "../../../../../../../services/Http";
import Storage from "../../../../../../../services/Storage";

const WithdrawFunds = withRouter(
  ({
    fetchFundsUser,
    history,
    match,
    profile,
    fetchInvestorDashboard,
    investorDashboard
  }) => {
    const [magicUrl, setMagicUrl] = useState("#");

    const handleVerify = () => {
      history.push(
        ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES_PAGES.VERIFY.replace(
          ":username",
          profile.Username
        ).replace(":userType", "user")
      );
    };

    useEffect(() => {
      fetchFundsUser(match.params.userType, match.params.username);
      fetchInvestorDashboard("investor", Storage.get("username"));
      Http.withdrawIntent().subscribe(result => {
        if (result.data) {
          setMagicUrl(result.data.url);
        }
      });
    }, []);

    return (
      <div className="ProfilePageContainer">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
            <StyledHeader>Withdraw Funds from Your Account</StyledHeader>
            <StyledText>
              <Highlight>Managing your digital funds. </Highlight>
              You can transfer funds from your opensolar accounts back to your
              bank account. This is needed when you no longer wish to use a
              portion of your funds for investments, or simply need to use it
              for other purpose. The open solar platform is currently using a
              third party provider to load and offload funds using digital USD
              (termed USDx) for accounts. Please follow the instructions below
              to manage your funds.
            </StyledText>
            {/*<StyledSeparator size={4} />*/}
            {/*<StyledFieldSection padding={15}>*/}
            {/*  <Select*/}
            {/*    label="select account address to fund"*/}
            {/*    items={profileItems}*/}
            {/*    onChange={handleChange}*/}
            {/*  />*/}
            {/*</StyledFieldSection>*/}
            <StyledSeparator size={5} noBorder={true} />
            <StyledFieldSection>
              <DivBox
                type="full"
                text={profile && profile.Name}
                label={"profile"}
                leftIcon="profile-user-icon"
                rightIcon="profile-edit-icon"
              />
              <DivBox
                text={profile.StellarWallet && profile.StellarWallet.PublicKey}
                label="public key"
                leftIcon="profile-badge-icon"
              />
            </StyledFieldSection>
            <StyledFieldSection padding={15}>
              <ToggleButton
                label={
                  <SeeMore
                    infoContent={
                      <div style={{ fontSize: 12 }}>
                        Is your account verified?{" "}
                      </div>
                    }
                  >
                    Verified?
                  </SeeMore>
                }
                checked={profile && profile.Kyc}
                offLabel={"Start >"}
                handleChange={() => handleVerify(profile.Username, "investor")}
              />
            </StyledFieldSection>
            <StyledFundsInfo>
              <StyledAccountBalance>
                <Balance>
                  $
                  {investorDashboard["Account Balance 1"] &&
                    investorDashboard["Account Balance 1"].toFixed(2)}
                </Balance>
                <Label>ACCOUNT BALANCE</Label>
              </StyledAccountBalance>
            </StyledFundsInfo>
            <StyledSeparator />
            <StyledHeader>Verify Your Profile </StyledHeader>
            <StyledText>
              <Highlight>Why? </Highlight>
              Profile verification is needed for regulatory compliance whenever
              managing funds that are tied to investments. The standard
              procedure is called KYC, which stands for ‘Know Your Customer.’ In
              this case, KYC is needed to acquire stable digital funds (called
              USDx) for use in your account.
            </StyledText>
            <StyledSeparator noBorder={true} size={5} />
            <TutorialStep
              step={"STEP 1"}
              description={
                <span>
                  <Highlight>
                    Access Anchor USD and Create an Account{" "}
                  </Highlight>
                  Description of the step that the user needs to take. Lorem
                  ipsum needed for regulatory compliance whenever managing funds
                  that are tied to investments. The standard procedure is called
                  KYC, which stands for ‘Know Your Customer.’ In this case, KYC
                  is needed to acquire stable digital funds (called USDx) for
                  use in your account.
                </span>
              }
              link={{ label: "LINK HERE >", url: magicUrl }}
              image={{ description: "You should see a screen like this: " }}
            />
            <TutorialStep
              step={"STEP 2"}
              description={
                <span>
                  <Highlight>
                    Submit your personal details for your Anchor USD account.{" "}
                  </Highlight>
                  Description of the step that the user needs to take. Lorem
                  ipsum needed for regulatory compliance whenever managing funds
                  that are tied to investments. The standard procedure is called
                  KYC, which stands for ‘Know Your Customer.’ In this case, KYC
                  is needed to acquire stable digital funds (called USDx) for
                  use in your account.{" "}
                </span>
              }
              image={{ description: "You should see a screen like this: " }}
            />

            <TutorialStep
              step={"STEP 3"}
              description={
                <span>
                  <Highlight>
                    You will receive a confirmation email. Now you can buy USDx{" "}
                  </Highlight>
                  Description of the step that the user needs to take. Lorem
                  ipsum needed for regulatory compliance whenever managing funds
                  that are tied to investments. The standard procedure is called
                  KYC, which stands for ‘Know Your Customer.’ In this case, KYC
                  is needed to acquire stable digital funds (called USDx) for
                  use in your account.{" "}
                </span>
              }
              image={{ description: "You should see a screen like this: " }}
            />
            <StyledSeparator size={5} />
            <StyledText>
              <Highlight>Profile Verification Status: </Highlight>
              Not Submitted
            </StyledText>
            <StyledText>
              Once your profile is verified and activated by the KYC provider,
              you can go to the next step to purchase and load digital funds. If
              you have submitted the form and are waiting confirmation, check
              your email inbox for messages from the KYC provider.
            </StyledText>
            <StyledSeparator size={3} />
            <ActionButtons
              cancelButton={{
                url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS,
                label: "go back"
              }}
              confirmButton={{
                // action: handleContinue,
                url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS,
                label: "next"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
);

const mapStateToProps = state => ({
  account: state.funds.user,
  profile: state.profile.user.items,
  investor: state.profile.investor.items.U,
  recipient: state.profile.recipient.items.U,
  investorDashboard: state.profile.investor.dashboard
});

const mapDispatchToProps = dispatch => ({
  registerEntity: (entity, info) => dispatch(registerAction(entity, info)),
  fetchFundsUser: (entity, account) =>
    dispatch(fetchFundsAccount(entity, account)),
  showMessage: (type, message) => dispatch(displayErrorAction(type, message)),
  fetchInvestorDashboard: (entity, username) =>
    dispatch(dashboardAction(entity, username))
});

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawFunds);
