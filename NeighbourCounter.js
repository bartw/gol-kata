(() => {
    function NeighbourCounter(grid) {
        const isCellInBounds = (row, column) => row >= 0 && row < grid.length && column >= 0 && column < grid[row].length;
        const isCellAlive = (row, column) => grid[row][column];
        
        const getCellValue = (row, column) => isCellInBounds(row, column) && isCellAlive(row, column) ? 1 : 0;
        
        const countAdjacentRowLiving = (row, column) => getCellValue(row, column - 1) + getCellValue(row, column) + getCellValue(row, column + 1);
        const countCurrentRowLiving = (row, column) => getCellValue(row, column - 1) + getCellValue(row, column + 1);

        this.countLiving = (row, column) => countAdjacentRowLiving(row + 1, column) + countCurrentRowLiving(row, column) + countAdjacentRowLiving(row - 1, column);
    }

    module.exports = NeighbourCounter;
})();