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
import { registerAction } from "../../../../../store/actions";
import { connect } from "react-redux";
import ROUTES from "../../../../../../../routes/routes";
import TutorialStep from "../../../../TutorialStep/TutorialStep";
import { fetchFundsAccount } from "../store/actions";
import { withRouter } from "react-router-dom";
import ActionButtons from "../../../../ActionButtons";
import { displayErrorAction } from "../../../../../../../store/actions/actions";
import Select from "../../../../../../UI/SolarForms/Select/Select";
import ToggleButton from "../../../../../../General/ToggleButton";
import SeeMore from "../../../../../../UI/SeeMore/SeeMore";

const WithdrawFunds = withRouter(
  ({
    fetchFundsUser,
    account,
    history,
    match,
    showMessage,
    profile,
    investor,
    recipient
  }) => {
    const handleVerify = () => {
      history.push(
        ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES_PAGES.VERIFY.replace(
          ":username",
          account.Username
        ).replace(":userType", "user")
      );
    };

    useEffect(() => {
      fetchFundsUser(match.params.userType, match.params.username);
    }, []);

    const handleContinue = () => {};

    const handleChange = e => {
      history.push(
        ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS_PAGES.WITHDRAW_FUNDS.replace(
          ":username",
          match.params.username
        ).replace(":userType", e.target.value)
      );
    };

    const generateItems = () => {
      const itemList = [];
      if (profile && profile.Name) {
        itemList.push({ name: `${profile.Name} / individual`, value: "user" });
      }
      if (investor && investor.Name) {
        itemList.push({
          name: `${investor.Name} / investor`,
          value: "investor"
        });
      }
      if (recipient && recipient.Name) {
        itemList.push({
          name: `${recipient.Name} / recipient`,
          value: "recipient"
        });
      }
      return itemList;
    };

    const profileItems = generateItems();

    var url = "";
    if (investor && investor.Name) {
      url = investor.AnchorKYC.Url;
    }
    if (recipient && recipient.Name) {
      url = recipient.AnchorKYC.Url;
    }

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
            <StyledSeparator size={4} />
            <StyledFieldSection padding={15}>
              <Select
                label="select account address to fund"
                items={profileItems}
                onChange={handleChange}
              />
            </StyledFieldSection>
            <StyledSeparator size={4} />
            <StyledFieldSection>
              <DivBox
                type="full"
                text={account.Name}
                label={match.params.userType}
                leftIcon="profile-user-icon"
                rightIcon="profile-edit-icon"
              />
              <DivBox
                text={account.PublicKey}
                label="public key"
                leftIcon="profile-badge-icon"
              />
            </StyledFieldSection>
            <StyledSeparator size={5} noBorder={true} />
            <StyledFieldSection>
              <DivBox
                type="full"
                text={investor && investor.Name}
                label={"investor profile"}
                leftIcon="profile-user-icon"
                rightIcon="profile-edit-icon"
              />
              <DivBox
                text={investor && investor.StellarWallet.PublicKey}
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
                checked={investor && investor.Kyc}
                offLabel={"Start >"}
                handleChange={() => handleVerify(investor.Username, "investor")}
              />
            </StyledFieldSection>
            <StyledFundsInfo>
              <StyledAccountBalance>
                <Balance>$0</Balance>
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
                    Access Anchor USD and create an account if you already
                    haven't
                  </Highlight>
                  This link contains details of your Opensolar user account in
                  order to reference it to youe Anchor USD account. If you don’t
                  use this link, then your USDx funds in Opensolar will not be
                  linked to AnchorUSD
                </span>
              }
              link={{ label: "Go to anchorusd.com >", url: url }}
              image={{
                description: "Guide screen: ",
                url: "https://i.ibb.co/Mp6XNTf/anchor1.png"
              }}
            />
            <TutorialStep
              step={"STEP 2A / Register"}
              description={
                <span>
                  Please register on AnchorUSD if you already haven't. This is a
                  necessary step in order to exchange USD equivalents on the
                  Stellar Network and receive equivalent dollars. <br />
                  <br />
                  <Highlight>
                    Choose Whether this is a personal or business account
                  </Highlight>
                </span>
              }
              image={{
                description: "",
                url: "https://i.ibb.co/BTYMWH8/anchor2.png"
              }}
            />
            <TutorialStep
              step={"STEP 2B / Register"}
              description={
                <span>
                  <Highlight>Enter your name and relevant details: </Highlight>
                </span>
              }
              image={{
                description: "",
                url: "https://i.ibb.co/c8YdKbh/anchor3.png"
              }}
            />
            <TutorialStep
              step={"STEP 2C / Register"}
              description={
                <span>
                  <Highlight>Enter your contact number</Highlight>
                </span>
              }
              image={{
                description: "",
                url: "https://i.ibb.co/Try02Yg/anchor4.png"
              }}
            />
            <TutorialStep
              step={"STEP 2D / Register"}
              description={
                <span>
                  <Highlight>Submit For Review</Highlight>
                </span>
              }
              image={{
                description: "",
                url: "https://i.ibb.co/TcvRsYn/anchor5.png"
              }}
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
  recipient: state.profile.recipient.items.U
});

const mapDispatchToProps = dispatch => ({
  registerEntity: (entity, info) => dispatch(registerAction(entity, info)),
  fetchFundsUser: (entity, account) =>
    dispatch(fetchFundsAccount(entity, account)),
  showMessage: (type, message) => dispatch(displayErrorAction(type, message))
});

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawFunds);
