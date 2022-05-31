const s = 'SOSTOT' //2

// const s  = 'SOSSPSSQSSOR' //3
// const s = 'OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS' //20

const marsExplorations = s => {
    const expect = s.length / 3
    const sos = 'SOS'.repeat(expect)
    let count = 0

    for (let i = 0; i < sos.length; i++) {
        if (s[i] != sos[i]) {
            count++
        }
    }
    return count
}

marsExplorations(s)
