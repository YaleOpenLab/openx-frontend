import React, {Component} from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import SwitchButton from "../../../../General/SwitchButton/SwitchButton";
import Button from "../../../../UI/SolarForms/Button/Button";
import ROUTES from "../../../../../routes/routes";

const AccountSecuritySchema = Yup.object().shape({
	currentPassword: Yup.string()
		.min(5, "Password must be at least 5 characters long!")
		.required("Required"),
	newPassword: Yup.string()
		.min(5, "Password must be at least 5 characters long!")
		.required("Required"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('newPassword'), null], "Passwords must match")
		.required('Password confirm is required'),
});
const SeedSecuritySchema = Yup.object().shape({
	currentSeedPassword: Yup.string()
		.min(5, "Seed password must be at least 5 characters long!")
		.required("Required"),
	newSeedPassword: Yup.string()
		.min(5, "Seed password must be at least 5 characters long!")
		.required("Required"),
	confirmSeedPassword: Yup.string()
		.oneOf([Yup.ref('newSeedPassword'), null], "Seed passwords must match")
		.required('Seed confirm password  is required'),
});

class Security extends Component {
	constructor(props) {
		super(props);
		this.state = {
			accountPasswordInitialValues: {
				currentPassword: "",
				newPassword: "",
				confirmPassword: "",
			},
			seedPasswordInitialValues: {
				currentSeedPassword: "",
				newSeedPassword: "",
				confirmSeedPassword: "",
			},
		};
	}

	handleSubmit = values => {

	};

	handlePasswordChange = () => {

	};

	handleSeedPasswordChange = () => {

	};

	render() {
		const {accountPasswordInitialValues, seedPasswordInitialValues} = this.state;

		return (
			<div className="ProfileSecurity">
				<Formik
					initialValues={accountPasswordInitialValues}
					onSubmit={(values, actions) => {
						console.log(values);
					}}
					validationSchema={AccountSecuritySchema}
				>
					{({errors, touched, resetForm}) => (
						<Form className="solar-form">
							<div className="row">
								<div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
									<div className="component-box-title component-header">
										<span className="-darker">Password Settings</span>
									</div>
									<div className="component-box-title component-header margin-bottom">
										LOGIN PASSWORD
									</div>
									<div className="component-box-text margin-bottom">
										This is the password that you used when you sign up and that you should use to log into the
										platform. It has basic access to your profile information but does not control the funds in your
										account.
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="row">
										<div className="col-6 solar-input-div">
											<Field
												type="password"
												className={`solar-form-input ${
													errors.currentPassword && touched.currentPassword
														? "solar-form-input-error"
														: ""
													}`}
												name="currentPassword"
											/>
											<label htmlFor="currentPassword" className="solar-form-label">
												current password
											</label>
											{errors.currentPassword && touched.currentPassword && (
												<div className="solar-form-error-text with-label-error">
													{errors.currentPassword}
												</div>
											)}
										</div>
									</div>
								</div>

								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="row">
										<div className="col-6 solar-input-div">
											<Field
												type="password"
												className={`solar-form-input ${
													errors.newPassword && touched.newPassword
														? "solar-form-input-error"
														: ""
													}`}
												name="newPassword"
											/>
											<label htmlFor="newPassword" className="solar-form-label">
												new password
											</label>
											{errors.newPassword && touched.newPassword && (
												<div className="solar-form-error-text with-label-error">
													{errors.newPassword}
												</div>
											)}
										</div>
										<div className="col-6 solar-input-div">
											<Field
												type="password"
												className={`solar-form-input ${
													errors.confirmPassword && touched.confirmPassword
														? "solar-form-input-error"
														: ""
													}`}
												name="confirmPassword"
											/>
											<label htmlFor="confirmPassword" className="solar-form-label">
												confirm password
											</label>
											{errors.confirmPassword && touched.confirmPassword && (
												<div className="solar-form-error-text with-label-error">
													{errors.confirmPassword}
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="row">
										<div className="col-6 solar-input-div">
											<Button
												style={{width: 150}}
												label='confirm'
											/>
										</div>
									</div>
								</div>
							</div>
						</Form>

					)}
				</Formik>
				<div className="row">
					<div className="col-12 col-md-10 col-lg-8 mx-auto">
						<div className="col-12 solar-form-separator"/>
					</div>
				</div>
				<Formik
					initialValues={seedPasswordInitialValues}
					onSubmit={(values, actions) => {
						console.log(values);
					}}
					validationSchema={SeedSecuritySchema}
				>
					{({errors, touched}) => (
						<Form className="solar-form">
							<div className="row">
								<div className="col-12 col-md-10 col-lg-8 mx-auto margin-bottom">
									<div className="component-box-title component-header">
										<span className="-darker">Password Settings</span>
									</div>
									<div className="component-box-title component-header margin-bottom">
										LOGIN PASSWORD
									</div>
									<div className="component-box-text margin-bottom">
										This is the password that you used when you sign up and that you should use to log into the
										platform. It has basic access to your profile information but does not control the funds in your
										account.
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="row">
										<div className="col-6 solar-input-div">
											<Field
												type="password"
												className={`solar-form-input ${
													errors.currentSeedPassword && touched.currentSeedPassword
														? "solar-form-input-error"
														: ""
													}`}
												name="currentSeedPassword"
											/>
											<label htmlFor="currentSeedPassword" className="solar-form-label">
												current seed password
											</label>
											{errors.currentSeedPassword && touched.currentSeedPassword && (
												<div className="solar-form-error-text with-label-error">
													{errors.currentSeedPassword}
												</div>
											)}
										</div>
									</div>
								</div>

								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="row">
										<div className="col-6 solar-input-div">
											<Field
												type="password"
												className={`solar-form-input ${
													errors.newSeedPassword && touched.newSeedPassword
														? "solar-form-input-error"
														: ""
													}`}
												name="newSeedPassword"
											/>
											<label htmlFor="newSeedPassword" className="solar-form-label">
												new seed password
											</label>
											{errors.newSeedPassword && touched.newSeedPassword && (
												<div className="solar-form-error-text with-label-error">
													{errors.newSeedPassword}
												</div>
											)}
										</div>
										<div className="col-6 solar-input-div">
											<Field
												type="password"
												className={`solar-form-input ${
													errors.confirmSeedPassword && touched.confirmSeedPassword
														? "solar-form-input-error"
														: ""
													}`}
												name="confirmSeedPassword"
											/>
											<label htmlFor="confirmSeedPassword" className="solar-form-label">
												confirm seed password
											</label>
											{errors.confirmSeedPassword && touched.confirmSeedPassword && (
												<div className="solar-form-error-text with-label-error">
													{errors.confirmSeedPassword}
												</div>
											)}
										</div>
									</div>
								</div>

							</div>
							<div className="row">
								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="row">
										<div className="col-6 solar-input-div">
											<Button
												style={{width: 150}}
												label='confirm'
											/>
										</div>
									</div>
								</div>
							</div>
						</Form>
					)}
				</Formik>

				<div className="row">
					<div className="col-12 col-md-10 col-lg-8 mx-auto">
						<div className="col-12 solar-form-separator"/>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-10 col-lg-8 mx-auto">
						<div className="row">
							<div className="col-6">
								<button
									type="button"
									className="solar-form-button solar-btn-white"
								>
									back
								</button>
							</div>
							<div className="col-6">
								<button
									type="submit"
									className="solar-form-button solar-btn-normal"
								>
									save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Security;
