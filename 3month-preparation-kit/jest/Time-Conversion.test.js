const timeConversion = require('../Week1/Time-Conversion')

test('result should be 24hr ', () => {
    const s = '07:05:45PM'

    expect(timeConversion(s)).toBe('19:05:45')
})
