import React, { Component } from 'react';
import Line from './Line.jsx';

class LinesComponent extends Component {
    render() {
        const self = this;
        const linesComponents = this.props.lines.map(function(line, index) {
            return <Line key={index} {...line} onLineClick={self.props.onLineClick} index={index}></Line>;
        });
        return (
            <div className="Lines">{linesComponents}</div>
        );
    }
}

LinesComponent.propTypes = {
    onLineClick: React.PropTypes.func,
    lines: React.PropTypes.array.isRequired
};
export default LinesComponent;
