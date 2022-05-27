const matchingStrings = require('../Week1/Sparse-Arrays')

test('result should be [2,1,0]', () => {
    const strings = ['aba', 'baba', 'aba', 'xzxb']
    const queries = ['aba', 'xzxb', 'ab']

    expect(matchingStrings(strings, queries)).toEqual([2, 1, 0])
})
