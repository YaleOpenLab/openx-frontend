import React, { Component } from "react";
import "./ProjectsToolsComponent.scss";
import Select from "react-select";
import Slider from "../../UI/SolarForms/Slider/Slider";
import RadioButton from "../../UI/SolarForms/RadioButton/RadioButton";

class ProjectsToolsComponent extends Component {
  handleSliderChange = () => {};

  render() {
    return (
      <div className="col-sm-12 col-md-4 col-lg-3">
        <div className="ProjectsTools">
          <div className="col-sm-12 title">Explore Projects</div>
          <div className="box">
            <div className="search-box toolparts-3 col-sm-12 solar-input-inner-addon solar-right-addon">
              <i className="solar-icon search-icon" />
              <input
                type="search"
                className="solar-forms solar-form-search"
                placeholder="Search/Keywords"
              />
            </div>
            <div className="location-box toolparts-4">
              <div className="separator">
                <Select className="tool-default" placeholder="Country" />
                <div className="location-result tool-default">USA</div>
              </div>
              <div className="separator">
                <Select
                  className="tool-default"
                  placeholder="State or teritory"
                />
                <div className="location-result tool-default">Puerto Rico</div>
              </div>
            </div>
            <div className="location-box toolparts project-filters">
              <div className="sub-title">
                <div className="tools-sub-header">Project Filters</div>
              </div>
              <div className="project-filters-box">
                <div className="filters-sub-header">Metrics</div>
                <Slider
                  title="Project Size"
                  value={{ min: 1, max: 5 }}
                  minValue={0}
                  maxValue={10}
                  onChange={this.handleSliderChange}
                />
                <Slider
                  title="Development Stage"
                  value={{ min: 1, max: 5 }}
                  minValue={0}
                  maxValue={9}
                  onChange={this.handleSliderChange}
                />
                <Slider
                  title="Impact Metric"
                  value={{ min: 1, max: 3 }}
                  minValue={0}
                  maxValue={6}
                  onChange={this.handleSliderChange}
                />
              </div>
              <div className="project-filters-box">
                <div className="filters-sub-header">Project attributes</div>
                <div className="filters-sub-content">
                  <RadioButton name="test1" label="public infrastructure" />
                  <RadioButton name="test2" label="certified low-carbon" />
                  <RadioButton name="test3" label="microgrid-ready" />
                  <RadioButton name="test4" label="grid-tied" />
                </div>
              </div>
              <div className="project-filters-box">
                <div className="filters-sub-header">investment attributes</div>
                <div className="filters-sub-content">
                  <RadioButton name="test5" label="public infrastructure" />
                  <RadioButton name="test6" label="certified low-carbon" />
                  <RadioButton name="test7" label="microgrid-ready" />
                  <RadioButton name="test8" label="grid-tied" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsToolsComponent;
