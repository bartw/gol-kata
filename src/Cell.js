(() => {
    function Cell(isAlive, neighbours) {
        const isUnderPopulation = () => neighbours === 3;
        const isSustenance = () => neighbours === 2;
        
        this.tick = () => isUnderPopulation() ? true : isSustenance() ? isAlive : false;
    }

    module.exports = Cell;
})();