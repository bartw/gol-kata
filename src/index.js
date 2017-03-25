(() => {
    const getWorldOop = (currentWorld) => {
        const World = require('./World.js');
        const world = new World(currentWorld);
        return world.tick();
    }

    const getWorldFunc = (currentWorld) => {
        const isUnderPopulation = (trueNeighboursCount) => trueNeighboursCount == 3;
        const isSustenance = (trueNeighboursCount) => trueNeighboursCount == 2;
        const willBeTrue = (cell, trueNeighboursCount) => isUnderPopulation(trueNeighboursCount) ? true : isSustenance(trueNeighboursCount) ? cell : false;

        const isInBounds = (row, column) => row >= 0 && row < currentWorld.length && column >= 0 && column < currentWorld[row].length;
        const getCell = (row, column) => isInBounds(row, column) && currentWorld[row][column] ? 1 : 0;

        const countAdjacentRowTrueNeigbours = (row, column) => getCell(row, column - 1) + getCell(row, column) + getCell(row, column + 1);
        const countCurrentRowTrueNeigbours = (row, column) => getCell(row, column - 1) + getCell(row, column + 1);
        const countTrueNeigbours = (row, column) => countAdjacentRowTrueNeigbours(row + 1, column) + countCurrentRowTrueNeigbours(row, column) + countAdjacentRowTrueNeigbours(row - 1, column);

        return currentWorld.map((row, rowIndex) => row.map((cell, columnIndex) => willBeTrue(cell, countTrueNeigbours(rowIndex, columnIndex))));
    }

    module.exports = getWorldOop
})();

