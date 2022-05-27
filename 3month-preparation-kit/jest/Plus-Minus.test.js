const plusMinus = require('../Week1/Plus-Minus')

test('Should contain 3 string w/ num', () => {
    const arr = [-4, 3, -9, 0, 4, 1]

    expect(plusMinus(arr)).toEqual(['0.500000', '0.333333', '0.166667'])
})
