const gridValidator = require('./gridValidator.js');

test('given a grid that is not an array when validate then an error is thrown', () => {
    const grid = {};
    expect(() => gridValidator.validate(grid)).toThrowError('The grid is not a two dimensional array.');
});

test('given a grid that is a single dimensional array when validate then an error is thrown', () => {
    const grid = [1];
    expect(() => gridValidator.validate(grid)).toThrowError('The grid is not a two dimensional array.');
});

test('given a grid with more rows than columns when validate then an error is thrown', () => {
    const grid = [
        [true],
        [false]
    ];
    expect(() => gridValidator.validate(grid)).toThrowError('The grid is not square.');
});

test('given a grid with less rows than columns when validate then an error is thrown', () => {
    const grid = [
        [true, true, true],
        [false, false, false]
    ];
    expect(() => gridValidator.validate(grid)).toThrowError('The grid is not square.');
});

test('given a grid with irregular columns when validate then an error is thrown', () => {
    const grid = [
        [true, true, true],
        [true, false],
        [false, false, false]
    ];
    expect(() => gridValidator.validate(grid)).toThrowError('The grid is not square.');
});

test('given a grid with some values that are not a bool when validate then an error is thrown', () => {
    const grid = [
        [1, true, true],
        [true, false, true],
        [false, false, false]
    ];
    expect(() => gridValidator.validate(grid)).toThrowError('The grid does not contain only booleans.');
});

test('given a valid grid when validate then no error is thrown', () => {
    const grid = [
        [true, true, true],
        [true, false, true],
        [false, false, false]
    ];
    expect(() => gridValidator.validate(grid)).not.toThrow();
});

test('given an empty grid when validate then no error is thrown', () => {
    const grid = [];
    expect(() => gridValidator.validate(grid)).not.toThrow();
});