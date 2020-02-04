import React from "react";
import DivBox from "../../../../General/DivBox/DivBox";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AmountTab = ({project, investmentValue, usdbalance, account, handleChange}) => {
  const maxInvestment = project.TotalValue - project.MoneyRaised ;
  const seedInvestmentCap = project["SeedInvestmentCap"];
  const InvestAmountSchema = Yup.object().shape({
    investAmount: Yup.number()
      .min(100, "Smallest investment is $100")
      .max(project.Stage < 3 ? seedInvestmentCap < maxInvestment ? seedInvestmentCap : maxInvestment : maxInvestment, project.Stage < 4 ? seedInvestmentCap < maxInvestment? "Amount is higher than seed investment cap": "Amount greater than investment required" : "Amount greater than investment required")
      .required("Investment amount can not be empty")
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
                initialValues={{ investAmount: investmentValue }}
                validationSchema={InvestAmountSchema}
                enableReinitialize
              >
                {({ errors, touched }) => (
                  <Form className="col-8">
                    <div className="solar-input-div">
                      <span className="invest-confirm-input-icon">USD</span>
                      <Field
                        type="number"
                        className={`solar-form-input invest-confirm-input ${
                          errors.investAmount && touched.investAmount
                            ? "solar-form-input-error"
                            : ""
                        }`}
                        name="investAmount"
                        value={investmentValue}
                        onChange={value => handleChange(value)}
                      />
                      <label
                        htmlFor="investAmount"
                        className="solar-form-label invest-confirm-label"
                      >
                        Investment Range: $100 to
                        ${project.Stage < 4 ? seedInvestmentCap : maxInvestment}
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
                $ {investmentValue.toFixed(1)}
              </div>
            </div>
            <div className="col-12 solar-form-separator" />
            <div className="col-12 invest-confirm-wrapper">
              <div className="col-4 invest-confirm-text">
                Your available balance:
              </div>
              <div className="col-8 invest-confirm-value">
                <div className="confirm-icon wallet-icon" />
                  <div className="invest-confirm-value-text">$ {usdbalance || '0 (Auto-Exchange Enabled)'}</div>
              </div>
            </div>
            <div className="col-12 invest-confirm-wrapper">
              <DivBox
                type="full"
                text={account && account.Name}
                leftIcon="investor-icon"
                label="investor profile"
                rightIcon="profile-edit-icon"
                classes={["big-box"]}
                iconSize="29px"
              />
              <DivBox
                type="open"
                text={account && account.StellarWallet && account.StellarWallet.PublicKey}
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
