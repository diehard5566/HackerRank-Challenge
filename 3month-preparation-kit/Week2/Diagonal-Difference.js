const arr = [11, 2, 4, 4, 5, 6, 10, 8, -12]

const diagonalDifference = arr => {
    // let lrdiag = 0
    // let rldiag = 0

    // for (let i = 0; i < arr.length; i++) {
    //     lrdiag += arr[i][i]
    //     rldiag += arr[i][arr.length - i - 1]
    // }
    // return Math.abs(lrdiag - rldiag)

    let sum1 = 0
    let sum2 = 0
    let i = 0
    let j = arr.length - 1
    while (i < arr.length) {
        sum1 += arr[i][i]
        sum2 += arr[i][j]
        i++
        j--
    }
    i
    j

    return Math.abs(sum1 - sum2)
}
console.log(diagonalDifference(arr))

module.exports = diagonalDifference
