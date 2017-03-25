const World = require('./World.js');

test('given an invalid grid when createing a World then an error is thrown', () => {
    const grid = [
        [1, true, true],
        [true, false, true],
        [false, false, false]
    ];
    expect(() => new World(grid)).toThrow();
});

test('given a valid grid when tick then a two dimensional array is returned', () => {
    const grid = [
        [true, true, true],
        [true, false, true],
        [false, false, false]
    ];

    const world = new World(grid);
    const newGrid = world.tick();

    expect(newGrid instanceof Array).toBeTruthy();
    expect(newGrid.every(row => row instanceof Array)).toBeTruthy();
});

test('given a valid grid when tick then a grid with the same dimensions is returned', () => {
    const grid = [
        [true, true, true],
        [true, false, true],
        [false, false, false]
    ];

    const world = new World(grid);
    const newGrid = world.tick();

    expect(newGrid.length).toBe(3);
    expect(newGrid.every(row => row.length == 3)).toBeTruthy();
});

test('given a valid grid when tick then a grid with only booleans is returned', () => {
    const grid = [
        [true, true, true],
        [true, false, true],
        [false, false, false]
    ];

    const world = new World(grid);
    const newGrid = world.tick();

    expect(newGrid.every(row => row.every(cell => cell === true || cell === false))).toBeTruthy();
});

test('given a valid grid when tick then a different grid is returned', () => {
    const grid = [
        [true, true, true],
        [true, false, true],
        [false, false, false]
    ];

    const world = new World(grid);
    const newGrid = world.tick();

    expect(newGrid).not.toBe(grid);
});