import { ACTION_MOVE, ACTION_NEW_GAME, ACTION_RESET, ACTION_TICK } from './actions';
import getMoved from './../helpers/gridMove';
import generateGridState from './../helpers/gridGenerator';

const initialState = {
    started: false,
    time: 0,
    moves: 0,
    ...generateGridState()
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_MOVE:
            let fromCoord = action.payload;
            let toCoord = state.emptyCoord;

            console.log('empty coord: ', toCoord);

            return {
                ...state,
                started: true,
                grid: getMoved(state.grid, fromCoord, toCoord),
                emptyCoord: fromCoord,
                moves: state.moves + 1
            };
        case ACTION_NEW_GAME:
            return {
                ...initialState,
                started: false,
                ...generateGridState()
            };
        case ACTION_RESET:
            return {...initialState};
        case ACTION_TICK:
            return {
                ...state,
                time: state.started && state.time + 1 || state.time
            };
        default:
            return {...state};
    }
};
