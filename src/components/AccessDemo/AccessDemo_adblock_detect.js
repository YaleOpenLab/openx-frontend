import React, { Component } from "react";
import "./AccessDemo.scss";
import { withSnackbar } from "notistack";

class AccessDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      accessCode: "demodemo",
      adBlockDetected: false
    };
    this.detectAdBlocker = this.detectAdBlocker.bind(this);
  }

  componentDidMount() {
    this.detectAdBlocker();
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

  componentWillUpdate(nextProps, nextState) {
    if (this.props.pathname !== nextProps.pathname) {
      this.detectAdBlocker();
    }
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

  // Adblock detection
  detectAdBlocker() {
    const head = document.getElementsByTagName('head')[0];

    const noAdBlockDetected = () => {
      this.setState({
        adBlockDetected: false
      });
    };

    const adBlockDetected = () => {
      this.setState({
        adBlockDetected: true
      });
    };

    // clean up stale bait
    const oldScript =
        document.getElementById('adblock-detection');
    if (oldScript) {
      head.removeChild(oldScript);
    }

    // we will dynamically generate some 'bait'.
    const script = document.createElement('script');
    script.id = 'adblock-detection';
    script.type = 'text/javascript';
    script.src = '/adframe.js'; // changed name of bait; seems ads.js was considered safe.
    script.onload = noAdBlockDetected;
    script.onerror = adBlockDetected;
    head.appendChild(script);
  }

  noticeContentJSX() {
    return (
        <div id="adblock-notice">
          <div className="message">
            <h3>Hey, you!</h3>
            <p>Your adblocker is on again.</p>
            <button
                onClick={this.detectAdBlocker}
            >
              Check for Adblocker again
            </button>
          </div>
        </div>
    );
  }


  render() {
    return (
        <div id="adblock-wrapper">
          { this.state.adBlockDetected
              ? this.noticeContentJSX()
              :
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
          }
        </div>


    );
  }
}

export default withSnackbar(AccessDemo);
