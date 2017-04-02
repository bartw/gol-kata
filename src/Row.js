(() => {
    const Cell = require('./Cell.js');

    function Row(row, countLivingNeigbours) {
        const mapCell = (cell, columnIndex) => new Cell(cell, countLivingNeigbours(columnIndex, cell)).tick();
        this.tick = () => row.map(mapCell);
    }

    module.exports = Row;
})();