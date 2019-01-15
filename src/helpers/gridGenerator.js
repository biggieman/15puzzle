import { coordsCompare } from './gridFinder';

export const generateEmptyCoords = () => {
    return [getRandomInt(0, 4), getRandomInt(0, 4)];
};

export const generateGrid = (emptyCoord = [0, 0], rMax = 4, cMax = 4) => {
    let plain = (new Array(15)).fill(0).map((_, i) => i + 1);
    let grid = [];

    let isEmptyExists = false;

    for (let r = 0; r < rMax; r++) {
        grid[r] = [];

        for (let c = 0; c < cMax; c++) {
            grid[r][c] = {
                coord: [r, c],
                value: 0
            };

            if (!isEmptyExists && coordsCompare([r, c], emptyCoord)) {
                isEmptyExists = true;

                continue;
            }

            // populating by random value
            grid[r][c].value = plain.splice(getRandomInt(0, plain.length), 1)[0];
        }
    }

    return grid;
};

export default () => {
    let state = {};

    state.emptyCoord = generateEmptyCoords();
    state.grid = generateGrid(state.emptyCoord);

    return state;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
