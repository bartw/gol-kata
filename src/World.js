(() => {
    const gridValidator = require('./gridValidator.js');
    const NeighbourCounter = require('./NeighbourCounter.js');
    const Row = require('./Row.js');

    function World(grid) {
        gridValidator.validate(grid);

        const neighbourCounter = new NeighbourCounter(grid);
        const rows = grid.map((row, rowIndex) => new Row(row, column => neighbourCounter.countLiving(rowIndex, column)));
        this.tick = () => rows.map(row => row.tick());
    }

    module.exports = World;
})();