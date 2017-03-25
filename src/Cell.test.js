const Cell = require('./Cell.js');

test('given a living cell with less than 2 neighbours when tick then the cell dies', () => {
    const cell = new Cell(true, 1);
    const isAlive = cell.tick();

    expect(isAlive).toBe(false);
});

test('given a living cell with 2 neighbours when tick then the cell stays alive', () => {
    const cell = new Cell(true, 2);
    const isAlive = cell.tick();

    expect(isAlive).toBe(true);
});

test('given a dead cell with 2 neighbours when tick then the cell stays dead', () => {
    const cell = new Cell(false, 2);
    const isAlive = cell.tick();

    expect(isAlive).toBe(false);
});

test('given a living cell with 3 neighbours when tick then the cell stays alive', () => {
    const cell = new Cell(true, 3);
    const isAlive = cell.tick();

    expect(isAlive).toBe(true);
});

test('given a dead cell with 3 neighbours when tick then the cell lives', () => {
    const cell = new Cell(false, 3);
    const isAlive = cell.tick();

    expect(isAlive).toBe(true);
});

test('given a living cell with more than 3 neighbours when tick then the cell dies', () => {
    const cell = new Cell(true, 4);
    const isAlive = cell.tick();

    expect(isAlive).toBe(false);
});

test('given a dead cell with more than 3 neighbours when tick then the cell stays dead', () => {
    const cell = new Cell(false, 4);
    const isAlive = cell.tick();

    expect(isAlive).toBe(false);
});