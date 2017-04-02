const Row = require('./Row.js');

test('given a row with some cells when tick then the an array of same length is returned', () => {
    const cells = [true, false, true];
    const row = new Row(cells, () => 3);
    const newRow = row.tick();

    expect(newRow.length).toBe(cells.length);
});

test('given a row with some cells when tick then the countLivingNeighbours is called row.length times', () => {
    const cells = [true, false, true];
    const countLivingNeighbours = jest.fn();
    const row = new Row(cells, countLivingNeighbours);
    row.tick();

    expect(countLivingNeighbours).toHaveBeenCalledTimes(3);
});