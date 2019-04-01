import React from "react";
import { NavLink } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";

const Documents = props => (
  <ScrollableAnchor id={"documents"}>
    <section className="Documents">
      <div className="container">
        <div className="row">
          <div className="col-12 title border-bottom no-padding">
            Documents & Contracts
          </div>
          <div className="col-12 ">
            <div className="col-12 mg-top-15">
              <div className="sub-text">
                {props.description}
              </div>
            </div>
            <div className="col-12 row document-list">
              <div className="col-12 doc-title">
                legal contractual documentation
              </div>
              <div className="col-12 doc-content">
                <div className="row">
                  <div className="col-3">
                    <span className="icon-doc-archive" />
                  </div>
                  <div className="col-3">
                    <span className="icon-doc-file" />
                  </div>
                  <div className="col-3">
                    <span className="icon-doc-file" />
                  </div>
                  <div className="col-3">
                    <span className="icon-doc-archive" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 doc-description">project overview</div>
                  <div className="col-3 doc-description">PPA</div>
                  <div className="col-3 doc-description">
                    RE certification agreement
                  </div>
                  <div className="col-3 doc-description">
                    guarantor agreement
                  </div>
                </div>
                <div className="row">
                  <div className="col-3 doc-name">project portfolio</div>
                  <div className="col-3 doc-name">contract</div>
                  <div className="col-3 doc-name">recs</div>
                  <div className="col-3 doc-name">investor protection</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 doc-title">
                blockchain based smart contracts
              </div>
              <div className="col-12 review-contracts">
                <div className="col-12">
                  <div className="row">
                    <div className="col-3">
                      <button
                        link="#"
                        name="review smart contracts"
                        className="solar-form-button solar-btn-normal"
                      >
                        review smart contracts
                      </button>
                    </div>
                    <div className="col-3 icon-check-box">
                      <div className="">
                        <span className="icon-doc-checked" />
                      </div>
                      <NavLink to={"#"}>Link ></NavLink>
                    </div>
                    <div className="col-3 icon-check-box">
                      <div className="">
                        <span className="icon-doc-unchecked" />
                      </div>
                      <NavLink to={"#"}>Link ></NavLink>
                    </div>
                    <div className="col-3 icon-check-box">
                      <div className="">
                        <span className="icon-doc-checked" />
                      </div>
                      <NavLink to={"#"}>Link ></NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="doc-review">
                <div className="doc-review-title">
                  HOW TO REVIEW BLOCKCHAIN-BASED SMART CONTRACT
                </div>
                <div className="doc-review-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  dapibus vulputate diam eu pretium. Mauris elit orci, ultricies
                  id fermentum vel, porta et eros. Vestibulum condimentum lectus
                  in convallis feugiat. Sed vulputate fringilla felis. Aliquam
                  ut arcu et dui feugiat scelerisque eu quis diam. Mauris
                  placerat congue dui sit amet blandit. Phasellus condimentum
                  libero vel velit auctor, sit amet tincidunt velit varius.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Documents;
