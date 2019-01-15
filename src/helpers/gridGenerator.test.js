import { generateGrid } from './gridGenerator';

it('generateGrid contains all digits with emptyone', () => {
    let grid = generateGrid([0, 0], 4, 4);

    expect(grid[0][0].value).toBe(0);

    let digits = grid.map(cols => {
        return cols.map(item => item.value);
    })
    .reduce((sum, cols) => sum.concat(cols), [])
    .sort((a, b) => a - b);

    expect(digits.length).toBe(16);
    expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
});

it('generateGrid random generated', () => {
    let grid = generateGrid([0, 0], 4, 4);

    expect(generateGrid([0, 0], 4, 4)).not.toEqual(grid);
    expect(generateGrid([0, 0], 4, 4)).not.toEqual(grid);
});
