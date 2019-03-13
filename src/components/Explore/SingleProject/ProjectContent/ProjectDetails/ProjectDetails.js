import React from "react";
import { NavLink } from "react-router-dom";

const ProjectDetails = props => {
  return (
    <div id="project" className="ProjectDetails">
      <div className="container">
        <div className="row">
          <div className="col-12 title border-bottom no-padding">
            Project Details
          </div>
          <div className="col-12">
            <div className="architecture margin-top">
              <div className="container no-padding">
                <div className="row no-padding">
                  <div className="component-title col-12 no-padding">
                    <span>architecture</span> / project design
                  </div>
                  <div className="col-sm-6 col-md-4 mg-top-15">
                    <div className="sub-title flex-title">map layout</div>
                    <div className="flex-content">
                      <img
                        src="https://via.placeholder.com/350x450"
                        alt="placeholder"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 mg-top-15">
                    <div className="sub-title flex-title">solar output</div>
                    <div className="flex-content-30">
                      <img
                        src="https://via.placeholder.com/150x170"
                        alt="placeholder"
                      />
                    </div>
                    <div className="flex-content-60 ">
                      <div className="grid-body flex-content-25">
                        <div className="grid-body-content">XXX</div>
                        <div className="grid-body-description">item name</div>
                      </div>
                      <div className="grid-body flex-content-25">
                        <div className="grid-body-content">Text</div>
                        <div className="grid-body-description">item name</div>
                      </div>
                      <div className="grid-body flex-content-25">
                        <div className="grid-body-content">000</div>
                        <div className="grid-body-description">item name</div>
                      </div>
                      <div className="grid-body flex-content-25">
                        <div className="grid-body-content">Text</div>
                        <div className="grid-body-description">item name</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 mg-top-15">
                    <div className="sub-title flex-title">
                      design description
                    </div>
                    <div className="flex-content-60 pd-sub-text overflow-auto">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras dapibus vulputate diam eu pretium. Mauris elit orci,
                      ultricies id fermentum vel, porta et eros. Vestibulum
                      condimentum lectus in convallis feugiat. Sed vulputate
                      fringilla felis. Aliquam ut arcu et dui feugiat
                      scelerisque eu quis diam. Mauris placerat congue dui sit
                      amet blandit. Phasellus condimentum libero vel velit
                      auctor, sit amet tincidunt velit varius. Mauris lacinia
                      porta faucibus. Fusce eu est ac eros vulputate mollis in
                      ac felis. Aenean commodo scelerisque mi sed imperdiet.
                      Donec at hendrerit nisi, eget vestibulum nisi. Sed sit
                      amet magna luctus, facilisis erat quis, sagittis ligula.
                      Aenean dignissim velit quis leo consequat ultricies. Proin
                      quis pretium justo. Vestibulum at eros nisl. Fusce
                      lobortis erat ante, eu cursus sapien molestie at.
                      Pellentesque placerat ante diam, et euismod lacus dictum
                      vel. Phasellus vitae sollicitudin mi. In pulvinar eleifend
                      convallis. Suspendisse elit erat, venenatis eget
                      ullamcorper ut, laoreet iaculis nisl. Sed porta, felis id
                      rhoncus aliquet, quam ipsum pellentesque metus, in sodales
                      quam nunc vitae risus. Quisque in venenatis massa.
                      Phasellus neque risus, ornare quis nisl ultricies,
                      ullamcorper consectetur orci.
                    </div>
                    <div className="flex-content-30 ">
                      <img
                        src="https://via.placeholder.com/450x250"
                        alt="placeholder"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="architecture margin-top">
              <div className="container no-padding">
                <div className="row no-padding">
                  <div className="component-title col-12 no-padding">
                    <span>engineering</span> / solar layout
                  </div>
                  <div className="col-sm-6 col-md-5 mg-top-15">
                    <div className="sub-title flex-title">
                      installation archetype
                    </div>
                    <div className="flex-content-60">
                      <img
                        src="https://via.placeholder.com/450x250"
                        alt="placeholder"
                      />
                    </div>
                    <div className="flex-content-30 pd-sub-text overflow-auto">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras dapibus vulputate diam eu pretium. Mauris elit orci,
                      ultricies id fermentum vel, porta et eros. Vestibulum
                      condimentum lectus in convallis feugiat. Sed vulputate
                      fringilla felis.
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-7 mg-top-15">
                    <div className="sub-title flex-title">
                      engineering layout
                    </div>
                    <div className="flex-content-90">
                      <img
                        src="https://via.placeholder.com/450x350"
                        alt="placeholder"
                      />
                    </div>
                  </div>
                  <div className="col-12 mg-top-15">
                    <div className="sub-title">IT infrastructure</div>
                    <div className="container no-padding">
                      <div className="row">
                        <div className="col-4 pd-sub-text overflow-auto">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras dapibus vulputate diam eu pretium. Mauris
                          elit orci, ultricies id fermentum vel, porta et eros.
                          Vestibulum condimentum lectus in convallis feugiat.
                          Sed vulputate fringilla felis. Aliquam ut arcu et dui
                          feugiat scelerisque eu quis diam. Mauris placerat
                          congue dui sit amet blandit. Phasellus condimentum
                          libero vel velit auctor, sit amet tincidunt velit
                          varius.
                        </div>
                        <div className="col-4">
                          <div className="flex-content-60">
                            <img
                              src="https://via.placeholder.com/450x350"
                              alt="placeholder"
                            />
                          </div>
                          <div className="flex-content-40 pd-sub-text overflow-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras dapibus vulputate diam eu pretium. Mauris
                            elit orci, ultricies id fermentum vel, porta et
                            eros. Vestibulum condimentum lectus in convallis
                            feugia
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="flex-content-100">
                            <img
                              src="https://via.placeholder.com/450x350"
                              alt="placeholder"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mg-top-15">
                      <NavLink to="#">
                        Link to specific document for this section >
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="community margin-top">
        <div className="container">
          <div className="row">
            <div className="component-title col-12">
              <span>community engagement</span>
            </div>
            <div className="col-6 col-sm-6 col-md-3 mg-top-15">
              <div className="sub-title">consultation</div>
              <div className="sub-image">
                <img
                  src="https://via.placeholder.com/450x350"
                  alt="placeholder"
                />
              </div>
              <div className="overflow-auto pd-sub-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium.x
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-3 mg-top-15">
              <div className="sub-title">participation</div>
              <div className="sub-image">
                <img
                  src="https://via.placeholder.com/450x350"
                  alt="placeholder"
                />
              </div>
              <div className="overflow-auto pd-sub-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium.x
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-3 mg-top-15">
              <div className="sub-title">outreach</div>
              <div className="sub-image">
                <img
                  src="https://via.placeholder.com/450x350"
                  alt="placeholder"
                />
              </div>
              <div className="overflow-auto pd-sub-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium.x
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-3 mg-top-15">
              <div className="sub-title">governance</div>
              <div className="sub-image">
                <img
                  src="https://via.placeholder.com/450x350"
                  alt="placeholder"
                />
              </div>
              <div className="overflow-auto pd-sub-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium.x
              </div>
            </div>
            <div className="col-12">
              <NavLink to="#">
                Link to specific document for this section >
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="business margin-top">
        <div className="container">
          <div className="row">
            <div className="component-title col-12">
              <span>business numbers & payment scheme</span>
            </div>
            <div className="col-12 mg-top-15">
              <div className="row">
                <div className="col-12 sub-title">general payment logic</div>
                <div className="col-12 col-sm-8 sub-image">
                  <img
                    src="https://via.placeholder.com/550x150"
                    alt="placeholder"
                  />
                </div>
                <div className="col-12 col-sm-4 pd-sub-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  dapibus vulputate diam eu pretium.x
                </div>
              </div>
            </div>
            <div className="col-12 mg-top-15">
              <div className="row">
                <div className="col-12 sub-title">capital expenditure</div>
                <div className="col-12 col-sm-8 sub-image">
                  <img
                    src="https://via.placeholder.com/550x150"
                    alt="placeholder"
                  />
                </div>
                <div className="col-12 col-sm-4 pd-sub-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  dapibus vulputate diam eu pretium.x
                </div>
              </div>
            </div>
            <div className="col-12 mg-top-15">
              <div className="row">
                <div className="col-12 sub-title">project revenue</div>
                <div className="col-12 col-sm-8 sub-image">
                  <img
                    src="https://via.placeholder.com/550x150"
                    alt="placeholder"
                  />
                </div>
                <div className="col-12 col-sm-4 pd-sub-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  dapibus vulputate diam eu pretium.x
                </div>
              </div>
            </div>
            <div className="col-12 mg-top-15">
              <div className="row">
                <div className="col-12 sub-title">net income</div>
                <div className="col-12 col-sm-8 sub-image">
                  <img
                    src="https://via.placeholder.com/550x150"
                    alt="placeholder"
                  />
                </div>
                <div className="col-12 col-sm-4 pd-sub-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  dapibus vulputate diam eu pretium.x
                </div>
              </div>
            </div>
            <div className="col-12 mg-top-15">
              <NavLink to="#">
                Link to specific document for this section >
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
