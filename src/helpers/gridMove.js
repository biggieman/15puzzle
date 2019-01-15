import { findByCoord } from './gridFinder';

export const getMovedGrid = (grid, fromCoord, toCoord) => {
    let gridNew;

    try {
        // clone grid
        gridNew = JSON.parse(JSON.stringify(grid));
    } catch {
        return grid;
    }

    let fromPosition = findByCoord(gridNew, fromCoord);
    let toPosition = findByCoord(gridNew, toCoord);

    // swap
    if (fromPosition && toPosition) {
        let [rowFrom, colFrom] = fromPosition;
        let [rowTo, colTo] = toPosition;

        let tmp = gridNew[rowFrom][colFrom].coord.slice(0);
        gridNew[rowFrom][colFrom].coord = gridNew[rowTo][colTo].coord.slice(0);
        gridNew[rowTo][colTo].coord = tmp;
    }

    return gridNew;
};
