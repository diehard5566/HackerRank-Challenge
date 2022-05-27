const processData = require('../Week1/Camel-Case-4')

test('Should be change to camel case', () => {
    const str = 'S;M;plasticCup()'
    expect(processData(str)).toEqual('plastic cup')
})
