import React from "react";
import Button from "../../../../UI/SolarForms/Button/Button";

const Invest = props => (
  <div className="Invest">
    <div className="container">
      <div className="row">
        <div className="col-md-3 mx-auto">
          <div className="solar-button-fixed-width">
            <button link="#" className="solar-form-button solar-btn-normal">
              invest
            </button>
          </div>
        </div>
        <div className="col-md-3 mx-auto">
          <div className="solar-button-fixed-width">
            <button link="#" className="solar-form-button solar-btn-white">
              bundle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Invest;
