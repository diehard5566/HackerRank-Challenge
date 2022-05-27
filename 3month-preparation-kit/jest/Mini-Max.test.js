const miniMaxSum = require('../Week1/Mini-Max')

test('5 number ', () => {
    const arr = [1, 2, 3, 4, 5]

    expect(miniMaxSum(arr)).toEqual([10, 14])
})
