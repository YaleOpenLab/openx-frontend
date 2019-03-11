import React, { Component } from "react";

class InvestorComponent extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 border ">
                    <div className="component-box-title">Portfolio Summary</div>
                    <div className="component-box-content">Portfolio Summary</div>
                </div>
                <div className="col-9 border "></div>
            </div>
        </div>
    );
  }
}

export default InvestorComponent;
