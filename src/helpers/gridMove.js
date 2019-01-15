export default (grid, from, to) => {
    let gridNew = grid.slice().map(row => row.slice())

    let [rowFrom, colFrom] = from;
    let [rowTo, colTo] = to;

    let tmp = gridNew[rowFrom][colFrom].coord;
    gridNew[rowFrom][colFrom].coord = gridNew[rowTo][colTo].coord;
    gridNew[rowTo][colTo].coord = tmp;

    return gridNew;
};
