const s = '07:05:45PM'

const timeConversion = s => {
    const convert = s.split(':')

    if (convert[0] === '12') {
        convert[0] = '00'
    }

    if (convert[2].slice(-2) === 'PM') {
        convert[0] = (parseInt(convert[0]) + 12).toString()
        convert[2] = convert[2].slice(0, -2)
    } else if (convert[2].slice(-2) === 'AM') {
        convert[2] = convert[2].slice(0, -2)
    }

    const result = convert.join(':')
    console.log(result)
}

timeConversion(s)
