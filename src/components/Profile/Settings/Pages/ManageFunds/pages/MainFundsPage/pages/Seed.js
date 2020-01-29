import React from 'react';
import {StyledDescription, StyledSection } from "./styles";
import {StyledSeparator} from "../../../../styles";
import Input from "../../../../../../../UI/SolarForms/Input/InputSimple";
import Button from "../../../../../../../UI/SolarForms/Button/Button";
import {connect} from "react-redux";
import {Http} from "../../../../../../../../services/Http";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {displayErrorAction} from "../../../../../../../../store/actions/actions";

const formSchema = Yup.object().shape({
    email1: Yup.string()
        .email()
        .required("Required"),
    email2: Yup.string()
        .email()
        .required("Required"),
    email3: Yup.string()
        .email()
        .required("Required"),
});

const Seed = ({account, showMessage}) => {

    const handleCreate = (values) => {
        Http.manageSeed(values).subscribe(result => {
            if(result.data && result.data.Code === 200) {
                showMessage('success', 'Emails Sent!');
            }else {
                showMessage('error', 'Error while sending email');
            }
        })
    };


    return (
        <div>
            <StyledDescription>
                Send 2/3 of these to another account in order to recover your seed at a later date
            </StyledDescription>
            <StyledSeparator size={3} />
            <Input placeholder='RANDOM STRING HERE' value={account.RecoveryShares[0]} disabled={true} />
            <Input placeholder='RANDOM STRING HERE' value={account.RecoveryShares[1]} disabled={true} />
            <Input placeholder='RANDOM STRING HERE' value={account.RecoveryShares[2]} disabled={true} />
            <StyledSeparator size={3} />
            <Formik
                initialValues={{email1: "", email2: "", email3: ""}}
                onSubmit={(values, actions) => {
                    handleCreate(values)

                }}
                validationSchema={formSchema}
            >
                {({errors, touched}) => (
                    <Form className="solar-form">
                        <StyledDescription>
                            Fill email addresses:
                        </StyledDescription>
                        <StyledSection>
                            <Field
                                type="text"
                                className={`solar-form-input ${
                                    errors.email1 && touched.email1
                                        ? "solar-form-input-error"
                                        : ""
                                    }`}
                                name="email1"
                                placeholder="Email address 1"
                            />
                            {errors.email1 && touched.email1 ? (
                                <div className="solar-form-error-text">{errors.email1}</div>
                            ) : null}
                        </StyledSection>

                        <StyledSection>
                            <Field
                                type="text"
                                className={`solar-form-input ${
                                    errors.email2 && touched.email2
                                        ? "solar-form-input-error"
                                        : ""
                                    }`}
                                name="email2"
                                placeholder="Email address 2"
                            />
                            {errors.email2 && touched.email2 ? (
                                <div className="solar-form-error-text">{errors.email2}</div>
                            ) : null}
                        </StyledSection>

                        <StyledSection>
                            <Field
                                type="text"
                                className={`solar-form-input ${
                                    errors.email3 && touched.email3
                                        ? "solar-form-input-error"
                                        : ""
                                    }`}
                                name="email3"
                                placeholder="Email address 3"
                            />
                            {errors.email3 && touched.email3 ? (
                                <div className="solar-form-error-text">{errors.email3}</div>
                            ) : null}
                        </StyledSection>
                        <div className="auth-button">
                            <Button
                                style={{width: 214}}
                                variant={'secondary'}
                                label={'send'}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

const mapStateToProps = state => ({
    account: state.profile.user.items,
});

const mapDispatchToProps = dispatch => ({
    showMessage: (type, message) => dispatch(displayErrorAction(type, message)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Seed);
