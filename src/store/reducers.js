import { ACTION_MOVE, ACTION_NEW_GAME, ACTION_RESET} from './actions';
import { isEmptyCoordPossibleToMove } from './../helpers/gridFinder';
import { getMovedGrid } from './../helpers/gridMove';
import generateGridState from './../helpers/gridGenerator';

const initialState = {
    started: false,
    moves: 0
};

let startState = {
    ...initialState,
    ...generateGridState()
};

export const rootReducer = (state = startState, action) => {
    switch (action.type) {
        case ACTION_MOVE:
            let fromCoord = action.payload;
            let toCoord = state.emptyCoord;

            if (isEmptyCoordPossibleToMove(fromCoord, toCoord)) {
                return {
                    ...state,
                    started: true,
                    grid: getMovedGrid(state.grid, fromCoord, toCoord),
                    emptyCoord: fromCoord,
                    moves: state.moves + 1
                };
            }

            return {...state};

        case ACTION_NEW_GAME:
            startState = {
                ...initialState,
                started: false,
                ...generateGridState()
            };

            return startState;
        case ACTION_RESET:
            return {...startState};
        default:
            return state;
    }
};
