import React, { Component } from "react";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import StepsForm from "../../../General/StepsForm/StepsForm";
import AmountTab from "./AmountTab/AmountTab";
import "./InvestmentConfirmation.scss";
import ProfileTab from "./ProfileTab/ProfileTab";
import ConfirmTab from "./ConfirmTab/ConfirmTab";
import { connect } from "react-redux";
import { fetchProject } from "../../../Explore/SingleProject/store/actions";

class InvestmentConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentAmount: 0,
      availableBalance: 35052.4
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.fetchProject(this.props.match.params.id);
  };

  handleInvestmentChange = el => {
    this.setState({
      investmentAmount: Number(el.target.value)
    });
  };

  handleConfirm = () => {
    //TODO: handle confirmation
  };

  validateForm = value => {
    if(value > this.state.availableBalance || value < 100) {
      return false;
    }else{
      return true;
    }
  }

  render() {
    return (
      <div className="investment-confirmation">
        <div className="d-flex justify-content-center">
          <ProjectInfo
            data={this.props.project}
            loading={this.props.loading || this.props.project.length === 0}
          />
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
            disabled={!this.validateForm(this.state.investmentAmount)}
          >
            <AmountTab
              key={1}
              handleChange={this.handleInvestmentChange}
              investmentValue={this.state.investmentAmount}
            />
            <ProfileTab key={2} investmentValue={this.state.investmentAmount} />
            <ConfirmTab
              key={3}
              investmentValue={this.state.investmentAmount}
              data={this.props.project}
              loading={this.props.loading || this.props.project.length === 0}
            />
          </StepsForm>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project.items,
  loading: state.project.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvestmentConfirmation);
