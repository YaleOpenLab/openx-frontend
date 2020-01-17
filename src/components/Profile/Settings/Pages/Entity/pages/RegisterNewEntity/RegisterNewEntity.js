import React, {useState} from 'react';
import {
	Highlight, StyledFieldSection,
	StyledHeader,
	StyledSeparator,
	StyledSmallerHeader,
	StyledSmallerText,
	StyledText
} from "../../../styles";
import RadioButton from "../../../../../../UI/SolarForms/RadioButton/RadioButton";
import {Field, Form, Formik} from "formik";
import Input from "../../../../../../UI/SolarForms/Input/Input";
import styled from "styled-components";
import * as Yup from "yup";
import ActionButtons from "../../../../ActionButtons";
import ROUTES from "../../../../../../../routes/routes";
import {registerAction, registerEntityAction, updateAccount} from "../../../../../store/actions";
import {displayErrorAction, progressAction} from "../../../../../../../store/actions/actions";
import {connect} from "react-redux";
import {withSnackbar} from "notistack";
import history from "../../../../../../../helpers/history";

export const StyledButtonGroupContainer = styled.div`
	margin: 24px 0;
`;

export const StyledInputGroupContainer = styled.div`
`;

const AccountSchema = Yup.object().shape({
	username: Yup.string().required("Username is required"),
	legalName: Yup.string().required("Legal name is required"),
	adminEmail: Yup.string().email("Invalid email"),
	phoneNumber: Yup.string().required("Phone is required"),
	address: Yup.string().required("Address is required"),
	country: Yup.string().required("Country is required"),
	city: Yup.string().required("City is required"),
	zipCode: Yup.number().required("City is required"),
	recoveryPhone: Yup.string().required("Recovery phone is required"),
	taxIdNumber: Yup.string(),
});

const RegisterNewEntity = ({account, isInvestor, isDeveloper, isRecipient, registerAccount, registerEntityAccount, showMessage}) => {
    const [userProfile, setProfileTypes] = useState({
        investor: false,
        recipient: false,
        developer: false,
    });

    const handleProfileTypeChange = (type) => {
        setProfileTypes({
            ...userProfile,
            [type]: !userProfile[type],
        })
    };


    const [roleInOrganization, setRoleInOrganization] = useState(null);

	const registerNewEntity = (values) => {
        const registerValues = {
            username: account.Username,
            email: account.Email,
            pwhash: account.Pwhash
        };

        Object.keys(userProfile).map(key => {
            if(userProfile[key] && (key === "investor" || key === "recipient")){
                registerAccount(key, registerValues);
            }
            if(userProfile[key] && key === "developer"){
                registerEntityAccount(key, registerValues);
            }
        });

        history.push(ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE);
    };

	return (
		<div className="ProfilePageContainer">
			<div className="Register">
				<div className="row">
					<div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
						<StyledHeader>Register a New Entity associated to your Profile</StyledHeader>
						<StyledText>
							<Highlight>Why? </Highlight>
							While you are registered in the platform as an individual, you may want to operate on behalf of a
							company or organisation for specific solar projects.
						</StyledText>
						<StyledSeparator size={3}/>
						<StyledSmallerHeader>How would you describe your Entity?</StyledSmallerHeader>
						<StyledSmallerText>
							This is a descriptive category that relates to the legally incorporated status and profile of your
							organisation. You may select more that one option. If unsure, or non of these options fits your organisation
							description, select other.
						</StyledSmallerText>
						<StyledButtonGroupContainer>
							<RadioButton name="profit_company" label="For-Profit Company" explanation="(eg. a limited liability company)" />
							<RadioButton name="social_enterprise" label="Social Enterprise" explanation="(eg. a benefit corporation)" />
							<RadioButton name="non_governmental" label="Non-Governmental" explanation="(eg. a foundation or charity)" />
							<RadioButton name="cooperative" label="Cooperative" explanation="(eg. a working coop)" />
							<RadioButton name="other" label="Other"/>
						</StyledButtonGroupContainer>
						<StyledSeparator size={5}/>
						<StyledInputGroupContainer>
							<Formik
								initialValues={{
									username: account && account.Username || "",
									legalName: account && account.Name || "",
									adminEmail: account && account.Email || "",
                                    address: account && account.Address,
                                    country: account && account.Country,
                                    city: account && account.City,
                                    zipCode: account && account.ZipCode,
                                    phoneNumber: '',

                                }}
								onSubmit={(values, actions) => {
                                    registerNewEntity(values);
								}}
								validationSchema={AccountSchema}
                                enableReinitialize={true}
							>
								{({errors, touched, values, handleChange}) => (
									<Form className="solar-form">
										<StyledFieldSection>
											<Field
												type="text"
												name="username"
												label={"entity username"}
												component={Input}
												errors={errors.username}
												touched={touched.username}
											/>
											<Field
												type="text"
												name="legalName"
												label={"entity legal name"}
												component={Input}
												errors={errors.legalName}
												touched={touched.legalName}
											/>
										</StyledFieldSection>
										<StyledFieldSection>
											<Field
												type="email"
												name="adminEmail"
												label={"admin email (optional)"}
												component={Input}
												errors={errors.adminEmail}
												touched={touched.adminEmail}
											/>
											<Field
												type="text"
												name="phoneNumber"
												value={values.phoneNumber}
												label={"phone number name"}
												component={Input}
												errors={errors.phoneNumber}
												touched={touched.phoneNumber}
											/>
										</StyledFieldSection>
										<StyledSeparator spacing={5}/>
										<StyledFieldSection>
											<Field
												type="text"
												name="address"
												value={values.address}
												label={"address"}
												component={Input}
												errors={errors.address}
												touched={touched.address}
											/>
											<Field
												type="text"
												name="country"
												value={values.country}
												label={"country"}
												component={Input}
												errors={errors.country}
												touched={touched.country}
											/>
										</StyledFieldSection>
										<StyledFieldSection>
											<Field
												type="text"
												name="city"
												value={values.city}
												label={"city"}
												component={Input}
												errors={errors.city}
												touched={touched.city}
											/>
											<Field
												type="number"
												name="zipCode"
												value={values.zipCode}
												label={"zipCode"}
												component={Input}
												errors={errors.zipCode}
												touched={touched.zipCode}
											/>
										</StyledFieldSection>
										<StyledFieldSection>
											<Field
												type="text"
												name="recoveryPhone"
												value={values.recoveryPhone}
												label={"recoveryPhone"}
												component={Input}
												errors={errors.recoveryPhone}
												touched={touched.recoveryPhone}
											/>
											<Field
												type="number"
												name="taxIdNumber"
												value={values.taxIdNumber}
												label={"tax id number (optional)"}
												component={Input}
												errors={errors.taxIdNumber}
												touched={touched.taxIdNumber}
											/>
										</StyledFieldSection>
									</Form>
								)}
							</Formik>
							<StyledSeparator size={3}/>
							<StyledSmallerHeader>How would you describe your role in the organisation?</StyledSmallerHeader>
							<StyledButtonGroupContainer>
								<RadioButton name="founder" label="Im the founder or CEO" checked={roleInOrganization === "founder"} onChange={() => setRoleInOrganization("founder")} />
								<RadioButton name="employee" label="Im an Employee or Partner with operational responsibilities" checked={roleInOrganization === "employee"} onChange={() => setRoleInOrganization("employee")} />
								<RadioButton name="otherRole" label="Other" checked={roleInOrganization === "otherRole"} onChange={() => setRoleInOrganization("otherRole")} />
							</StyledButtonGroupContainer>
							<StyledSeparator size={3}/>
							<StyledSmallerHeader><Highlight>How will this organisation use the opensolar platform?</Highlight></StyledSmallerHeader>
							<StyledSmallerText>
								This will create accounts and dashboard associated to your Profile and Entity. Only select those that you are sure you will use.
							</StyledSmallerText>
							<StyledButtonGroupContainer>
                                <RadioButton
                                    name="INVESTOR"
                                    label="INVESTOR: I will directly invest in solar projects as myself."
                                    checked={isInvestor ? true : userProfile.investor}
                                    onChange={() => handleProfileTypeChange("investor")}/>
                                <RadioButton
                                    name="RECEIVER"
                                    label="RECEIVER: I will receive a solar array and pay its electricity generation to own it. "
                                    checked={isRecipient ? true : userProfile.recipient}
                                    onChange={() => handleProfileTypeChange("recipient")}/>
                                <RadioButton
                                    name="DEVELOPER"
                                    label="DEVELOPER: I will install a solar system or provide professional services for its installation, operation or maintenance. "
                                    checked={isDeveloper ? true : userProfile.developer}
                                    onChange={() => handleProfileTypeChange("developer")}/>
							</StyledButtonGroupContainer>
						</StyledInputGroupContainer>
						<ActionButtons
							cancelButton={{
								url: ROUTES.PROFILE_PAGES.SETTINGS_PAGES.ENTITY_PROFILE,
								label: 'go back'
							}}
							confirmButton={{
								action: registerNewEntity,
								label: 'register'
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = state => ({
    account: state.profile.user.items,
    isInvestor: state.profile.investor.authorized,
    isRecipient: state.profile.recipient.authorized,
    isDeveloper: state.profile.entity.items.Developer,
    loading: state.profile.user.isLoading,
});

const mapDispatchToProps = dispatch => ({
    updateAccount: (entity, payload) => dispatch(updateAccount(entity, payload)),
    registerAccount: (entity, data) => dispatch(registerAction(entity, data)),
    registerEntityAccount: (entity, data) => dispatch(registerEntityAction(entity, data)),
    setProgress: (username, progress) => dispatch(progressAction(username, progress)),
    showMessage: (type, message) => dispatch(displayErrorAction(type, message)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withSnackbar(RegisterNewEntity));
