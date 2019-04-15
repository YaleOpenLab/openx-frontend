import React from "react";
import DivBox from "../../../../General/DivBox/DivBox";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AmountTab = props => {
  const InvestAmountSchema = Yup.object().shape({
    investAmount: Yup.number()
      .min(100, "Smallest Investment possible is $100")
      .max(1000000000, "Amount is too high")
      .required("Investment Amount Can not be empty")
  });
  return (
    <div className="invesc-confirm-amount">
      <div className="container">
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <div className="row">
            <div className="col-12 solar-form-separator" />
            <div className="col-12 invest-confirm-header">
              Define your investment amount
            </div>
            <div className="col-12 invest-confirm-wrapper">
              <div className="col-4 invest-confirm-text">I want to invest:</div>
              <Formik
                initialValues={{ investAmount: props.investmentValue }}
                validationSchema={InvestAmountSchema}
                enableReinitialize
              >
                {({ errors, touched }) => (
                  <Form className="col-8">
                    <div className="solar-input-div">
                      <span className="invest-confirm-input-icon">usd $</span>
                      <Field
                        type="number"
                        className={`solar-form-input invest-confirm-input ${
                          errors.investAmount && touched.investAmount
                            ? "solar-form-input-error"
                            : ""
                        }`}
                        name="investAmount"
                        value={props.investmentValue}
                        onChange={value => props.handleChange(value)}
                      />
                      <label
                        htmlFor="investAmount"
                        className="solar-form-label invest-confirm-label"
                      >
                        minimum - $100 usd
                      </label>
                      {errors.investAmount && touched.investAmount && (
                        <div className="solar-form-error-text">
                          {errors.investAmount}
                        </div>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="col-12 invest-confirm-wrapper">
              <div className="col-4 invest-confirm-text">Investment fee:</div>
              <div className="col-8 invest-confirm-value">$ 0.0</div>
            </div>
            <div className="col-12 invest-confirm-wrapper">
              <div className="col-4 invest-confirm-text uppercase">total:</div>
              <div className="col-8 invest-confirm-value total">
                $ {props.investmentValue.toFixed(1)}
              </div>
            </div>
            <div className="col-12 solar-form-separator" />
            <div className="col-12 invest-confirm-wrapper">
              <div className="col-4 invest-confirm-text">
                Your available balance:
              </div>
              <div className="col-8 invest-confirm-value">
                <div className="confirm-icon wallet-icon" />
                <div className="invest-confirm-value-text">$ 35'052.4</div>
              </div>
            </div>
            <div className="col-12 invest-confirm-wrapper">
              <DivBox
                type="full"
                text={props.account.Name}
                leftIcon="investor-icon"
                label="investor profile"
                rightIcon="profile-edit-icon"
                classes={["big-box"]}
                iconSize="29px"
              />
              <DivBox
                type="open"
                text={props.account.PublicKey}
                label="wallet address"
                classes={["big-box", "light-box"]}
              />
            </div>
            <div className="col-12 solar-form-separator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmountTab;
