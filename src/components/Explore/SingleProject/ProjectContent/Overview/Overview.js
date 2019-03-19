import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const Overview = props => (
  <ScrollableAnchor id={"overview"}>
    <section className="Overview">
      <div className="container">
        <div className="row">
          <div className="col-12 title border-bottom no-padding">
            Project Overview
          </div>
          <div className="col-12 summary">
            <div className="col-12 title-yellow no-padding">
              Executive Summary
            </div>
            <div className="col-12 summary-grid">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <div className="grid-title">
                      <span className="money-icon" />
                      investment
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">$ 5000</div>
                      <div className="grid-body-description">capex</div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">60 %</div>
                      <div className="grid-body-description">hardware</div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">30 %</div>
                      <div className="grid-body-description">
                        first loss escrow
                      </div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">n/a</div>
                      <div className="grid-body-description">
                        certification cost
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="grid-title">
                      <span className="handout-icon" />
                      financials
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">3.1 %</div>
                      <div className="grid-body-description">return (tey)</div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">Premium</div>
                      <div className="grid-body-description">insurance</div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">0.24 ct/kWh</div>
                      <div className="grid-body-description">
                        first loss escrow
                      </div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">2028</div>
                      <div className="grid-body-description">
                        maturity (variable)
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <div className="grid-title">
                      <span className="settings-icon" />
                      project size
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">1 kW</div>
                      <div className="grid-body-description">pv solar</div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">200 Wh</div>
                      <div className="grid-body-description">storage</div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">2%</div>
                      <div className="grid-body-description">% critical</div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">2.5 kW</div>
                      <div className="grid-body-description">
                        inverter capacity
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <div className="grid-title">
                      <span className="preferences-icon" />
                      sustainability metrics
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">0.1 t/kWh</div>
                      <div className="grid-body-description">
                        carbon drawdpwn
                      </div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">5/7</div>
                      <div className="grid-body-description">
                        community value
                      </div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">n/a</div>
                      <div className="grid-body-description">lca</div>
                    </div>
                    <div className="grid-body flex-content-20">
                      <div className="grid-body-content">80%</div>
                      <div className="grid-body-description">
                        resilience rating
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="full-image">
        <img src="https://via.placeholder.com/1500x450" alt="placeholder" />
      </div>
      <div className="opportunity">
        <div className="container">
          <div className="row">
            <div className="col-12 title-yellow margin-top">Opportunity</div>
            <div className="col-sm-12 col-md-4 margin-top">
              <div className="sub-title margin-bottom-x4">Description</div>
              <div className="sub-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium. Mauris elit orci, ultricies
                id fermentum vel, porta et eros. Vestibulum condimentum lectus
                in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut
                arcu et dui feugiat scelerisque eu quis diam. Mauris placerat
                congue dui sit amet blandit. Phasellus condimentum libero vel
                velit auctor, sit amet tincidunt velit varius. Mauris lacinia
                porta faucibus.
              </div>
            </div>

            <div className="col-sm-6 col-md-4 margin-top">
              <div className="sub-title margin-bottom-x4">Badges & Charasteristics</div>
              <div className="sub-image">
                <img
                  src="https://via.placeholder.com/350x350"
                  alt="placeholder"
                />
              </div>
            </div>

            <div className="col-sm-6 col-md-4 margin-top">
              <div className="sub-title margin-bottom-x4">Impact & System Metrics</div>
              <div className="sub-image">
                <img
                  src="https://via.placeholder.com/350x350"
                  alt="placeholder"
                />
              </div>
            </div>

            <div className="col-6 margin-top">
              <div className="sub-image">
                <img
                  src="https://via.placeholder.com/350x350"
                  alt="placeholder"
                />
              </div>
            </div>
            <div className="col-6 margin-top">
              <div className="sub-image">
                <img
                  src="https://via.placeholder.com/350x350"
                  alt="placeholder"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="context margin-top">
        <div className="title-yellow">context</div>
        <div className="sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus
          vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum
          vel, porta et eros. Vestibulum condimentum lectus in convallis
          feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat
          scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit.
          Phasellus condimentum libero vel velit auctor, sit amet tincidunt
          velit varius. Mauris lacinia porta faucibus. Fusce eu est ac eros
          vulputate mollis in ac felis. Aenean commodo scelerisque mi sed
          imperdiet. Donec at hendrerit nisi, eget vestibulum nisi. Sed sit amet
          magna luctus, facilisis erat quis, sagittis ligula. Aenean dignissim
          velit quis leo consequat ultricies. Proin quis pretium justo.
          Vestibulum at eros nisl.
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Overview;
