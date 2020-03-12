import React, { useEffect, useState } from "react";
import {
  StyledHeader,
  Highlight,
  StyledText,
  StyledSeparator,
  StyledFieldSection
} from "../../../styles";
import DivBox from "../../../../../../General/DivBox/DivBox";
import { registerAction } from "../../../../../store/actions";
import { connect } from "react-redux";
import CustomLink from "../../../../../../UI/CustomLink/CustomLink";
import ROUTES from "../../../../../../../routes/routes";
import TutorialStep from "../../../../TutorialStep/TutorialStep";
import { fetchVerifyAccount, fetchVerifyEntityAccount } from "./store/actions";
import { withRouter } from "react-router-dom";
import ActionButtons from "../../../../ActionButtons";
import { displayErrorAction } from "../../../../../../../store/actions/actions";
import { Http } from "../../../../../../../services/Http";

const Verify = withRouter(
  ({ fetchVerifyUser, fetchVerifyEntityUser, profile, history, match }) => {
    const [url, setUrl] = useState("#");

    useEffect(() => {
      if (match.params.userType === "developer") {
        fetchVerifyEntityUser(match.params.userType, match.params.username);
      } else {
        fetchVerifyUser(match.params.userType, match.params.username);
      }

      Http.generateLink().subscribe(result => {
        if (result.data && result.data.url) {
          setUrl(result.data.url);
        }
      });
    }, []);

    return (
      <div className="ProfilePageContainer">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
            <StyledHeader>Verify User</StyledHeader>
            <StyledSeparator size={4} />
            <StyledFieldSection>
              <DivBox
                type="full"
                text={profile && profile.Name}
                label="individual"
                leftIcon="profile-user-icon"
                rightIcon="profile-edit-icon"
              />
              <DivBox
                text={profile.StellarWallet && profile.StellarWallet.PublicKey}
                label="public key"
                leftIcon="profile-badge-icon"
              />
            </StyledFieldSection>
            <StyledFieldSection style={{ margin: "15px" }}>
              <CustomLink
                weight="normal"
                label={"Verify a different entity? Go Back >"}
                url={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES}
              />
            </StyledFieldSection>
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
                  linked to AnchorUSD, and vice versa
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
                  necessary step in order to exchange and buy USD equivalents on
                  the Stellar Network <br />
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
                url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES,
                label: "go back"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
);

const mapStateToProps = state => ({
  profile: state.profile.user.items
});

const mapDispatchToProps = dispatch => ({
  registerEntity: (entity, info) => dispatch(registerAction(entity, info)),
  fetchVerifyUser: (entity, account) =>
    dispatch(fetchVerifyAccount(entity, account)),
  fetchVerifyEntityUser: (entity, account) =>
    dispatch(fetchVerifyEntityAccount(entity, account)),
  showMessage: (type, message) => dispatch(displayErrorAction(type, message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
