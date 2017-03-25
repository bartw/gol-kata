const getWorld = require('./index.js');

test('given a 2 dimensional list when getWorld then a 2 dimensional list is returned', () => {
    const currentWorld = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    const nextWorld = getWorld(currentWorld);

    expect(nextWorld).not.toBe(currentWorld);
    expect(nextWorld instanceof Array).toBeTruthy();
    nextWorld.forEach((row) => { expect(row instanceof Array).toBeTruthy() });
});

test('given a current world with 1 live cell when getWorld then the next world has no live cells', () => {
    const currentWorld = [
        [false, false, false],
        [false, true, false],
        [false, false, false]
    ];
    const expectedWorld = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    const nextWorld = getWorld(currentWorld);

    expect(nextWorld).toEqual(expectedWorld);
});

test('given a world when there are only live cells with less than 2 live neighbours then the next world has no live cells', () => {
    const currentWorld = [
        [true, false, false, true, false, true],
        [false, false, false, false, false, false],
        [false, false, true, false, false, false],
        [false, false, false, true, false, true],
        [false, false, false, false, false, false],
        [true, false, false, true, false, true]
    ];
    const expectedWorld = [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]
    ];
    const nextWorld = getWorld(currentWorld);

    expect(nextWorld).toEqual(expectedWorld);
});

test('given a world when there are only live cells with 2 or 3 neighbours and dead cells with 2 neighbours at max then the next world has the same live cells', () => {
    const currentWorld = [
        [true, true, false, false, false, false, false, false, false, true, true, false, true, true],
        [true, true, false, false, false, false, false, false, false, true, true, false, true, true],
        [false, false, false, false, true, true, false, false, false, false, false, false, false, false],
        [false, false, false, false, true, true, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [true, true, false, false, false, false, false, false, true, true, false, false, true, true],
        [true, true, false, false, false, false, false, false, true, true, false, false, true, true]
    ];
    const nextWorld = getWorld(currentWorld);

    expect(nextWorld).toEqual(currentWorld);
});

test('given a world when there are live cells with more than 3 live neighbours then these cells die', () => {
    const currentWorld = [
        [true, true, true, false, false, false],
        [true, true, false, false, false, false],
        [true, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]
    ];
    const expectedWorld = [
        [true, false, true, false, false, false],
        [false, false, true, false, false, false],
        [true, true, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false]
    ];
    const nextWorld = getWorld(currentWorld);

    expect(nextWorld).toEqual(expectedWorld);
});