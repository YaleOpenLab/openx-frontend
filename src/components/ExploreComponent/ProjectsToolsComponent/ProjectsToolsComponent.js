import React, { Component } from 'react';
import './ProjectsToolsComponent.scss';

class ProjectsToolsComponent extends Component {

    render() {
        return (
            <div className="container-fluid ">
            <div className="row">
                <div className="col-sm col-lg-12">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
            </div>
            </div>
        );
    }
}

export default ProjectsToolsComponent;