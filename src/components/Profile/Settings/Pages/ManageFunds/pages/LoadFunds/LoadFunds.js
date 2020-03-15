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
import ActionButtons from "../../../../ActionButtons";
import { displayErrorAction } from "../../../../../../../store/actions/actions";
import CustomLink from "../../../../../../UI/CustomLink/CustomLink";
import { Http } from "../../../../../../../services/Http";
import Storage from "../../../../../../../services/Storage";

const LoadFunds = ({ fetchInvestorDashboard, investorDashboard, profile }) => {
  const [magicUrl, setMagicUrl] = useState("#");

  useEffect(() => {
    fetchInvestorDashboard("investor", Storage.get("username"));
    Http.depositIntent().subscribe(result => {
      if (result.data) {
        setMagicUrl(result.data.url);
      }
    });
  }, []);

  return (
    <div className="ProfilePageContainer">
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
          <StyledHeader>
            Your Registered User Profile and Account to fund
          </StyledHeader>
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
          <StyledSeparator size={5} />
          <StyledHeader>Add USD funds to your Wallet </StyledHeader>
          <StyledText>
            <Highlight>Note. </Highlight>
            Note. The platform currently uses AnchorUSD, a third party provider
            to load a USD backed asset (termed USDx) for accounts. Please follow
            the below instructions to purchase AnchorUSD.
          </StyledText>
          <StyledText>
            <Highlight>Stablecoin provider: </Highlight>
            Anchor USD.
            <CustomLink label="Learn more >" weight="light" font={12} />
          </StyledText>
          <StyledSeparator noBorder={true} size={5} />
          <TutorialStep
            step={"STEP 1"}
            description={
              <span>
                <Highlight>Access Anchor USD using the link below. </Highlight>
                This link contains details of your Open Solar user account in
                order to reference it to youe Anchor USD account. If you don’t
                use this link, then your USDx funds in AnchorUSD will not be
                linked to the Open Solar platform
              </span>
            }
            link={{ label: "Go to anchorusd.com >", url: magicUrl }}
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
                necessary step in order to buy USD equivalents on the Stellar
                Network, and use them to invest in projects listed on Opensolar.{" "}
                <br /> <br />
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
            step={"STEP 3"}
            description={
              <span>
                <Highlight>Purchase Funds on Opensolar</Highlight>
              </span>
            }
            image={{
              description: "You should see a screen like this: ",
              url: "https://via.placeholder.com/500"
            }}
          />
          <TutorialStep
            step={"STEP 3"}
            description={
              <span>
                <Highlight>
                  Return to OpenSolar once your funds show up in AnchorUSD. By
                  this time, your funds should be available in your Open Solar
                  account.
                </Highlight>
                <br />
                <br />
                Please contact us if you see AnchorUSD funds but not in your
                OpenSolar account.{" "}
              </span>
            }
            image={{
              description: "You should see a screen like this: ",
              url: "https://via.placeholder.com/500"
            }}
          />
          <StyledSeparator size={5} />
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
};

const mapStateToProps = state => ({
  profile: state.profile.user.items,
  investor: state.profile.investor.items.U,
  recipient: state.profile.recipient.items.U,
  investorDashboard: state.profile.investor.dashboard
});

const mapDispatchToProps = dispatch => ({
  registerEntity: (entity, info) => dispatch(registerAction(entity, info)),
  fetchInvestorDashboard: (entity, username) =>
    dispatch(dashboardAction(entity, username)),
  showMessage: (type, message) => dispatch(displayErrorAction(type, message))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoadFunds);
