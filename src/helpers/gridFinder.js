export const coordsCompare = (one, two) => {
    return one[0] === two[0]
        && one[1] === two[1];
};

export const isCoordPossibleToMove = (coord, rMax = 4, cMax = 4) => {
    return coord[0] >= 0 && coord[0] < rMax
        && coord[1] >= 0 && coord[1] < cMax;
}

export const getPossibleCoordsToMove = (fromCoord) => {
    let row = fromCoord[0];
    let col = fromCoord[1];

    return [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1]
    ].filter((coords) => isCoordPossibleToMove(coords));
};

export const isEmptyCoordPossibleToMove = (fromCoord, emptyCoord) => {
    let res = getPossibleCoordsToMove(fromCoord).filter(coord => coordsCompare(coord, emptyCoord));

    return res && res[0] ? true : false;
};

export const findByCoord = (grid, coord) => {
    let position = null;

    grid.forEach((cols, row) => {
        cols.forEach((item, col) => {
            if (coordsCompare(coord, item.coord)) {
                position = [row, col];
            }
        });
    });

    return position;
};
