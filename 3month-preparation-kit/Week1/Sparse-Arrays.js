const strings = ['aba', 'baba', 'aba', 'xzxb']
const queries = ['aba', 'xzxb', 'ab']
// [2, 1,0]

const matchingStrings = (strings, queries) => {
    let count = 0
    let result = []

    for (let i of queries) {
        console.log('@@@@@@@@@@@@@@@@@@@@')
        for (j of strings) {
            if (i === j) {
                count++
                console.log(count)
            }
        }
        result.push(count)
        count = 0
    }
    return result
}

matchingStrings(strings, queries)
