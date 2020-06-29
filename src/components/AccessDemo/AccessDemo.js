import React, { Component } from "react";
import "./AccessDemo.scss";
import { withSnackbar } from "notistack";

class AccessDemo extends Component {
  state = {
    userInput: "",
    accessCode: "demodemo"
  }

  componentDidMount() {
    document.addEventListener("keyup", event => {
      if (event.key === 'Enter') {
       this.handleAccessGrant();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup',event => {
      if (event.key === 'Enter') {
        this.handleAccessGrant();
      }
    });
  }

  handleInputChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  handleAccessGrant = () => {
    if (this.state.userInput === this.state.accessCode) {
      localStorage.setItem("access-granted", true);
      this.props.grantAccess(true);
      this.props.enqueueSnackbar("Demo Access Granted!", {
        variant: "success",
        autoHideDuration: 1500
      });
    } else {
      this.props.enqueueSnackbar("Incorrect Access Code!", {
        variant: "error",
        autoHideDuration: 1500
      });
    }
  };

  render() {
    return (
      <div className="AccessDemo">
        <div className="demo-wrapper">
          <div className="demo-title">Access the OpenSolar Demo Site</div>
          <div className="demo-input">
            <div className="inner-addon left-addon">
              <i className="solar-icon user-icon" />
              <input
                  type="text"
                  placeholder="Visitor Access Code"
                  className="solar-form-input"
                  value={this.state.userInput}
                  onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="demo-button">
            <button
                type="button"
                className="solar-form-button solar-btn-normal"
                onClick={this.handleAccessGrant}
            >
              access
            </button>
          </div>
        </div>
      </div>
   );
  }
}

export default withSnackbar(AccessDemo);
