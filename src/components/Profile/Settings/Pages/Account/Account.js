import React, {useState} from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";
import {registerAction, updateAccount} from "../../../store/actions";
import {withSnackbar} from "notistack";
import RadioButton from "../../../../UI/SolarForms/RadioButton/RadioButton";
import ROUTES from "../../../../../routes/routes";
import {progressAction} from "../../../../../store/actions/actions";

const AccountSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string()
		.email("Invalid email")
		.required("Required"),
});

const progressLevel = 20;

const Account = ({account, loading, updateAccount, registerAccount, isInvestor, isRecipient, history, setProgress}) => {
	const [userProfile, setProfileTypes] = useState({
		investor: false,
		recipient: false,
		developer: false,
		visitor: false,
	});

	const handleProfileTypeChange = (type) => {
		if (type === "visitor") {
			setProfileTypes({
				investor: false,
				recipient: false,
				developer: false,
				visitor: true,
			})
		} else {
			setProfileTypes({
				...userProfile,
				[type]: !userProfile[type],
				visitor: false,
			})
		}
	};

	const handleSubmit = values => {
		updateAccount("user", values);
		const registerValues = {
			username: values.username,
			email: values.email,
			pwhash: account.Pwhash
		};

		Object.keys(userProfile).map(key => {
			if(userProfile[key] && (key === "investor" || key === "recipient")){
				registerAccount(key, registerValues)
			}
		});

		if(account.ProfileProgress < progressLevel) {
			setProgress(account.Username, progressLevel);
			history.push(ROUTES.PROFILE_PAGES.SETTINGS_PAGES.SECURITY);
		}
	};

	return (
		<div className="ProfilePageContainer">
			<div className="row">
				<div className="col-12 col-md-10 col-lg-8 mx-auto ">
					<div className="component-box-title component-header">
						<span className="-darker">Your Individual Profile</span>
					</div>
					<div className="component-box-text">
						<span className='--highlight'>Your profile as an individual.</span> Everyone operating through the opensolar
						platform needs to
						register as an
						individual first. To register as an ‘organisation’ that you operate on behalf of, go to ‘Entity Profile.’
					</div>
				</div>
				<div className="col-12 col-md-10 col-lg-8 mx-auto ">
					<div className="col-12 solar-form-separator"/>
				</div>
			</div>
			<Formik
				initialValues={{
					username: account && account.Username,
					name: account && account.Name,
					email: account && account.Email,
					address: account && account.Address,
					country: account && account.Country,
					city: account && account.City,
					zipcode: account && account.ZipCode
				}}
				onSubmit={(values, actions) => {
					const sendValues = {
						username: values.username,
						name: values.name,
						email: values.email,
						city: values.city,
						country: values.country,
						address: values.address,
						zipcode: values.zipcode,
					};
					handleSubmit(sendValues)
				}}
				validationSchema={AccountSchema}
				enableReinitialize
			>
				{({errors, touched, resetForm}) => (
					<Form className="solar-form">
						<div className="row">
							<div className="col-12 col-md-10 col-lg-8 mx-auto">
								<div className="row">
									<div className="col-6 solar-input-div">
										<Field
											type="text"
											className={`solar-form-input ${
												errors.username && touched.username
													? "solar-form-input-error"
													: ""
												}`}
											name="username"
											disabled
										/>
										<label htmlFor="username" className="solar-form-label">
											user name
										</label>
									</div>
									<div className="col-6 solar-input-div">
										<Field
											type="email"
											className={`solar-form-input ${
												errors.email && touched.email
													? "solar-form-input-error"
													: ""
												}`}
											name="email"
										/>
										<label htmlFor="email" className="solar-form-label">
											email
										</label>
										{errors.email && touched.email && (
											<div className="solar-form-error-text with-label-error">
												{errors.email}
											</div>
										)}
									</div>

								</div>
							</div>

							<div className="col-12 col-md-10 col-lg-8 mx-auto">
								<div className="row">
									<div className="col-6 solar-input-div">
										<Field
											type="text"
											className={`solar-form-input ${
												errors.name && touched.name
													? "solar-form-input-error"
													: ""
												}`}
											name="name"
										/>
										<label htmlFor="name" className="solar-form-label">
											full name
										</label>
										{errors.name && touched.name && (
											<div className="solar-form-error-text with-label-error">
												{errors.name}
											</div>
										)}
									</div>
								</div>
							</div>

							<div className="col-12 col-md-10 col-lg-8 mx-auto ">
								<div className="col-12 solar-form-separator"/>
							</div>
						</div>

						<div className="row">
							<div className="col-12 col-md-10 col-lg-8 mx-auto">
								<div className="row">
									<div className="col-6 solar-input-div">
										<Field
											type="text"
											className="solar-form-input"
											name="address"
										/>
										<label htmlFor="address" className="solar-form-label">
											address
										</label>
									</div>
									<div className="col-6 solar-input-div">
										<Field
											type="text"
											className="solar-form-input"
											name="country"
										/>
										<label htmlFor="country" className="solar-form-label">
											country
										</label>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-10 col-lg-8 mx-auto">
								<div className="row">
									<div className="col-6 solar-input-div">
										<Field
											type="text"
											className="solar-form-input"
											name="city"
										/>
										<label htmlFor="city" className="solar-form-label">
											city
										</label>
									</div>
									<div className="col-6 solar-input-div">
										<Field
											type="number"
											className="solar-form-input"
											name="zipcode"
										/>
										<label htmlFor="zipcode" className="solar-form-label">
											zip code
										</label>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-10 col-lg-8 mx-auto ">
								<div className="col-12 solar-form-separator"/>
							</div>
						</div>

						{!isInvestor && !isRecipient &&
						<div className="row">
							<div className="col-12 col-md-10 col-lg-8 mx-auto ">
								<div className="component-box-title component-header">
									<span className="-darker">Your User Profile</span>
								</div>
								<div className="component-box-text">
									<span className='--highlight'>How will you use the opensolar platform?</span>
								</div>
								<div className="component-box-text">
									This will create accounts and dashboard associated to your Profile and Entity. Only select those
									that you are sure you will use. You can select multiple options.
								</div>
								<div className="component-box-content">
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
										checked={userProfile.developer}
										onChange={() => handleProfileTypeChange("developer")}/>
									<RadioButton
										name="VISITOR"
										label="VISITOR: Im just exploring the platform's functionalities for review purpose. "
										checked={userProfile.visitor}
										onChange={() => handleProfileTypeChange("visitor")}/>
								</div>
							</div>
							<div className="col-12 col-md-10 col-lg-8 mx-auto ">
								<div className="col-12 solar-form-separator"/>
							</div>
						</div>}

						<div className="row">
							<div className="col-12 col-md-10 col-lg-8 mx-auto">
								<div className="row">
									<div className="col-6">
										<button
											type="submit"
											className="solar-form-button solar-btn-normal"
											disabled={
												loading ||
												(errors.email && touched.email) ||
												(errors.name && touched.name) ||
												(errors.fullName && touched.fullName)
											}
										>
											{account.ProfileProgress < progressLevel ? 'next' : 'update'}
										</button>
									</div>
								</div>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

const mapStateToProps = state => ({
	account: state.profile.user.items,
	isInvestor: state.profile.investor.authorized,
	isRecipient: state.profile.recipient.authorized,
	loading: state.profile.user.isLoading,
});

const mapDispatchToProps = dispatch => ({
	updateAccount: (entity, payload) => dispatch(updateAccount(entity, payload)),
	registerAccount: (entity, data) => dispatch(registerAction(entity, data)),
	setProgress: (username, progress) => dispatch(progressAction(username, progress)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withSnackbar(Account));
