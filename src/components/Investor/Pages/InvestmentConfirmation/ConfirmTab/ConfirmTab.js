import React from "react";
import DivBox from "../../../../General/DivBox/DivBox";
import TermsTable from "../../../../Explore/SingleProject/ProjectContent/Terms/TermsTable/TermsTable";
import { DATA } from "../../../../../helpers/enums/temporary-data";
import SwitchButton from "../../../../General/SwitchButton/SwitchButton";
import PageLoading from "../../../../General/Loading/Loading";

const ConfirmTab = props => (
  <div className="invest-confirm-confirm">
    <div className="container">
      <div className="col-12 col-md-10 col-lg-8 mx-auto">
        <div className="row">
          <div className="col-12 solar-form-separator" />
          <div className="col-12 invest-confirm-header">
            Your investment amount
          </div>
          <div className="col-12 invest-confirm-wrapper">
            <div className="col-4 invest-confirm-text uppercase -no-align">
              total:
            </div>
            <div className="col-8 ">
              <div className="invest-confirm-value total">
                $ {props.investmentValue.toFixed(1)}
              </div>
              <DivBox
                type="open"
                label="wallet address"
                text="GCFONE23AB7Y6C5YZOMKUKGETP**************"
                col="12"
                classes={["light-box", "big-box", "label-right", "margin-top"]}
              />
              <div className="row">
                <div className="col-8 invest-confirm-profile-items">
                  <div className="label-right">Available:</div>
                </div>
                <div className="col-4 invest-confirm-profile-values">
                  <span className="-bigger">$35’052.4</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 solar-form-separator" />
          <div className="invest-confirm-header">
            <div className="-center">
              Review Pasto Public School PoC - Investment Terms
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="ProjectContent project-confirm-terms">
        {props.loading ? (
          <PageLoading />
        ) : (
          <section className="Terms">
            <div className="container">
              <div className="row">
                <div className="col-12 text-description">
                  <div className="sub-title">Purpose</div>
                  <div className="sub-desc">
                    {props.data.FEText.terms.description}
                  </div>
                </div>
                <div className="col-12 project-table no-padding">
                  <TermsTable data={props.data && props.data.Terms} />
                </div>
                <div className="col-12 security-note">
                  <div className="security-title">security note</div>
                  <div className="security-text">
                    {DATA.project[0].terms.securityNote}
                    <span className="custom-link-to"> Link ></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
    <div className="container confirm-agree-terms">
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <SwitchButton
            label="I agree with the investment terms above"
            checked={props.agreeTerms}
            handleChange={() => props.handleToggle("agreeTerms")}
            classes={["-left-align"]}
            onLabel="Yes"
            offLabel="No"
          />
        </div>
      </div>
    </div>
  </div>
);

export default ConfirmTab;
