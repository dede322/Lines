import React, { Component } from 'react';
import {generateRandomColoredLines} from '../../utils/lines.js';
import PreviewComponent from './PreviewComponent.jsx';
import './PreviewContainer.css';
import './PreviewComponent.css';

const PREVIEW_COUNT = 4;

class PreviewContainer extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.linesCount !== nextProps.linesCount;
    }

    render() {
        const linesPreviews = [];
        for (let i = 0; i < PREVIEW_COUNT; i++) {
            const rightClassName = i % 2 === 0 ? 'Right' : '';
            const lines = generateRandomColoredLines(this.props.linesCount);
            linesPreviews.push(
                <PreviewComponent key={i} lines={lines} rightClassName={rightClassName}/>
            );
        }
        return (
            <div>
                <div>Total Lines: {this.props.linesCount}</div>
                <div className="Component Preview-container">
                    {linesPreviews}
                </div>
            </div>
        );
    }
}

PreviewContainer.propTypes = {
    linesCount: React.PropTypes.number.isRequired
};
export default PreviewContainer;