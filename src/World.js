(() => {
    const gridValidator = require('./gridValidator.js');
    const NeighbourCounter = require('./NeighbourCounter.js');
    const Row = require('./Row.js');

    function World(grid) {
        gridValidator.validate(grid);

        const neighbourCounter = new NeighbourCounter(grid);
        
        const mapRow = (row, rowIndex) => new Row(row, column => neighbourCounter.countLiving(rowIndex, column)).tick();
        this.tick = () => grid.map(mapRow);
    }

    module.exports = World;
})();