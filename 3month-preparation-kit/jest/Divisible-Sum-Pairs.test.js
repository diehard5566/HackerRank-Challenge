const divisibleSumPairs = require('../Week1/Divisible-Sum-Pairs')

test('Pairs should be 5', () => {
    const ar = [1, 3, 2, 6, 1, 2]
    const n = 6
    const k = 3
    expect(divisibleSumPairs(n, k, ar)).toBe(5)
})
