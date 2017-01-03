import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LinesComponent from '../LinesComponent.jsx';
import '../../App.css';
import './MainComponent.css';

const MIN_LINES_COUNT = 1;

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.onPlusButtonClick = this.onPlusButtonClick.bind(this);
        this.onMinusButtonClick = this.onMinusButtonClick.bind(this);
    }

    render() {
        return (
            <div className="Component Main-component">
                <LinesComponent onLineClick={this.props.onLineClick} lines={this.props.lines}/>
                <span className="Buttons">
                    <button onClick={this.onPlusButtonClick}> + </button>
                    <button onClick={this.onMinusButtonClick}> - </button>
                </span>
            </div>
        );
    }

    onPlusButtonClick() {
        let component = ReactDOM.findDOMNode(this);
        let componentWidth = Math.floor(component.getBoundingClientRect().width);

        if (this.props.lines.length < componentWidth) {
            this.props.onPlusButtonClick();
        }
    }

    onMinusButtonClick() {
        if (this.props.lines.length > MIN_LINES_COUNT) {
            this.props.onMinusButtonClick();
        }
    }
}

MainComponent.propTypes = {
    lines: React.PropTypes.array.isRequired,
    onPlusButtonClick: React.PropTypes.func.isRequired,
    onMinusButtonClick: React.PropTypes.func.isRequired,
    onLineClick: React.PropTypes.func.isRequired
};
export default MainComponent;