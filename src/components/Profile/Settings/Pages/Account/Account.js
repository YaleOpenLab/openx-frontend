import React, {Component} from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";
import {updateUserAccount} from "../../../store/actions";
import {withSnackbar} from "notistack";
import RadioButton from "../../../../UI/SolarForms/RadioButton/RadioButton";

const AccountSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string()
		.email("Invalid email")
		.required("Required")
});

class Account extends Component {
	state = {
		initialValues: {
			username: this.props.account && this.props.account.Username,
			name: this.props.account && this.props.account.Name,
			email: this.props.account && this.props.account.Email,
			address: this.props.account && this.props.account.Address,
			country: this.props.account && this.props.account.Country,
			city: this.props.account && this.props.account.City,
			zipcode: this.props.account && this.props.account.ZipCode
		}
	};

	handleSubmit = values => {
		this.props.updateUserAccount(values);
	};

	render() {
		return (
			<div className="ProfileAccount">
				<div className="row">
					<div className="col-12 col-md-10 col-lg-8 mx-auto ">
						<div className="component-box-title component-header">
							<span className="-darker">Your Individual Profile</span>
						</div>
						<div className="component-box-text">
							<span>Your profile as an individual.</span> Everyone operating through the opensolar platform needs to
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
						username: this.props.account && this.props.account.Username,
						name: this.props.account && this.props.account.Name,
						email: this.props.account && this.props.account.Email,
						address: this.props.account && this.props.account.Address,
						country: this.props.account && this.props.account.Country,
						city: this.props.account && this.props.account.City,
						zipcode: this.props.account && this.props.account.ZipCode
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
						this.handleSubmit(sendValues, actions)
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
													errors.fullName && touched.fullName
														? "solar-form-input-error"
														: ""
													}`}
												name="name"
											/>
											<label htmlFor="name" className="solar-form-label">
												full name
											</label>
											{errors.fullName && touched.fullName && (
												<div className="solar-form-error-text with-label-error">
													{errors.fullName}
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
								<div className="col-12 col-md-10 col-lg-8 mx-auto ">
									<div className="component-box-title component-header">
										<span className="-darker">Your User Profile</span>
									</div>
									<div className="component-box-text">
										<span>How will you use the opensolar platform?</span>
									</div>
									<div className="component-box-text">
										This will create accounts and dashboard associated to your Profile and Entity. Only select those
										that you are sure you will use. You can select multiple options.
									</div>
									<div className="component-box-content">
										<RadioButton name="INVESTOR" label="INVESTOR: I will directly invest in solar projects as myself."/>
										<RadioButton name="RECEIVER" label="RECEIVER: I will receive a solar array and pay its electricity generation to own it. "/>
										<RadioButton name="DEVELOPER" label="DEVELOPER: I will install a solar system or provide professional services for its installation, operation or maintenance. "/>
										<RadioButton name="VISITOR" label="VISITOR: Im just exploring the platform's functionalities for review purpose. "/>
									</div>
								</div>
								<div className="col-12 col-md-10 col-lg-8 mx-auto ">
									<div className="col-12 solar-form-separator"/>
								</div>
							</div>

							<div className="row">
								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="row">
										<div className="col-6">
											<button
												type="submit"
												className="solar-form-button solar-btn-normal"
												disabled={
													this.props.loading ||
													(errors.email && touched.email) ||
													(errors.name && touched.name)
												}
											>
												save
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
	}
}

const mapStateToProps = state => ({
	account: state.profile.account.items,
	loading: state.profile.account.isLoading,
	updateStatus: state.profile.account.updateStatus
});

const mapDispatchToProps = dispatch => ({
	updateUserAccount: payload => dispatch(updateUserAccount(payload))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withSnackbar(Account));
