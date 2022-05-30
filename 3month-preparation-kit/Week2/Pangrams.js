const s = 'We promptly judged antique ivory buckles for the next prize'

const pangrams = s => {
    const a = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const as = s.toLowerCase()

    return a.every(x => as.includes(x)) ? 'pangram' : 'not pangram'
}

console.log(pangrams(s))
