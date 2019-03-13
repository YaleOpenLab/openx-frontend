import React from "react";
import Button from "../../../../UI/SolarForms/Button/Button";

const Invest = props => {
  return (
    <div className="Invest">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mx-auto">
            <Button
              link="#"
              name="invest"
              style={{
                margin: "15px auto",
                display: "block"
              }}
            />
          </div>
          <div className="col-md-3 mx-auto">
            <Button
              link="#"
              name="bundle"
              style={{
                margin: "15px auto",
                display: "block"
              }}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
