import React, { Component } from 'react';
import '../App.css';
import './Line.css'

class Line extends Component {
    constructor(props) {
        super(props);
        this.onLineClick = this.onLineClick.bind(this);
    }

    render() {
        return (
            <div onClick={this.onLineClick} className="Line" style={{'backgroundColor': this.props.color}}></div>
        );
    }

    onLineClick() {
        this.props.onLineClick(this.props.index);
    }
}

Line.propTypes = {
    onLineClick: React.PropTypes.func,
    index: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired
};
Line.defaultProps = {onLineClick: () => {}};
export default Line;
