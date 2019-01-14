export const ACTION_MOVE = 'ACTION_MOVE';
export const ACTION_TICK = 'ACTION_TICK';
export const ACTION_RESET = 'ACTION_REST';

export const doMove = (from) => {
    return {
        type: ACTION_MOVE,
        payload: from
    };
};

export const doReset = () => {
    return {
        type: ACTION_RESET,
        payload: null
    };
};

export const doTick = () => {
    return {
        type: ACTION_TICK,
        payload: null
    };
};
