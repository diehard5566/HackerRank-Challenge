const breakingRecords = require('../Week1/Breaking-the-Records')

test('How many times breaking record', () => {
    const arr = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
    expect(breakingRecords(arr)).toEqual([4, 0])
})
