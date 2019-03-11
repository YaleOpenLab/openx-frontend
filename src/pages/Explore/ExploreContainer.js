import React, { Component } from "react";
import LayoutHoc from "../../hoc/Layout/Layout";
import ExploreComponent from "../../components/Explore/ExploreComponent";
import SubNavigationComponent from "../../components/General/SubNavigationComponent/SubNavigationComponent";
import ROUTES from "../../routes/routes";
import { connect } from "react-redux";
import { fetchProjects } from "../../store/actions";

class ExplorePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { name: "pv solar", link: ROUTES.EXPLORE_PAGES.PV_SOLAR },
        { name: "storage", link: ROUTES.EXPLORE_PAGES.STORAGE },
        { name: "wind", link: ROUTES.EXPLORE_PAGES.WIND },
        { name: "systems", link: ROUTES.EXPLORE_PAGES.SYSTEMS }
      ]
    };
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { isLoading, projects } = this.props;
    console.log(isLoading, projects);

    return (
      <LayoutHoc>
        <div className="component-content explore">
          <SubNavigationComponent  list={this.state.menu} />
          <ExploreComponent />
        </div>
      </LayoutHoc>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorePageContainer);
