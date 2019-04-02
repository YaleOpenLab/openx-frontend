import React from "react";
import { STAGES } from '../../../../../../helpers/enums/stages';

const DevelopmentStage = props => {
  const data = props.data;
  let stageItems = null;

  if (data.stages) {
    stageItems = data.stages.map(stage => {
      let stageClass = "ds-full";

      if (stage.index < props.currentStage) {
        stageClass = "ds-full";
      } else if (stage.index === props.currentStage) {
        stageClass = "ds-current";
      } else {
        stageClass = "ds-empty";
      }
      return (
        <div className="col-xs-1-10" key={stage.index}>
          <div className="ds-count">{stage.index}</div>
          <div className={`ds-ball ${stageClass}`} />
          {stage.index < 7 ? (
            <div className="ds-line" />
          ) : stage.index === 7 ? (
            <React.Fragment>
              <div className="ds-line-half" />
              <div className="ds-dashed-line-half-right" />
            </React.Fragment>
          ) : (
            <div className="ds-dashed-line-half-left" />
          )}
          <div className="ds-title">{STAGES[stage.index]}</div>
          <div className="ds-date">{stage.date}</div>
        </div>
      );
    });
  }

  return (
    <div className="DevelopmentStage">
      <div className="row ds-chart">
        <div className="col-xs-1-10">
          <img className="ds-image" src={data.imageUrl} alt="placeholder" />
        </div>
        {stageItems}
      </div>
    </div>
  );
};

export default DevelopmentStage;
