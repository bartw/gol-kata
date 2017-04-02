(() => {
    const gridValidator = require('./gridValidator.js');
    const Cell = require('./Cell.js');
    const NeighbourCounter = require('./NeighbourCounter.js');

    function Row(row, countLivingNeigbours) {
        const cells = row.map((cell, columnIndex) => new Cell(cell, countLivingNeigbours(columnIndex, cell)));
        this.tick= () => cells.map(cell => cell.tick());
    }

    module.exports = Row;
})();