const a = [1, 2, 3, 4, 3, 2, 1]

const lonelyInteger = a => {
    for (let i = 0; i < a.length; i++) {
        console.log(a.indexOf(a[i]))
        console.log(a.lastIndexOf(a[i]))

        if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
            return a[i]
        }
    }
}

module.exports = lonelyInteger
lonelyInteger(a)
