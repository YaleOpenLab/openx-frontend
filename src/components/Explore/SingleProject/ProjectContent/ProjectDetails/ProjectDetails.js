import React from "react";
import { NavLink } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";
import CommunitySection from "./CommunitySection/CommunitySection";
import BusinessPaymentSection from "./BusinessPaymentSection/BusinessPaymentSection";

const ProjectDetails = props => (
  <ScrollableAnchor id={"project"}>
    <section className="ProjectDetails">
      <div className="container">
        <div className="row">
          <div className="col-12 title border-bottom no-padding">
            Project Details
          </div>
          <div className="col-12">
            <div className="architecture margin-top">
              <div className="row">
                <div className="component-title col-12">
                  <span>architecture</span> / project design
                </div>
                <div className="col-sm-6 col-md-4 mg-top-15 flex-container">
                  <div className="sub-title flex-1">map layout</div>
                  <div className="sub-image flex-19">
                    <img
                      src="https://via.placeholder.com/350x450"
                      alt="placeholder"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mg-top-15 flex-container">
                  <div className="sub-title flex-1">solar output</div>
                  <div className="sub-image flex-8">
                    <img
                      src="https://via.placeholder.com/450x250"
                      alt="placeholder"
                    />
                  </div>
                  <div className="flex-11">
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
                <div className="col-sm-12 col-md-4 mg-top-15 flex-container">
                  <div className="sub-title flex-1">design description</div>
                  <div className="sub-text flex-11">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras dapibus vulputate diam eu pretium. Mauris elit orci,
                    ultricies id fermentum vel, porta et eros. Vestibulum
                    condimentum lectus in convallis feugiat. Sed vulputate
                    fringilla felis. Aliquam ut arcu et dui feugiat scelerisque
                    eu quis diam. Mauris placerat congue dui sit amet blandit.
                    Phasellus condimentum libero vel velit auctor, sit amet
                    tincidunt velit varius. Mauris lacinia porta faucibus. Fusce
                    eu est ac eros vulputate mollis in ac felis. Aenean commodo
                    scelerisque mi sed imperdiet. Donec at hendrerit nisi, eget
                    vestibulum nisi. Sed sit amet magna luctus, facilisis erat
                    quis, sagittis ligula. Aenean dignissim velit quis leo
                    consequat ultricies. Proin quis pretium justo. Vestibulum at
                    eros nisl. Fusce lobortis erat ante, eu cursus sapien
                    molestie at. Pellentesque placerat ante diam, et euismod
                    lacus dictum vel. Phasellus vitae sollicitudin mi. In
                    pulvinar eleifend convallis. Suspendisse elit erat,
                    venenatis eget ullamcorper ut, laoreet iaculis nisl. Sed
                    porta, felis id rhoncus aliquet, quam ipsum pellentesque
                    metus, in sodales quam nunc vitae risus. Quisque in
                    venenatis massa. Phasellus neque risus, ornare quis nisl
                    ultricies, ullamcorper consectetur orci.
                  </div>
                  <div className="sub-image flex-8">
                    <img
                      src="https://via.placeholder.com/450x250"
                      alt="placeholder"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="architecture margin-top">
              <div className="row">
                <div className="component-title col-12">
                  <span>engineering</span> / solar layout
                </div>
                <div className="col-sm-6 col-md-5 mg-top-15 flex-container">
                  <div className="sub-title flex-1">installation archetype</div>
                  <div className="sub-image flex-11">
                    <img
                      src="https://via.placeholder.com/450x250"
                      alt="placeholder"
                    />
                  </div>
                  <div className="sub-text flex-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras dapibus vulputate diam eu pretium. Mauris elit orci,
                    ultricies id fermentum vel, porta et eros. Vestibulum
                    condimentum lectus in convallis feugiat. Sed vulputate
                    fringilla felis.
                  </div>
                </div>
                <div className="col-sm-6 col-md-7 mg-top-15 flex-container">
                  <div className="sub-title flex-1">engineering layout</div>
                  <div className="sub-image flex-19">
                    <img
                      src="https://via.placeholder.com/450x250"
                      alt="placeholder"
                    />
                  </div>
                </div>
                <div className="col-12 mg-top-15">
                  <div className="sub-title">IT infrastructure</div>
                  <div className="row">
                    <div className="col-4 sub-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras dapibus vulputate diam eu pretium. Mauris elit orci,
                      ultricies id fermentum vel, porta et eros. Vestibulum
                      condimentum lectus in convallis feugiat. Sed vulputate
                      fringilla felis. Aliquam ut arcu et dui feugiat
                      scelerisque eu quis diam. Mauris placerat congue dui sit
                      amet blandit. Phasellus condimentum libero vel velit
                      auctor, sit amet tincidunt velit varius.
                    </div>
                    <div className="col-4">
                      <div className="sub-image">
                        <img
                          src="https://via.placeholder.com/450x250"
                          alt="placeholder"
                        />
                      </div>
                      <div className="sub-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras dapibus vulputate diam eu pretium. Mauris elit
                        orci, ultricies id fermentum vel, porta et eros.
                        Vestibulum condimentum lectus in convallis feugia
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="sub-image">
                        <img
                          src="https://via.placeholder.com/450x350"
                          alt="placeholder"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 link-to-text">
                    <NavLink to="#" className="big">
                      Link to specific document for this section >
                    </NavLink>
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
            <CommunitySection
              title="consultation"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium"
              imageUrl="https://via.placeholder.com/450x350"
            />
            <CommunitySection
              title="participation"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium"
              imageUrl="https://via.placeholder.com/450x350"
            />
            <CommunitySection
              title="outreach"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium"
              imageUrl="https://via.placeholder.com/450x350"
            />
            <CommunitySection
              title="governance"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium"
              imageUrl="https://via.placeholder.com/450x350"
            />
            <div className="col-12 link-to-text">
              <NavLink to="#" className="big">
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
            <BusinessPaymentSection
              title="general payment logic"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium"
              imageUrl="https://via.placeholder.com/550x150"
            />
            <BusinessPaymentSection
              title="capital expenditure"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium"
              imageUrl="https://via.placeholder.com/550x150"
            />
            <BusinessPaymentSection
              title="project revenue"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium"
              imageUrl="https://via.placeholder.com/550x150"
            />
            <BusinessPaymentSection
              title="net income"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium"
              imageUrl="https://via.placeholder.com/550x150"
            />
            <div className="col-12 link-to-text">
              <NavLink to="#" className="big">
                Link to specific document for this section >
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default ProjectDetails;
