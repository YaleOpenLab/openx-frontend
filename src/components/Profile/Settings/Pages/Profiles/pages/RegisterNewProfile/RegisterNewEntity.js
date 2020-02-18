import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { withSnackbar } from "notistack";
import { registerAction } from "../../../../../store/actions";
import { withRouter } from "react-router-dom";
import {
  Highlight,
  StyledHeader,
  StyledSeparator,
  StyledText
} from "../../../styles";
import ActionButtons from "../../../../ActionButtons";
import ROUTES from "../../../../../../../routes/routes";
import styled from "styled-components";

const AccountSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const StyledInfoSection = styled.div``;

const RegisterNewEntity = withRouter(
  ({ account, loading, registerAccount, match, isRecipient, isInvestor }) => {
    const handleSubmit = values => {
      const registerValues = {
        username: account.username,
        email: account.email,
        name: account.name,
        pwhash: account.Pwhash
      };

      registerAccount(match.params.userType, registerValues);
    };

    return (
      <div className="ProfilePageContainer">
        <div className="Register">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
              <StyledHeader>
                Proceed to register as a(n) {match.params.userType}?
              </StyledHeader>
              <StyledText>
                <Highlight>
                  {isRecipient &&
                    !isInvestor &&
                    "You are already registered as an recipient, do you still want to create a new profile?"}
                  {!isRecipient &&
                    isInvestor &&
                    "You are already registered as an investor, do you still want to create a new profile?"}
                  {isRecipient &&
                    isInvestor &&
                    "You already have beneficiary and investor accounts"}
                </Highlight>
              </StyledText>
              <StyledSeparator size={3} />
              <StyledInfoSection></StyledInfoSection>
              {/*<Formik*/}
              {/*	initialValues={{*/}
              {/*		username: account && account.Username,*/}
              {/*		name: account && account.Name,*/}
              {/*		email: account && account.Email,*/}
              {/*	}}*/}
              {/*	onSubmit={(values, actions) => {*/}
              {/*		const sendValues = {*/}
              {/*			username: values.username,*/}
              {/*			name: values.name,*/}
              {/*			email: values.email,*/}
              {/*		};*/}
              {/*		handleSubmit(sendValues)*/}
              {/*	}}*/}
              {/*	validationSchema={AccountSchema}*/}
              {/*	enableReinitialize*/}
              {/*>*/}
              {/*	{({errors, touched, values, resetForm}) => (*/}
              {/*		<Form className="solar-form">*/}
              {/*			<StyledFieldSection>*/}
              {/*				<Field*/}
              {/*					type="text"*/}
              {/*					name="username"*/}
              {/*					label={"username"}*/}
              {/*					component={Input}*/}
              {/*					errors={errors.username}*/}
              {/*					touched={touched.username}*/}
              {/*					disabled={true}*/}
              {/*				/>*/}
              {/*				<Field*/}
              {/*					type="text"*/}
              {/*					name="email"*/}
              {/*					label={"Email"}*/}
              {/*					component={Input}*/}
              {/*					errors={errors.email}*/}
              {/*					touched={touched.email}*/}
              {/*				/>*/}
              {/*			</StyledFieldSection>*/}
              {/*			<StyledFieldSection>*/}
              {/*				<Field*/}
              {/*					type="text"*/}
              {/*					name="name"*/}
              {/*					label={"Full name"}*/}
              {/*					component={Input}*/}
              {/*					errors={errors.name}*/}
              {/*					touched={touched.name}*/}
              {/*				/>*/}
              {/*				<div style={{flex: 1}}/>*/}
              {/*			</StyledFieldSection>*/}
              {/*			<StyledSeparator spacing={5}/>*/}
              {/*			<ActionButtons*/}
              {/*				cancelButton={{*/}
              {/*					url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES,*/}
              {/*					label: 'go back'*/}
              {/*				}}*/}
              {/*				confirmButton={{*/}
              {/*					label: 'register'*/}
              {/*				}}*/}
              {/*			/>*/}
              {/*		</Form>*/}
              {/*	)}*/}
              {/*</Formik>*/}
              {isRecipient && isInvestor ? (
                <ActionButtons
                  cancelButton={{
                    url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES,
                    label: "go back"
                  }}
                />
              ) : (
                <ActionButtons
                  cancelButton={{
                    url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.USER_PROFILES,
                    label: "go back"
                  }}
                  confirmButton={{
                    action: handleSubmit,
                    label: "register"
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const mapStateToProps = state => ({
  account: state.profile.user.items,
  isInvestor: state.profile.investor.authorized,
  isRecipient: state.profile.recipient.authorized,
  loading: state.profile.user.isLoading
});

const mapDispatchToProps = dispatch => ({
  registerAccount: (entity, data) => dispatch(registerAction(entity, data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(RegisterNewEntity));
