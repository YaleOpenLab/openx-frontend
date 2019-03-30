import React, { Component } from "react";
import "./ProjectsToolsComponent.scss";
import Select from "react-select";
import Slider from "../../UI/SolarForms/Slider/Slider";
import RadioButton from "../../UI/SolarForms/RadioButton/RadioButton";
import connect from "react-redux/es/connect/connect";

class ProjectsToolsComponent extends Component {
  filters = {};

  handleCountryChange = value => {
    this.updateFilters('Country', value.value);
  };

  handleSearchChange = e => {
    this.updateFilters('Search', e.target.value);
  };

  handleStateChange = value => {
    this.updateFilters('State', value.value);
  };

  handleSliderChange = () => {};

  updateFilters(key, value) {
    this.filters[key] = value;
    this.props.onFilterUpdate(this.filters);
  }

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
                onChange={this.handleSearchChange}
              />
            </div>
            <div className="location-box toolparts-4">
              <div className="separator">
                <Select
                  className="tool-default"
                  placeholder="Country"
                  options={this.props.countries}
                  onChange={this.handleCountryChange}
                />
                <div className="location-result tool-default">USA</div>
              </div>
              <div className="separator">
                <Select
                  className="tool-default"
                  placeholder="State or teritory"
                  options={this.props.states}
                  onChange={this.handleStateChange}
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

const reduceToCountries = projects => {
  const countries = projects
    .map(project => project.Country);

  return [...(new Set(countries))]
    .map(country => ({ label: country, value: country }));
};

const reduceToStates = projects => {
  const states = projects
    .map(project => project.State);

  return [...(new Set(states))]
    .map(state => ({ label: state, value: state }));
};

const mapStateToProps = state => ({
  countries: reduceToCountries(state.projects.items),
  projects: state.projects.items,
  states: reduceToStates(state.projects.items),
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsToolsComponent);
