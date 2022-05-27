const flippingBitsStringBased = require('../Week2/Flipping-bits')

test('result should be 4294967292 ', () => {
    const n = 3

    expect(flippingBitsStringBased(n)).toBe(4294967292)
})
