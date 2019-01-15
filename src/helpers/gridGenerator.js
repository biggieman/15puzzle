export const generateEmptyCoords = () => {
    return [getRandomInt(0, 4), getRandomInt(0, 4)];
};

export const generateGrid = (emptyCoord) => {
    let plain = (new Array(15)).fill(0).map((_, i) => i + 1);
    let grid = [];

    let isEmpty = false;

    for (let r = 0; r < 4; r++) {
        grid[r] = [];

        for (let c = 0; c < 4; c++) {
            grid[r][c] = {
                coord: [r, c],
                value: 0
            };

            if (!isEmpty && emptyCoord[0] === r && emptyCoord[1] === c) {
                isEmpty = true;

                continue;
            }

            grid[r][c].value = plain.splice(getRandomInt(0, plain.length), 1);
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