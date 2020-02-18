import React, { useState } from "react";
import {
  StyledDescription,
  StyledActions,
  StyledError,
  StyledSection
} from "./styles";
import { StyledSeparator } from "../../../../styles";
import Select from "../../../../../../../UI/SolarForms/Select/Select";
import Input from "../../../../../../../UI/SolarForms/Input/InputSimple";
import Button from "../../../../../../../UI/SolarForms/Button/Button";
import { displayErrorAction } from "../../../../../../../../store/actions/actions";
import { connect } from "react-redux";
import { Http } from "../../../../../../../../services/Http";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ConfirmModal from "../../../../../../../UI/ConfirmModal/ConfirmModal";

const formSchema = Yup.object().shape({
  assetCode: Yup.string().required("Required"),
  assetIssuer: Yup.string().required("Required"),
  limit: Yup.string().required("Required")
});

const P2P = ({ account, showMessage }) => {
  const [open, setOpen] = useState(false);
  const [seedpwd, setSeedpwd] = useState("");
  const [tempValues, setValues] = useState(null);

  const handleCreate = () => {
    setOpen(false);

    const sendValues = {
      ...tempValues,
      seedpwd: seedpwd
    };

    Http.manageP2P(sendValues).subscribe(result => {
      if (result && result.status === 200 && typeof result.data == "string") {
        showMessage("success", "Limit expansion succeeded!");
      } else {
        showMessage("error", "Error while expanding limit");
      }
    });
  };

  return (
    <div>
      {open && (
        <ConfirmModal
          title="Enter seed password"
          onConfirm={handleCreate}
          onCancel={() => setOpen(false)}
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
      <StyledDescription>
        You can create and send assets to other accounts
      </StyledDescription>
      <StyledSeparator size={3} />
      <StyledSeparator noBorder size={3} />
      <Formik
        initialValues={{ assetCode: "", assetIssuer: "", limit: "" }}
        onSubmit={(values, actions) => {
          setOpen(true);
          setValues(values);
        }}
        validationSchema={formSchema}
      >
        {({ errors, touched }) => (
          <Form className="solar-form">
            <StyledSection>
              <Field
                type="text"
                className={`solar-form-input ${
                  errors.assetCode && touched.assetCode
                    ? "solar-form-input-error"
                    : ""
                }`}
                name="assetCode"
                placeholder="Enter Code"
              />
              {errors.assetCode && touched.assetCode ? (
                <div className="solar-form-error-text">{errors.assetCode}</div>
              ) : null}
            </StyledSection>

            <StyledSection>
              <Field
                type="text"
                className={`solar-form-input ${
                  errors.assetIssuer && touched.assetIssuer
                    ? "solar-form-input-error"
                    : ""
                }`}
                name="assetIssuer"
                placeholder="Enter Issuer Public key"
              />
              {errors.assetIssuer && touched.assetIssuer ? (
                <div className="solar-form-error-text">
                  {errors.assetIssuer}
                </div>
              ) : null}
            </StyledSection>

            <StyledSection>
              <Field
                type="text"
                className={`solar-form-input ${
                  errors.limit && touched.limit ? "solar-form-input-error" : ""
                }`}
                name="limit"
                placeholder="Enter limit"
              />
              {errors.limit && touched.limit ? (
                <div className="solar-form-error-text">{errors.limit}</div>
              ) : null}
            </StyledSection>
            <div className="auth-button">
              <Button
                style={{ width: 214 }}
                variant={"secondary"}
                label={"confirm"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = state => ({
  account: state.profile.user.items
});

const mapDispatchToProps = dispatch => ({
  showMessage: (type, message) => dispatch(displayErrorAction(type, message))
});

export default connect(mapStateToProps, mapDispatchToProps)(P2P);
