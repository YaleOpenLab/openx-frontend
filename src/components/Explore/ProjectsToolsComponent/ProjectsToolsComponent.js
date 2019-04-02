import React, { Component } from "react";
import "./ProjectsToolsComponent.scss";
import Select from "react-select";
import Slider from "../../UI/SolarForms/Slider/Slider";
import RadioButton from "../../UI/SolarForms/RadioButton/RadioButton";
import connect from "react-redux/es/connect/connect";

class ProjectsToolsComponent extends Component {
  filters = {};

  constructor(props) {
    super(props);
    this.state = {
      Country: null,
      State: null,
      sliders: {
        projectSize: { values: { min: 0, max: 8 }, minValue: 0, maxValue: 10 },
        developmentStage: {
          values: { min: 0, max: 8 },
          minValue: 0,
          maxValue: 8
        },
        impactMetric: { values: { min: 0, max: 5 }, minValue: 0, maxValue: 6 }
      }
    };
  }

  handleCountryChange = value => {
    this.setState({ Country: value });
    this.updateFilters("Country", value);
  };

  handleSearchChange = e => {
    this.updateFilters("Search", e.target.value);
  };

  handleStateChange = value => {
    this.setState({ State: value });
    this.updateFilters("State", value);
  };

  handleSliderChange = (values, field) => {
    let sliders = { ...this.state.sliders };
    if (values.min < 0) return;
    else if (values.max > sliders[field].maxValue) return;
    sliders[field].values = values;
    this.setState({
      sliders
    });
    if (field === "developmentStage") {
      this.updateFilters("Stage", values);
    }
  };

  updateFilters(key, value) {
    this.filters[key] = value;
    this.props.onFilterUpdate(this.filters);
  }

  render() {
    const { Country, State, sliders } = this.state;
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
                  value={Country}
                  onChange={value => this.handleCountryChange(value.value)}
                />
                {Country && (
                  <div
                    className="location-result tool-default"
                    onClick={() => this.handleCountryChange(null)}
                  >
                    {Country}
                  </div>
                )}
              </div>
              <div className="separator">
                <Select
                  className="tool-default"
                  placeholder="State or teritory"
                  options={this.props.states}
                  value={State}
                  onChange={value => this.handleStateChange(value.value)}
                />
                {State && (
                  <div
                    className="location-result tool-default"
                    onClick={() => this.handleStateChange(null)}
                  >
                    {State}
                  </div>
                )}
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
                  name="projectSize"
                  value={sliders.projectSize.values}
                  minValue={sliders.projectSize.minvalue}
                  maxValue={sliders.projectSize.maxValue}
                  onChange={e => this.handleSliderChange(e, "projectSize")}
                />
                <Slider
                  title="Development Stage"
                  name="developmentStage"
                  value={sliders.developmentStage.values}
                  minValue={sliders.developmentStage.minValue}
                  maxValue={sliders.developmentStage.maxValue}
                  onChange={e => this.handleSliderChange(e, "developmentStage")}
                />
                <Slider
                  title="Impact Metric"
                  name="impactMetric"
                  value={sliders.impactMetric.values}
                  minValue={sliders.impactMetric.minValue}
                  maxValue={sliders.impactMetric.maxValue}
                  onChange={e => this.handleSliderChange(e, "impactMetric")}
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
  const countries = projects.map(project => project.Country);

  return [...new Set(countries)].map(country => ({
    label: country,
    value: country
  }));
};

const reduceToStates = projects => {
  const states = projects.map(project => project.State);

  return [...new Set(states)].map(state => ({ label: state, value: state }));
};

const reduceToStages = projects => {
  const stage = projects.map(project => project.Stage);

  return [...new Set(stage)].map(stage => ({ label: stage, value: stage }));
};

const mapStateToProps = state => ({
  countries: reduceToCountries(state.projects.items),
  projects: state.projects.items,
  states: reduceToStates(state.projects.items),
  stages: reduceToStages(state.projects.items)
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsToolsComponent);
