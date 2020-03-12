import React from "react";
import "./SupportComponent.scss";
import ROUTES from "../../../routes/routes";
import Link from "react-router-dom/es/Link";

const supportComponent = props => (
  <div className="support">
    <div className="content">
      <div className="">
        <p className="text">Support OpenSolar</p>
      </div>
      <Link to={ROUTES.DEVELOPMENT}>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 col-centered text-box">
          crowdfund the platform >
        </div>
      </Link>
    </div>
  </div>
);

export default supportComponent;
