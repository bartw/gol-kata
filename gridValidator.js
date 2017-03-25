(() => {
    const isTwoDimensionalArray = value => value instanceof Array && value.every(row => row instanceof Array);

    const isSquare = twoDimensionalArray => {
        const rows = twoDimensionalArray.length;
        return twoDimensionalArray.every(row => row.length === rows);
    }

    const isBoolean = value => value === true || value === false
    const containsOnlyBooleans = twoDimensionalArray => twoDimensionalArray.every(row => row.every(cell => isBoolean(cell)));

    const validate = grid => {
        if (!isTwoDimensionalArray(grid)) {
            throw new Error('The grid is not a two dimensional array.');
        }

        if (!isSquare(grid)) {
            throw new Error('The grid is not square.');
        }

        if (!containsOnlyBooleans(grid)) {
            throw new Error('The grid does not contain only booleans.');
        }
    };

    module.exports = {
        validate: validate
    }
})()