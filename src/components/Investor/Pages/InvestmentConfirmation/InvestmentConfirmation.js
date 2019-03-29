import React, { Component } from "react";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import StepsForm from "../../../General/StepsForm/StepsForm";
import AmountTab from "./AmountTab/AmountTab";
import "./InvestmentConfirmation.scss";
import ProfileTab from "./ProfileTab/ProfileTab";
import ConfirmTab from "./ConfirmTab/ConfirmTab";

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

  handleConfirm = () => {
    //TODO: handle confirmation
  }

  render() {
    return (
      <div className="investment-confirmation">
        <div className="d-flex justify-content-center">
          <ProjectInfo />
        </div>
        <div className="">
          <StepsForm
            name="confirm"
            tabs={[
              { name: "amount", key: 1 },
              { name: "profile", key: 2 },
              { name: "confirm", key: 3 }
            ]}
            separator={false}
            classes={["bigger-fonts"]}
            saveText="confirm"
            handleSave={this.handleConfirm}
          >
            <AmountTab
              key={1}
              handleChange={this.handleInvestmentChange}
              investmentValue={this.state.investmentAmount}
            />
            <ProfileTab key={2} investmentValue={this.state.investmentAmount} />
            <ConfirmTab key={3} investmentValue={this.state.investmentAmount} />
          </StepsForm>
        </div>
      </div>
    );
  }
}

export default InvestmentConfirmation;
