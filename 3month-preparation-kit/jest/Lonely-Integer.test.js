const lonelyInteger = require('../Week2/Lonely-Integer')

test('result should be 4', () => {
    const a = [1, 2, 3, 4, 3, 2, 1]

    expect(lonelyInteger(a)).toBe(4)
})
