import random from '../utils/mathHelper.js'

export const COLOR_GRAY = 'rgb(221, 221, 221)';
export const COLOR_WHITE = 'rgb(255, 255, 255)';
export const COLOR_RED = 'rgb(255, 99, 71)';

export function generateRandomColoredLines(count){
    let lines = [];
    for (let i = 0; i < count; i++){
        let line = generateLine(randomColor());
        lines.push(line);
    }
    return lines;
}

export function generateWhiteGrayLines(count) {
    let lines = [];
    for (let i = 0; i < count; i++){
        let line;
        if (i === count - 2) {
            line = generateLine(COLOR_RED);
        } else {
            var colorLine =  i % 2 === 0 ? COLOR_GRAY : COLOR_WHITE;
            line = generateLine(colorLine);
        }
        lines.push(line);
    }
    return lines;
}

export function generateLine(color) {
    color = color || randomColor();
    return { color: color}
}

export function redLineToNormal(lines) {
    let redPosition = lines.length - 2;
    if (redPosition >= 0) {
        lines[redPosition].color = getLineColor(redPosition);
    }
    return lines;
}

export function addRedLine(lines) {
    let redPosition = lines.length - 2;
    if (redPosition >= 0) {
        lines[lines.length - 2].color = COLOR_RED;
    }
    return lines;
}

export function pushLine(lines) {
    const lineColor = getLineColor(lines.length);
    lines.push(generateLine(lineColor));
    return lines;
}

export function removeLastLine(lines) {
    lines.pop();
    return lines;
}

export function getLineColor(position) {
    return (position % 2 === 0) ? COLOR_GRAY : COLOR_WHITE;
}

export function randomColor() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}