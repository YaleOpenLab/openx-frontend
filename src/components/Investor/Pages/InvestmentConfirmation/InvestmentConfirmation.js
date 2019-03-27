import React, { Component } from "react";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import StepsForm from "../../../General/StepsForm/StepsForm";

class InvestmentConfirmation extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="investment-confirmation">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <ProjectInfo />
            </div>
            <div className="col-12">
              <StepsForm
                tabs={[
                  { name: "amount", key: 1 },
                  { name: "profile", key: 2 },
                  { name: "config", key: 3 }
                ]}
              >
                <div key={1}>1</div>
                <div key={2}>2</div>
                <div key={3}>3</div>
              </StepsForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InvestmentConfirmation;
