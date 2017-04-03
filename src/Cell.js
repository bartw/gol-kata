(() => {
    const alive = true;
    const dead = false;
    const isReproduction = (neighbours) => neighbours === 3;
    const isSustenance = (neighbours) => neighbours === 2;

    function Cell(isAlive, neighbours) {
        this.tick = () => isReproduction(neighbours) ? alive : isSustenance(neighbours) ? isAlive : dead;
    }

    module.exports = Cell;
})();
