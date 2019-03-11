import React, { Component } from "react";
import "./ProjectsToolsComponent.scss";
import Select from 'react-select';
import Slider from "../../UI/SolarForms/Slider/Slider";

class ProjectsToolsComponent extends Component {


  handleSliderChange = () => {

  };

  render() {
    return (
      <div className="col-sm-12 col-md-4 col-lg-3">
        <div className="ProjectsTools">
          <div className="col-sm-12 title">Explore Projects</div>
          <div className="box">
            <div className="search-box toolparts col-sm-12">
                <input type="search" className="solar-forms" placeholder="Search/Keywords" />
            </div>
            <div className="location-box toolparts">
                <div className="separator">
                    <Select className="tool-default"
                        placeholder="Country"
                    />
                    <div className="location-result tool-default">USA</div>
                </div>
                <div className="separator">
                    <Select className="tool-default"
                        placeholder="State or teritory"
                    />
                    <div className="location-result tool-default">Puerto Rico</div>
                </div>
            </div>
            <div className="location-box toolparts project-filters">
                <div className="sub-title"><h4>Project Filters</h4></div>
                <div className="project-filters-box">
                    <h5>Metrics</h5>
                    <Slider title="Project Size" value={{min: 1, max: 5}} minValue={0} maxValue={10} onChange={this.handleSliderChange} />
                    <Slider title="Development Stage" value={{min: 1, max: 5}} minValue={0} maxValue={9} onChange={this.handleSliderChange} />
                    <Slider title="Impact Metric" value={{min: 1, max: 3}} minValue={0} maxValue={6} onChange={this.handleSliderChange} />
                </div>
                <div className="project-filters-box">
                    <h5>Project attributes</h5>

                </div>
                <div className="project-filters-box">
                    <h5>investment attributes</h5>

                </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsToolsComponent;