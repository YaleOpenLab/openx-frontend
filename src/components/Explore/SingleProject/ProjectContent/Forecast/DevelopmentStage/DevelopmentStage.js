import React from "react";

const DevelopmentStage = props => {
  return (
    <div className="DevelopmentStage">
      <div className="row ds-chart">
        <div className="col-xs-1-10">
            <img className="ds-image" src="https://via.placeholder.com/50x50" alt="placeholder" />
        </div>
        <div className="col-xs-1-10">
          <div className="ds-count">0</div>
          <div className="ds-ball ds-full" />
          <div className="ds-line" />
          <div className="ds-title">Handshake</div>
          <div className="ds-date">Date</div>
        </div>
        <div className="col-xs-1-10">
          <div className="ds-count">1</div>
          <div className="ds-ball ds-full" />
          <div className="ds-line" />
          <div className="ds-title">Engagement</div>
          <div className="ds-date">Date</div>
        </div>
        <div className="col-xs-1-10">
          <div className="ds-count">2</div>
          <div className="ds-ball ds-full" />
          <div className="ds-line" />
          <div className="ds-title">Quotes</div>
          <div className="ds-date">Date</div>
        </div>
        <div className="col-xs-1-10">
          <div className="ds-count">3</div>
          <div className="ds-ball ds-full" />
          <div className="ds-line" />
          <div className="ds-title">contracts</div>
          <div className="ds-date">Date</div>
        </div>
        <div className="col-xs-1-10">
          <div className="ds-count">4</div>
          <div className="ds-ball ds-full" />
          <div className="ds-line" />
          <div className="ds-title">the raise</div>
          <div className="ds-date">Date</div>
        </div>
        <div className="col-xs-1-10">
          <div className="ds-count">5</div>
          <div className="ds-ball ds-current" />
          <div className="ds-line" />
          <div className="ds-title">construction</div>
          <div className="ds-date">Date</div>
        </div>
        <div className="col-xs-1-10">
          <div className="ds-count">6</div>
          <div className="ds-ball ds-empty" />
          <div className="ds-line" />
          <div className="ds-title">interconnection</div>
          <div className="ds-date">Date</div>
        </div>
        <div className="col-xs-1-10">
          <div className="ds-count">7</div>
          <div className="ds-ball ds-empty" />
          <div className="ds-line-half" />
          <div className="ds-dashed-line-half-right" />
          <div className="ds-title">legacy</div>
          <div className="ds-date">Date</div>
        </div>
        <div className="col-xs-1-10">
          <div className="ds-count">8</div>
          <div className="ds-ball ds-empty" />
          <div className="ds-dashed-line-half-left" />
          <div className="ds-title">the flip</div>
          <div className="ds-date">Date</div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentStage;
