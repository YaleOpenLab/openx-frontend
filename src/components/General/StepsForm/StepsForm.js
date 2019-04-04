import React, { Component } from "react";
import "./StepsForm.scss";
import StepsFormHeader from "./StepsFormHeader/StepsFormHeader";

class StepsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  scrollTop = () => {
    this.head = document.getElementsByClassName("steps-container")[0];
    this.head.scrollIntoView();
  };

  goNext = () => {
    this.scrollTop();
    if (this.state.step < this.props.children.length) {
      this.setState(prevState => ({
        step: prevState.step + 1
      }));
    }
  };

  goBack = () => {
    this.scrollTop();
    if (this.state.step > 1) {
      this.setState(prevState => ({
        step: prevState.step - 1
      }));
    }
  };

  render() {
    const { tabs, children } = this.props;
    let content = null;
    let buttons = null;

    if (!children) {
      return <div>empty form</div>;
    }

    if (children) {
      content = children.find(item => {
        if (parseInt(item.key) === this.state.step) {
          return true;
        }
        return false;
      });
    }

    if (this.state.step > 1 && this.state.step < children.length) {
      buttons = (
        <React.Fragment>
          <div className="col-6">
            <button
              className="solar-form-button solar-btn-normal"
              onClick={this.goBack}
              type="button"
            >
              previous
            </button>
          </div>
          <div className="col-6">
            <button
              className="solar-form-button solar-btn-normal"
              onClick={this.goNext}
              type="button"
              disabled={this.props.disabledNext}
            >
              next
            </button>
          </div>
        </React.Fragment>
      );
    } else if (this.state.step < children.length) {
      buttons = (
        <React.Fragment>
          <div className="col-6">
            <button
              className="solar-form-button solar-btn-normal"
              onClick={this.goNext}
              type="button"
              disabled={this.props.disabledNext}
            >
              next
            </button>
          </div>
        </React.Fragment>
      );
    } else {
      buttons = (
        <React.Fragment>
          <div className="col-6">
            <button
              className="solar-form-button solar-btn-normal"
              onClick={this.goBack}
              type="button"
              disabled={this.props.loading}
            >
              previous
            </button>
          </div>
          <div className="col-6">
            <button
              className="solar-form-button solar-btn-normal"
              onClick={this.props.handleSave}
              type="button"
              disabled={this.props.disabledConfirm || this.props.loading}
            >
              {this.props.saveText ? this.props.saveText : "save"}
            </button>
          </div>
        </React.Fragment>
      );
    }

    return (
      <div className="MultiSteps">
        <div className="solar-form">
          <div className="container">
            <StepsFormHeader
              tabs={tabs}
              active={this.state.step}
              classes={this.props.classes}
              separator={this.props.separator}
            />
          </div>
          <div className="col-12 mx-auto">
            <div className="row  justify-content-center">
              <div className="col-12">{content}</div>
              <div className="container">
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                  <div className="row justify-content-end">{buttons}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StepsForm;
