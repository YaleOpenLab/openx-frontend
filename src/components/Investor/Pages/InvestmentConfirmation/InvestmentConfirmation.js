import React, { Component } from "react";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import StepsForm from "../../../General/StepsForm/StepsForm";
import AmountTab from "./AmountTab/AmountTab";
import "./InvestmentConfirmation.scss";
import ProfileTab from "./ProfileTab/ProfileTab";

class InvestmentConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentAmount: 0
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  handleInvestmentChange = el => {
    this.setState({
      investmentAmount: Number(el.target.value)
    });
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
                separator={false}
                classes={["bigger-fonts"]}
              >
                <AmountTab
                  key={1}
                  handleChange={this.handleInvestmentChange}
                  investmentValue={this.state.investmentAmount}
                />
                <ProfileTab
                  key={2}
                  investmentValue={this.state.investmentAmount}
                />
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
