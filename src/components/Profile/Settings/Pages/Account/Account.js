import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { fetchUserAccount, updateUserAccount } from "../../../store/actions";
import { withSnackbar } from "notistack";

const AccountSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValues: {
        username: "",
        name: "",
        email: "",
        address: "",
        country: "",
        city: "",
        zipcode: 0
      }
    };
  }

  componentDidMount = () => {
    this.props.fetchUserAccount({
      username: this.props.username,
      password: this.props.password
    });
  };

  componentDidUpdate = prevProps => {
    if (this.props.account !== prevProps.account) {
      const account = this.props.account;
      let newValues = {
        username: account.Username,
        name: account.Name,
        email: account.Email,
        address: account.Address,
        country: account.Country,
        city: account.City,
        zipcode: account.ZipCode
      };
      this.setState({
        initialValues: newValues
      });
    }
    if (this.props.updateStatus !== prevProps.updateStatus) {
      if (this.props.updateStatus && this.props.updateStatus.Code === 200) {
        this.props.enqueueSnackbar("User Account Updated", {
          variant: "success",
          autoHideDuration: 1500
        });
      }
    }
  };

  handleSubmit = values => {
    this.props.updateUserAccount({
      username: this.props.username,
      password: this.props.password,
      data: values
    });
  };

  render() {
    return (
      <div className="ProfileAccount">
        <Formik
          initialValues={this.state.initialValues}
          onSubmit={(values, actions) => this.handleSubmit(values, actions)}
          validationSchema={AccountSchema}
          enableReinitialize
        >
          {({ errors, touched, resetForm }) => (
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

                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  <div className="row">
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

                <div className="col-12 col-md-10 col-lg-8 mx-auto ">
                  <div className="col-12 solar-form-separator" />
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
                  <div className="col-12 solar-form-separator" />
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        className="solar-form-button solar-btn-white"
                        onClick={() => resetForm(this.state.initialValues)}
                      >
                        reset
                      </button>
                    </div>
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
  fetchUserAccount: payload => dispatch(fetchUserAccount(payload)),
  updateUserAccount: payload => dispatch(updateUserAccount(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(Account));
