import React from "react";
import ProgressBar from "../../../General/ProgressBar/ProgressBar";
import "./ProjectMain.scss";
import DescriptionGrid from "../../../General/DescriptionGrid/DescriptionGrid";
import percentage from "../../../../helpers/functions/percentage";

const ProjectMain = props => {
  const data = props.data;
  const tempData = props.tempData;
  let list = null;

  list = tempData.description.list.map(item => {
    return <li key={item.id}>{item.text}</li>;
  });
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
              <div className="desc-status col-12">{tempData.status}</div>
              <div className="desc-title col-12">{tempData.title}</div>
              <div className="desc-location col-12">
                <div className="projects-location-icon location-icon" />
                {data.State}
              </div>
              <div className="col-6 desc-category desc-category-separator desc-cat-category">
                {tempData.category}
              </div>
              <div className="col-6 desc-category desc-category-separator desc-gen-location">
                {tempData.genLocation}
              </div>
              <div className="desc-description col-12">
                {data.Metadata}
                <ul>{list}</ul>
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
                      <ProgressBar progress={percentage(data.MoneyRaised, data.TotalValue)} />
                    </div>
                  </div>
                </div>
              </div>
              <DescriptionGrid list={props.tempData.specificsOne} />
              <DescriptionGrid list={props.tempData.specificsTwo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
