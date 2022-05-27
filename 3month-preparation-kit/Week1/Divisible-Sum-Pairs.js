const ar = [1, 3, 2, 6, 1, 2]
const n = 6
const k = 3

const divisibleSumPairs = (n, k, ar) => {
    let count = 0

    for (let i = 0; i < n; i++) {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
        for (let j = i + 1; j < n; j++) {
            console.log(ar[i], ar[j])
            if ((ar[i] + ar[j]) % k === 0) {
                count++
            }
        }
    }
    return count
}

// divisibleSumPairs(n, k, ar)

module.exports = divisibleSumPairs
