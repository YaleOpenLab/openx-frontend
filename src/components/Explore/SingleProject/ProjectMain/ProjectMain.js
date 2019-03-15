import React from "react";

const ProjectMain = props => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6 order-md-1 order-sm-1 no-padding">
        <div className="project-main-image project-main-display-image">
          <img
            src="https://www.azocleantech.com/images/Article_Images/ImageForArticle_723(1).jpg"
            alt="Project"
          />
        </div>
      </div>

      <div className="col-sm-12 col-md-6 order-md-3 order-sm-2 no-padding">
        <div className="project-main-image project-main-choose-image">
          <div className="container">
            <div className="row mx-auto">
              <div className="col-3 mx-auto no-padding">
                <img
                  src="https://www.azocleantech.com/images/Article_Images/ImageForArticle_723(1).jpg"
                  alt="Project"
                />
              </div>
              <div className="col-3 mx-auto no-padding">
                <img
                  src="https://www.azocleantech.com/images/Article_Images/ImageForArticle_723(1).jpg"
                  alt="Project"
                />
              </div>
              <div className="col-3 mx-auto no-padding">
                <img
                  src="https://www.azocleantech.com/images/Article_Images/ImageForArticle_723(1).jpg"
                  alt="Project"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12 col-md-6 order-md-2 order-sm-3  no-padding">
        <div className="project-main-info container">
          <div className="row">
            <div className="desc-status col-12">early stage</div>
            <div className="desc-title col-12">Pasto Public School - PoC</div>
            <div className="desc-location col-12">
              <span className="" />
              Aibonito, Puerto Rico, USA
            </div>
            <div className="col-6 desc-category">MUNICIPAL BOND</div>
            <div className="col-6 desc-category">Neighborly Securities</div>
            <div className="desc-description col-12">
              Project description in no more than two wrapping lines, giving the
              main impact highlight.
              <ul>
                <li>Investment highlight number 1.</li>
                <li>Social and green impact hihlight number 1.</li>
                <li>General terms and conditions</li>
              </ul>
            </div>
            <div className="col-12 specifics-box">
              <div className="container">
                <div className="row">
                  <div className="col-6 spec-first-price">$4000</div>
                  <div className="col-6 spec-second-price">$4000</div>
                  <div className="col-12 ">
                    <div>bar</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 specifics-box">
              <div className="container">
                <div className="row">
                  <div className="col-3 spec-cont -first">3 kW</div>
                  <div className="col-3 spec-cont">0 kWh</div>
                  <div className="col-3 spec-cont">0.0</div>
                  <div className="col-3 spec-cont">1/7</div>
                  <div className="col-3 spec-desc -first">solar</div>
                  <div className="col-3 spec-desc">storage</div>
                  <div className="col-3 spec-desc">tariff</div>
                  <div className="col-3 spec-desc">stage</div>
                </div>
              </div>
            </div>
            <div className="col-12 specifics-box">
              <div className="container">
                <div className="row">
                  <div className="col-3 spec-cont -second">0%</div>
                  <div className="col-3 spec-cont">n/a</div>
                  <div className="col-3 spec-cont">n/a</div>
                  <div className="col-3 spec-cont">2008</div>
                  <div className="col-3 spec-desc -second">return</div>
                  <div className="col-3 spec-desc">rating</div>
                  <div className="col-3 spec-desc">tax</div>
                  <div className="col-3 spec-desc">eta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectMain;
