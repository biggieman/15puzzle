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
        let tmp = gridNew[fromPosition].coord.slice(0);
        gridNew[fromPosition].coord = gridNew[toPosition].coord.slice(0);
        gridNew[toPosition].coord = tmp;
    }

    return gridNew;
};
