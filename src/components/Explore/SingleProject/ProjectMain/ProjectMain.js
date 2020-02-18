import React from "react";
import ProgressBar from "../../../General/ProgressBar/ProgressBar";
import "./ProjectMain.scss";
import percentage from "../../../../helpers/functions/percentage";
import { STAGES } from "../../../../helpers/enums/stages";
import Image from "../../../../helpers/enums/images";

const ProjectMain = ({ data }) => {
  return (
    <div className="container project-main">
      <div className="row">
        <div className="col-sm-12 col-md-7 order-md-1 order-sm-1 no-padding">
          <div className="project-main-image project-main-display-image">
            <Image imageKey={data.mainImage} />
          </div>
        </div>

        <div className="col-sm-12 col-md-5 order-md-2 order-sm-3  no-padding">
          <button className="watch-button">
            <div className="watch-icon" />
          </button>

          <div className="projects-description-box container">
            <div className="desc-status">
              Stage {data.Stage} | {STAGES[data.Stage]}
            </div>
            <div className="desc-title">{data.Name}</div>
            <div className="desc-location">
              <div className="projects-location-icon location-icon" />
              <a href={data.MapLink} target="_blank" rel="noopener noreferrer">
                {data.City}, {data.State}, {data.Country}
              </a>
            </div>
            <div className="projects-description__spread">
              <div className="desc-category desc-category-separator desc-cat-category">
                {data.InvestmentType}
              </div>
              <div className="desc-category desc-category-separator desc-gen-location">
                {data.Issuer}
              </div>
            </div>

            <div className="desc-description">
              {data.Description}
              <div className="desc-description-bullets">
                <ul>
                  <li>{data.Bullet1}</li>
                  <li>{data.Bullet2}</li>
                  <li>{data.Bullet3}</li>
                </ul>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="desc-description" style={{ fontSize: 12 }}>
                ORIGINATOR
              </div>
              <div className="desc-description" style={{ fontSize: 12 }}>
                {data.Originator}
              </div>
            </div>
            <div className="specifics-box">
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
                      <p>{data.Solar}</p>
                      <h6>Solar</h6>
                    </div>
                    <div className="-dark-color">
                      <p>{data.Battery}</p>
                      <h6>Battery</h6>
                    </div>
                    <div>
                      <p>{data.Return}</p>
                      <h6>Return</h6>
                    </div>
                    <div>
                      <p>{data.Rating}</p>
                      <h6>Rating</h6>
                    </div>
                    <div>
                      <p>{data.Maturity}</p>
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
  );
};

export default ProjectMain;
