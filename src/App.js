import React, { Component } from 'react';
import MainComponent from './components/MainComponent/MainComponent.jsx'
import PreviewContainer from './components/PreviewComponents/PreviewContainer.jsx'
import {generateWhiteGrayLines, redLineToNormal, addRedLine, pushLine, removeLastLine,
    randomColor} from './utils/lines.js'
import './App.css';

const DEFAULT_LINES_COUNT = 8;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: generateWhiteGrayLines(DEFAULT_LINES_COUNT)
        };
        this.onPlusButtonClick = this.onPlusButtonClick.bind(this);
        this.onMinusButtonClick = this.onMinusButtonClick.bind(this);
        this.onLineClick = this.onLineClick.bind(this);
    }

    render() {
        return (
            <div className="App">
                <MainComponent lines={this.state.lines}
                               onPlusButtonClick={this.onPlusButtonClick}
                               onMinusButtonClick={this.onMinusButtonClick}
                               onLineClick={this.onLineClick}
                />
                <PreviewContainer linesCount={this.state.lines.length}/>
            </div>
        );
    }

    onPlusButtonClick() {
        let lines = this.state.lines;
        lines = redLineToNormal(lines);
        lines = pushLine(lines);
        lines = addRedLine(lines);
        this.setState({ lines: lines });
    }

    onMinusButtonClick() {
        let lines = this.state.lines;
        lines = redLineToNormal(lines);
        lines = removeLastLine(lines);
        lines = addRedLine(lines);
        this.setState({lines: lines});
    }

    onLineClick(index) {
        let redPosition = this.state.lines.length - 2;
        if (index !== redPosition) {
            let lines = this.state.lines;
            lines[index].color = randomColor();
            this.setState({lines: lines});
        }
    }
}

export default App;
