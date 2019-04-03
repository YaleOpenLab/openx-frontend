import React from 'react';
import { Link } from 'react-router-dom';

const Invest = props => (
  <div className="Invest">
    <div className="container">
      <div className="row">
        <div className="col-md-3 mx-auto">
          <div className="solar-button-fixed-width">
            <Link to={`/investor/${props.data.Index}/confirm`}>
              <button className="solar-form-button solar-btn-normal"
                      disabled={props.data && props.data.Stage && props.data.Stage > 4}>
                invest
              </button>
            </Link>
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
