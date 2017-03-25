const NeighbourCounter = require('./NeighbourCounter.js');

test('given a cell in the center of a grid when countLiving then only living neighbours are returned', () => {
    const grid = [
        [ true, true, true ],
        [ true, false, true ],
        [ true, true, true ],
    ];

    const neighbourCounter = new NeighbourCounter(grid);
    const livingNeighboursCount = neighbourCounter.countLiving(1, 1);

    expect(livingNeighboursCount).toBe(8);
});

test('given a cell in the top left corner of a grid when countLiving then only living neighbours are returned', () => {
    const grid = [
        [ false, true, true ],
        [ true, true, true ],
        [ true, true, true ],
    ];

    const neighbourCounter = new NeighbourCounter(grid);
    const livingNeighboursCount = neighbourCounter.countLiving(0, 0);

    expect(livingNeighboursCount).toBe(3);
});

test('given a cell in the top right corner of a grid when countLiving then only living neighbours are returned', () => {
    const grid = [
        [ true, true, false ],
        [ true, true, true ],
        [ true, true, true ],
    ];

    const neighbourCounter = new NeighbourCounter(grid);
    const livingNeighboursCount = neighbourCounter.countLiving(0, 2);

    expect(livingNeighboursCount).toBe(3);
});

test('given a cell in the bottom left corner of a grid when countLiving then only living neighbours are returned', () => {
    const grid = [
        [ true, true, true ],
        [ true, true, true ],
        [ false, true, true ],
    ];

    const neighbourCounter = new NeighbourCounter(grid);
    const livingNeighboursCount = neighbourCounter.countLiving(2, 0);

    expect(livingNeighboursCount).toBe(3);
});

test('given a cell in the bottom right corner of a grid when countLiving then only living neighbours are returned', () => {
    const grid = [
        [ true, true, true ],
        [ true, true, true ],
        [ true, true, false ],
    ];

    const neighbourCounter = new NeighbourCounter(grid);
    const livingNeighboursCount = neighbourCounter.countLiving(2, 2);

    expect(livingNeighboursCount).toBe(3);
});