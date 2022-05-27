const arr = [11, 2, 4, 4, 5, 6, 10, 8, -12]

const diagonalDifference = arr => {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i][i] - arr[i][arr.length - i - 1]

        console.log(arr[i][i])
    }
    return Math.abs(result)
}
console.log(diagonalDifference(arr))

module.exports = diagonalDifference
