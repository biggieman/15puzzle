import { coordsCompare } from './gridFinder';

export const generateEmptyCoords = () => {
    return [getRandomInt(0, 4), getRandomInt(0, 4)];
};

export const generateGrid = (rMax = 4, cMax = 4) => {
    let size = rMax * cMax;
    let plain = (new Array(size)).fill(0).map((_, i) => i);

    let grid = [];

    for (let r = 0; r < rMax; r++) {
        for (let c = 0; c < cMax; c++) {
            grid.push({
                coord: [r, c],
                value: plain.splice(getRandomInt(0, plain.length), 1)[0]
            });
        }
    }

    return grid;
};

export default () => {
    let state = {};

    state.grid = generateGrid();
    state.emptyCoord = state.grid.find(item => item.value ===0).coord;

    return state;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
