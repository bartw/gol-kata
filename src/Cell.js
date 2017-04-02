(() => {
    const alive = true;
    const dead = false;
    const isUnderPopulation = (neighbours) => neighbours === 3;
    const isSustenance = (neighbours) => neighbours === 2;

    function Cell(isAlive, neighbours) {
        this.tick = () => isUnderPopulation(neighbours) ? alive : isSustenance(neighbours) ? isAlive : dead;
    }

    module.exports = Cell;
})();