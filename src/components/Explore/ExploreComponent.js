import React from "react";
import "./ExploreComponent.scss";
import Projects from "./Projects/Projects";
import SingleProject from "./SingleProject/SingleProject";
import { Switch, Route } from "react-router-dom";
import ROUTES from "../../routes/routes";

const ExploreComponent = () => {
  return (
    <React.Fragment>
      <div className="ExploreComponent">
        <Switch>
          <Route path={ROUTES.EXPLORE} component={Projects} />
          <Route path={ROUTES.PROJECT} component={SingleProject} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default ExploreComponent;
