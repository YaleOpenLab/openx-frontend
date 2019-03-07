import React, { Component } from 'react';
import LayoutHoc from '../../hoc/Layout/Layout';
import ExploreComponent from '../../components/ExploreComponent/ExploreComponent';
import SubNavigationComponent from '../../components/General/SubNavigationComponent/SubNavigationComponent';
import ROUTES from '../../routes/routes';

class ExplorePageContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {name: 'pv solar', link: ROUTES.EXPLORE_PAGES.PV_SOLAR},
                {name: 'storage', link: ROUTES.EXPLORE_PAGES.STORAGE},
                {name: 'wind', link: ROUTES.EXPLORE_PAGES.WIND},
                {name: 'systems', link: ROUTES.EXPLORE_PAGES.SYSTEMS},
            ],
        }
    }

    render() {
        return (
            <LayoutHoc>
                <div className="component-content explore">
                    <SubNavigationComponent list={this.state.menu} />
                    <ExploreComponent />
                </div>
            </LayoutHoc>
        )
    }
}

export default ExplorePageContainer;