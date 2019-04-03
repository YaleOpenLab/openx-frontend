import React, { Component } from "react";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import StepsForm from "../../../General/StepsForm/StepsForm";
import AmountTab from "./AmountTab/AmountTab";
import "./InvestmentConfirmation.scss";
import ProfileTab from "./ProfileTab/ProfileTab";
import ConfirmTab from "./ConfirmTab/ConfirmTab";
import { fetchProject } from '../../../Explore/SingleProject/store/actions';
import connect from 'react-redux/es/connect/connect';
import PageLoading from '../../../General/Loading/Loading';
import { fetchInvestor } from '../../../../pages/Investor/store/actions';

class InvestmentConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentAmount: 0
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.fetchProject(this.props.match.params.id);
    this.props.fetchInvestor();
  };

  componentDidUpdate = prevProps => {
    if (this.props.project.isLoading !== prevProps.project.isLoading) {
      this.setState({
        investor: this.props.investor.items,
        loading: this.props.project.isLoading || this.props.investor.isLoading,
        project: this.props.project.items,
      });
    }
  };

  handleInvestmentChange = el => {
    this.setState({
      investmentAmount: Number(el.target.value)
    });
  };

  handleConfirm = () => {
    //TODO: handle confirmation
  };

  render() {
    const { investor, loading, project } = this.state;
    return (
      <div className="investment-confirmation">
        {!project || loading ? (
          <PageLoading />
        ) : (
          <>
            <div className="d-flex justify-content-center">
              <ProjectInfo project={project} />
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
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  fetchInvestor: () => dispatch(fetchInvestor()),
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvestmentConfirmation);
