const str = 'S;M;plasticCup()' //plastic cup

// const str = 'C;V;mobile phone' //mobilePhone

// const str = 'C;C;coffee machine' //  CoffeeMachine

// const str =  'S;C;LargeSoftwareBook'  //large software book

// const str = 'C;M;white sheet of paper' // whiteSheetOfPaper()

// const str =  'S;V;pictureFrame' //  picture frame

// S = split
// C = combine

// M = + ()
// C = class
// V = variable

const processData = input => {
    // input
    // let checkFirst = input.split(';')[0]
    // let checkSecond = input.split(';')[1]
    // let str = input.split(';')[2]
    // checkFirst
    // checkSecond

    // let ans
    // if (checkSecond === 'M') {
    //     if (str.indexOf(')') === -1) {
    //         ans = str + '()'
    //     } else {
    //         ans = str
    //     }
    // } else if (checkSecond === 'C') {
    //     let split = str.split(' ')

    //     split[0] = split[0][0].toUpperCase()+ split[0].slice(1)
    //     split[1] = split[1][0].toUpperCase()+ split[1].slice(1)

    //     ans = split.join('')

    // } else if (checkSecond === 'V') {
    //   str
    //   let split = str.split('')
    //     split
    //     let x  = split.map(element => {
    //       (element === element.toUpperCase())? element.toLowerCase():element
    //     });

    //     x

    // }

    // ans

    const arr = input.split('\r\n')
    const u = w => w.charAt(0).toUpperCase() + w.slice(1)
    const l = w => w.charAt(0).toLowerCase() + w.slice(1)
    for (a of arr) {
        const [sc, mcv, name] = a.split(';')
        const s = sc === 'S'
        let r = name
            .split(s ? /(?=[A-Z])/ : ' ')
            .map(s ? l : u)
            .join(s ? ' ' : '')
        if (mcv === 'M') r = s ? r.slice(0, -2) : r + '()'
        if (mcv !== 'C') r = l(r)
        console.log(r)
        return r
    }
}

// processData(str)
module.exports = processData
