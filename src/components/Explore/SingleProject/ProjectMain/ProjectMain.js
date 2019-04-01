import React from 'react';
import ProgressBar from '../../../General/ProgressBar/ProgressBar';
import './ProjectMain.scss';
import percentage from '../../../../helpers/functions/percentage';
import { STAGES } from '../../../../helpers/enums/stages';

const ProjectMain = props => {
  const data = props.data;
  const batteryArray = data.Batteries.split(' ');

  return (
    <div className="container project-main">
      <div className="row">
        <div className="col-sm-12 col-md-7 order-md-1 order-sm-1 no-padding">
          <div className="project-main-image project-main-display-image">
            <img src={data.DPIntroImage} alt="Project"/>
          </div>
        </div>

        <div className="col-sm-12 col-md-7 order-md-3 order-sm-2 no-padding">
          <div className="project-main-image project-main-choose-image">
            <div className="container">
              <div className="row mx-auto">
                <div className="col-3 mx-auto no-padding">
                  <img src={data.DPIntroImage} alt="Project"/>
                </div>
                <div className="col-3 mx-auto no-padding">
                  <img src={data.DPIntroImage} alt="Project"/>
                </div>
                <div className="col-3 mx-auto no-padding">
                  <img src={data.DPIntroImage} alt="Project"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-5 order-md-2 order-sm-3  no-padding">
          <button className="watch-button">
            <div className="watch-icon"/>
          </button>

          <div className="projects-description-box container">
            <div className="desc-status">
              Stage {props.data.Stage} | {STAGES[props.data.Stage]}
            </div>
            <div className="desc-title">{data.Name}</div>
            <div className="desc-location">
              <div className="projects-location-icon location-icon"/>
              {data.State}, {data.Country}
            </div>
            <div className="projects-description__spread">
              <div className="desc-category desc-category-separator desc-cat-category">
                {data.InvestmentType}
              </div>
              <div className="desc-category desc-category-separator desc-gen-location">
                {data.BrokerDealer}
              </div>
            </div>

            <div className="desc-description">
              {data.Metadata}
              <div className="desc-description-buttons">
                <ul>
                  <li>{data.Bullets.Bullet1}</li>
                  <li>{data.Bullets.Bullet2}</li>
                  <li>{data.Bullets.Bullet3}</li>
                </ul>
              </div>
            </div>
            <div className="specifics-box">
              <div className="container">
                <div className="row">
                  <div className="col-6 spec-first-price spec-price-bigger">
                    ${data.MoneyRaised}
                  </div>
                  <div className="col-6 spec-second-price spec-price-bigger">
                    ${data.TotalValue}
                  </div>
                  <div className="col-12 ">
                    <ProgressBar
                      progress={percentage(data.MoneyRaised, data.TotalValue)}
                    />
                  </div>
                  <div className="col-12">
                    <div className="projects-description__stats">
                      <div className="-primary-color">
                        <p>{data.PanelSize}</p>
                        <h6>Solar</h6>
                      </div>
                      <div className="-dark-color">
                        <p>{batteryArray ? batteryArray[batteryArray.length - 1] : ''}</p>
                        <h6>Storage</h6>
                      </div>
                      <div>
                        <p>{data.ExplorePageSummary.Return}</p>
                        <h6>Return</h6>
                      </div>
                      <div>
                        <p>{data.Rating}</p>
                        <h6>Rating</h6>
                      </div>
                      <div>
                        <p>2025</p>
                        <h6>Maturity</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
