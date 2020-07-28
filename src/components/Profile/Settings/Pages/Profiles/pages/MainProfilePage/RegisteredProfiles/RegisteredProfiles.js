import React, { useEffect, useState } from "react";
import DivBox from "../../../../../../../General/DivBox/DivBox";
import {
  Highlight,
  StyledHeader,
  StyledText,
  StyledSeparator,
  StyledFlexContainer,
  StyledFundsInfo,
  StyledAccountBalance,
  Balance,
  Label,
  StyledCustomLink
} from "../../../../styles";
import styled from "styled-components";
import ToggleButton from "../../../../../../../General/ToggleButton";
import SeeMore from "../../../../../../../UI/SeeMore/SeeMore";
import history from "../../../../../../../../helpers/history";
import ROUTES from "../../../../../../../../routes/routes";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";
import { dashboardAction } from "../../../../../../store/actions";
import Storage from "../../../../../../../../services/Storage";
import ConfirmModal from "../../../../../../../UI/ConfirmModal/ConfirmModal";
import Input from "../../../../../../../UI/SolarForms/Input/InputSimple";
import {Http} from "../../../../../../../../services/Http";
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

const StyledProfileSection = styled.div`
  display: flex;
  width: 100%;
`;

const StyledProfileActionsSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 25px;
`;

const RegisteredProfiles = ({
  investor,
  recipient,
  developer,
  isDeveloper,
  fetchInvestorDashboard,
  investorDashboard
}) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [seedpwd, setSeedpwd] = useState("");
  const [alertBalance, setAlertBalance] = useState(false);

  useEffect(() => {
    fetchInvestorDashboard("investor", Storage.get("username"));
  }, []);

  const handleVerify = (username, userType) => {
    history.push(
      ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES_PAGES.VERIFY.replace(
        ":username",
        username
      ).replace(":userType", userType)
    );
  };

  const handleLoadFunds = (username, userType) => {
    history.push(
      ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS_PAGES.LOAD_FUNDS.replace(
        ":username",
        username
      )
    );
  };

  const openModal = () => {
      console.log(investorDashboard["Account Balance 1"].toFixed(2))
      if (investorDashboard["Account Balance 1"].toFixed(2) > 1000.00) {
        setAlertBalance(true)
      } else {
        setModalOpen(true);
      }

      console.log(modalOpen, seedpwd);
      };

  const handleWithdrawFunds = (username, userType) => {
    history.push(
      ROUTES.PROFILE_PAGES.SETTINGS_PAGES.FUNDS_PAGES.WITHDRAW_FUNDS.replace(
        ":username",
        username
      )
    );
  };

  const Confirm = async () => {
    try {
      const response = await fetch(
          `https://friendbot.stellar.org?addr=${encodeURIComponent(investor.StellarWallet.PublicKey)}`
      );
      const responseJSON = await response.json();
      console.log("SUCCESS! Funded :)\n", responseJSON);

      await getTokens();

      console.log("Processed. wait 30 sec");
      } catch (e) {
      console.error("ERROR!", e);
      }

    console.log(modalOpen, seedpwd);
  };

  const getTokens = async () => {
    Http.getStablecoins(
        10,
        seedpwd
    ).subscribe(
        () => {
          console.log("Processing")
        },
        error =>
            console.log(error)
    );
  }

  return (
    <React.Fragment>
      <StyledHeader>Your Registered Profiles & Accounts</StyledHeader>
      <StyledText>
        <Highlight>Why? </Highlight>
        While you are registered in the platform as an individual, you may want
        to operate on behalf of a company or organisation for specific solar
        projects.
      </StyledText>
      <StyledSeparator size={4} />
      {investor && (
        <StyledFlexContainer>
          <StyledProfileSection>
            <DivBox
              type="full"
              text={investor.Name}
              label="INVESTOR PROFILE"
              leftIcon="investor-icon"
              rightIcon="profile-edit-icon"
              link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT}
            />
            <DivBox
              text={investor.StellarWallet && investor.StellarWallet.PublicKey}
              label="wallet address"
              leftIcon="wallet-icon"
            />
          </StyledProfileSection>
          <StyledProfileActionsSection>
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
              checked={investor.Kyc}
              offLabel={"Start >"}
              handleChange={() => handleVerify(investor.Username, "investor")}
            />
            <StyledFundsInfo>
              <StyledAccountBalance>
                <Balance>
                  $
                  {investorDashboard["Account Balance 1"] &&
                    investorDashboard["Account Balance 1"].toFixed(2)}
                </Balance>
                <Label>ACCOUNT BALANCE</Label>
              </StyledAccountBalance>
              <StyledCustomLink
                // onClick={() => handleLoadFunds(investor.Username, "investor")}
                  onClick={() => openModal()}
              >
                Load Funds >
              </StyledCustomLink>
              <StyledCustomLink
                  onClick={() => {navigator.clipboard.writeText(investor.StellarWallet.PublicKey)}}
              >
                Copy address to clipboard >
              </StyledCustomLink>

              {modalOpen && (
                  <ConfirmModal
                      title="Enter seed password"
                      onConfirm={Confirm}
                      onCancel={() => setModalOpen(false)}
                      body={
                        <Input
                            placeholder="Seed Password"
                            type="password"
                            value={seedpwd}
                            onChange={e => setSeedpwd(e.target.value)}
                        />
                      }
                  />
              )}
              {alertBalance && (
                  <Alert onClose={() => {setAlertBalance(false)}}>You already have test STABLEUSD in the account</Alert>
              )}


            </StyledFundsInfo>
          </StyledProfileActionsSection>
        </StyledFlexContainer>
      )}
      {investor && <StyledSeparator size={4} />}
      {recipient && (
        <StyledFlexContainer>
          <StyledProfileSection>
            <DivBox
              type="full"
              text={recipient.Name}
              label="RECEIVER PROFILE"
              leftIcon="beneficiary-icon"
              rightIcon="profile-edit-icon"
              link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT}
            />
            <DivBox
              text={
                recipient.StellarWallet && recipient.StellarWallet.PublicKey
              }
              label="wallet address"
              leftIcon="wallet-icon"
            />
          </StyledProfileSection>
          <StyledProfileActionsSection>
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
              checked={recipient.Kyc}
              offLabel={"Start >"}
              handleChange={() => handleVerify(recipient.Username, "recipient")}
            />
            <StyledFundsInfo>
              {/*<StyledCustomLink*/}
              {/*  onClick={() => handleLoadFunds(recipient.Username, "recipient")}*/}
              {/*>*/}
              {/*  Load Funds >*/}
              {/*</StyledCustomLink>*/}
              <StyledCustomLink
                onClick={() =>
                  handleWithdrawFunds(recipient.Username, "recipient")
                }
              >
                Withdraw Funds >
              </StyledCustomLink>
            </StyledFundsInfo>
          </StyledProfileActionsSection>
        </StyledFlexContainer>
      )}
      {recipient && <StyledSeparator size={4} />}
      {isDeveloper && (
        <StyledFlexContainer>
          <StyledProfileSection>
            <DivBox
              type="full"
              text={developer.Name}
              label="developer profile"
              leftIcon="developer-icon"
              rightIcon="profile-edit-icon"
              link={ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ACCOUNT}
            />
            <DivBox
              text={
                developer.StellarWallet && developer.StellarWallet.PublicKey
              }
              label="wallet address"
              leftIcon="wallet-icon"
            />
          </StyledProfileSection>
          <StyledProfileActionsSection>
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
              checked={developer.Kyc}
              offLabel={"Start >"}
              handleChange={() => handleVerify(developer.Username, "developer")}
            />
            <StyledFundsInfo>
              <StyledCustomLink
                onClick={() => handleLoadFunds(developer.Username, "developer")}
              >
                Load Funds >
              </StyledCustomLink>
              <StyledCustomLink
                onClick={() =>
                  handleWithdrawFunds(developer.Username, "developer")
                }
              >
                Withdraw Funds >
              </StyledCustomLink>
            </StyledFundsInfo>
          </StyledProfileActionsSection>
        </StyledFlexContainer>
      )}
      {isDeveloper && <StyledSeparator size={4} />}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  investor: state.profile.investor.items.U,
  investorDashboard: state.profile.investor.dashboard,
  recipient: state.profile.recipient.items.U,
  developer: state.profile.entity.items.U,
  isDeveloper: state.profile.entity.items.Developer
});
const mapDispatchToProps = dispatch => ({
  fetchInvestorDashboard: (entity, username) =>
    dispatch(dashboardAction(entity, username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(RegisteredProfiles));
