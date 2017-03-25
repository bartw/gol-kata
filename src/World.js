(() => {
    const gridValidator = require('./gridValidator.js');
    const Cell = require('./Cell.js');
    const NeighbourCounter = require('./NeighbourCounter.js');

    function World(grid) {
        gridValidator.validate(grid);

        const neighbourCounter = new NeighbourCounter(grid);
        const cellGrid = grid.map((row, rowIndex) => row.map((cell, columnIndex) => new Cell(cell, neighbourCounter.countLiving(rowIndex, columnIndex))));

        this.tick = () => cellGrid.map(row => row.map(cell => cell.tick()));
    }

    module.exports = World;
})();