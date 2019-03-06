import React, { Component } from 'react';
import './ProjectsToolsComponent.scss';

class ProjectsToolsComponent extends Component {

    render() {
        return (
            <div class="d-flex flex-row bg-secondary">
                <div class="p-2 bg-info">Flex item 1</div>
                <div class="p-2 bg-warning">Flex item 2</div>
            </div>
        );
    }
}

export default ProjectsToolsComponent;