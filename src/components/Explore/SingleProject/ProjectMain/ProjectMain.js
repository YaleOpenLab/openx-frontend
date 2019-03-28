import React from "react";
import ProgressBar from "../../../General/ProgressBar/ProgressBar";
import "./ProjectMain.scss";
import DescriptionGrid from "../../../General/DescriptionGrid/DescriptionGrid";
import percentage from "../../../../helpers/functions/percentage";

const ProjectMain = props => {
  const data = props.data;
  const tempData = props.tempData;
  let descriptionItems = null;

  if (data.ExplorePageSummary) {
    let items = [];
    Object.keys(data.ExplorePageSummary).map(key => {
      return items.push({ value: data.ExplorePageSummary[key], desc: key });
    });
    descriptionItems = <DescriptionGrid list={items} />;
  }

  return (
    <div className="container project-main">
      <div className="row">
        <div className="col-sm-12 col-md-7 order-md-1 order-sm-1 no-padding">
          <div className="project-main-image project-main-display-image">
            <img src={tempData.imageUrl} alt="Project" />
          </div>
        </div>

        <div className="col-sm-12 col-md-7 order-md-3 order-sm-2 no-padding">
          <div className="project-main-image project-main-choose-image">
            <div className="container">
              <div className="row mx-auto">
                <div className="col-3 mx-auto no-padding">
                  <img src={tempData.imageUrl2} alt="Project" />
                </div>
                <div className="col-3 mx-auto no-padding">
                  <img src={tempData.imageUrl2} alt="Project" />
                </div>
                <div className="col-3 mx-auto no-padding">
                  <img src={tempData.imageUrl2} alt="Project" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-5 order-md-2 order-sm-3  no-padding">
          <button className="watch-button">
            <div className="watch-icon" />
          </button>

          <div className="projects-description-box container">
            <div className="row">
              <div className="desc-status col-12">
                STAGE {data.Stage} | {tempData.status}
              </div>
              <div className="desc-title col-12">{data.Name}</div>
              <div className="desc-location col-12">
                <div className="projects-location-icon location-icon" />
                {data.State}, {data.Country}
              </div>
              <div className="col-6 desc-category desc-category-separator desc-cat-category">
                {data.InvestmentType}
              </div>
              <div className="col-6 desc-category desc-category-separator desc-gen-location">
                {data.BrokerDealer}
              </div>
              <div className="desc-description col-12">
                {data.Metadata}
                <div className="desc-description-buttons">
                  <ul>
                    <li>{data.Bullets.Bullet1}</li>
                    <li>{data.Bullets.Bullet2}</li>
                    <li>{data.Bullets.Bullet3}</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 specifics-box">
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
                  </div>
                </div>
              </div>
              {descriptionItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
