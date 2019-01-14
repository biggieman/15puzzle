import { ACTION_MOVE, ACTION_RESET, ACTION_TICK } from './actions';

const initialState = {
    grid: [],
    time: 0,
    moves: 0
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

let emptyPosition = [getRandomInt(1, 5), getRandomInt(1, 5)];

let counter = 1;
for (let r = 1; r < 5; r++) {
    let row = [];
    for (let c = 1; c < 5; c++) {
        if (emptyPosition.length && emptyPosition[0] === r && emptyPosition[1] === c) {
            emptyPosition = [];

            row.push(0);

            continue;
        }

        row.push(counter++);
    }

    initialState.grid.push(row);
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_MOVE:
            return {...state, moves: state.moves + 1};
        case ACTION_RESET:
            return initialState;
        case ACTION_TICK:
            return {...state, time: state.time + 1};
        default:
            return state;
    }
};
