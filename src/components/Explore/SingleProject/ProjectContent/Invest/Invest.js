import React from 'react';
import { Link } from 'react-router-dom';

const Invest = ({data}) => (
  <div className="Invest">
    <div className="container">
      <div className="row">
        <div className="col-md-3 mx-auto">
          <div className="solar-button-fixed-width">
            <Link to={`/investor/${data.Index}/confirm`}>
              <button className="solar-form-button solar-btn-normal"
                      disabled={data.Stage && data.Stage > 4}>
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
