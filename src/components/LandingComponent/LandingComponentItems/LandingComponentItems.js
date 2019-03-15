import React from "react";
import { NavLink } from "react-router-dom";
import Routes from "../../../routes/routes";

const landingComponentItems = props => (
  <div className="container content">
    <div className="justify-content-around row items">
      <div className="col-md-5 item">
        <NavLink to={Routes.EXPLORE}>
          <div className="title">
            <h2>Explore</h2>
          </div>
          <div className="image-div">
            <img
              src="https://www.azocleantech.com/images/Article_Images/ImageForArticle_723(1).jpg"
              alt="Explore"
            />
          </div>
        </NavLink>
      </div>
      <div className="col-md-5 item">
        <NavLink to={Routes.DEVELOPER}>
          <div className="title">
            <h2>Develop</h2>
          </div>
          <div className="image-div">
            <img
              src="http://1.bp.blogspot.com/-spvizvQa3yc/URUTBZc4WOI/AAAAAAAAZkA/mU1mr-fE6E0/s523/mapsmania.gif"
              alt="Develop"
            />
          </div>
        </NavLink>
      </div>
    </div>
  </div>
);

export default landingComponentItems;
