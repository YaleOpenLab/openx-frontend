import React, { Component } from "react";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import StepsForm from "../../../General/StepsForm/StepsForm";
import AmountTab from "./AmountTab/AmountTab";
import "./InvestmentConfirmation.scss";
import ProfileTab from "./ProfileTab/ProfileTab";
import ConfirmTab from "./ConfirmTab/ConfirmTab";
import { fetchProject } from "../../../Explore/SingleProject/store/actions";
import connect from "react-redux/es/connect/connect";
import PageLoading from "../../../General/Loading/Loading";
import { fetchInvestor } from "../../../../pages/Investor/store/actions";
import { Http } from "../../../../services/Http";
import { withSnackbar } from "notistack";
import ROUTES from "../../../../routes/routes";

class InvestmentConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentAmount: 0,
      availableBalance: 35052.4,
      agreeTerms: false,
      brokeDeal: false,
      investCategory: false
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.props.fetchProject(this.props.match.params.id);
    this.props.fetchInvestor();
  };

  componentDidUpdate = prevProps => {
    if ((this.props.project.isLoading !== prevProps.project.isLoading) || (this.props.investor.isLoading !== prevProps.investor.isLoading) ) {
      this.setState({
        investor: this.props.investor.items,
        loading: this.props.project.isLoading || this.props.investor.isLoading,
        project: this.props.project.items
      });
    }
  };

  handleInvestmentChange = el => {
    this.setState({
      investmentAmount: Number(el.target.value)
    });
  };

  handleConfirm = () => {
    Http.investorInvest(
      this.props.match.params.id,
      this.state.investmentAmount
    ).subscribe(
      () => {
        this.props.enqueueSnackbar("Transaction completed!", {
          variant: "success",
          autoHideDuration: 3000
        });
      },
      error =>
        this.props.enqueueSnackbar("Transaction failed!", {
          variant: "error",
          autoHideDuration: 3000
        })
    );
    this.props.enqueueSnackbar(
      "Transaction is being sent. Please allow up to 30 seconds for a confirmation.",
      {
        variant: "warning",
        autoHideDuration: 3000
      }
    );
    this.props.history.push(ROUTES.INVESTOR_PAGES.DASHBOARD);
  };

  handleToggleChange = (key) => {
    this.setState(prevState => ({
      [key]: !prevState[key]
    }));
  };

  validateForm = value => {
    return !(value > this.state.availableBalance || value < 100);
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
                disabledNext={!this.validateForm(this.state.investmentAmount)}
                disabledConfirm={!this.state.agreeTerms}
              >
                <AmountTab
                  key={1}
                  handleChange={this.handleInvestmentChange}
                  investmentValue={this.state.investmentAmount}
                  account={investor.U}
                />
                <ProfileTab
                  key={2}
                  investmentValue={this.state.investmentAmount}
                  account={investor.U}
                  brokeDeal={this.state.brokeDeal}
                  investCategory={this.state.investCategory}
                  handleToggle={this.handleToggleChange}
                />
                <ConfirmTab
                  key={3}
                  investmentValue={this.state.investmentAmount}
                  data={project}
                  loading={loading || project.length === 0}
                  handleToggle={this.handleToggleChange}
                  agreeTerms={this.state.agreeTerms}
                />
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
)(withSnackbar(InvestmentConfirmation));
