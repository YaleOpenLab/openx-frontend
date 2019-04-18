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
          <div className="ds-title">
            <a href="#" title={stage.index === 0? "Stage 0 description" :
              stage.index === 1 ? "The project is in stage 1, where the project idea is still udner discussion but main parties hae defined and verbal agreements have been achieved. Pre feasibility assessments are being doen in order to have a RFP to receive formal quotes from developers. This stage has high investment risk since formal contracts and final quotes have not been defined." :
              stage.index === 2 ? "The project is in stage 2, where overall project idea and parties have been defined but quotes are needed to advance on a defined budget. This stage means there is already a 'Request for Proposal' document and has cleared feasbility reports. If the report uses a public tender, contractors are able to bid through the platform." :
              stage.index === 3 ? "Stage 3 description" :
              stage.index === 4 ? "The project is in stage 4, meaning all major contracts and quotes relating to total proejct cost have been processed and signed. Your investment at this stage has less risk since financial projections are more detailed than earlier stages. However, risks may occur during the construction periods and some solar contracts do not have warranties against these." :
              stage.index === 5 ? "Stage 5 description" :
              stage.index === 6 ? "Stage 6 description" :
              stage.index === 7 ? "The project is in legacy stage, also known as O&M for Operations and Management. This means the system has been successfully funded and deployed, and the receiver is making payments appropriately" :
              stage.index === 8 ? "The project is in stage 8, which means that there has been an  ownership flip. Ownership flips can happen when a tax equity investor is involved in a project company, when a pay-to-own model is able to cover the investment principle, when a bond matures or when an equity based investment with convertible notes allows premium stock holders (normally community members) to buy the positiion of equity investors" :
              "default tooltip"
            }>
              {STAGES[stage.index]}
            </a>
          </div>
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
