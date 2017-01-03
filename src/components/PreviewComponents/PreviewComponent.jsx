import React, { Component } from 'react';
import LinesComponent from '../LinesComponent.jsx';
import './PreviewComponent.css';

class PreviewComponent extends Component {
    render() {
        return (
            <div className={"Component Preview-component " + this.props.rightClassName}>
                <LinesComponent lines={this.props.lines}/>
            </div>
        );
    }
}

PreviewComponent.propTypes = {
    lines: React.PropTypes.array.isRequired,
    rightClassName: React.PropTypes.string.isRequired
};
export default PreviewComponent;