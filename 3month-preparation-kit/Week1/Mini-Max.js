const arr = [1, 2, 3, 4, 5]

const miniMaxSum = arr => {
    const sum1 = arr.slice(0, -1).reduce((a, b) => a + b)
    sum1
    const sum2 = arr.slice(1, 5).reduce((a, b) => a + b)
    sum2
    const sum3 = arr
        .slice(0, 1)
        .concat(arr.slice(2, 5))
        .reduce((a, b) => a + b)
    sum3
    const sum4 = arr
        .slice(0, 2)
        .concat(arr.slice(3, 5))
        .reduce((a, b) => a + b)
    sum4
    const sum5 = arr
        .slice(0, 3)
        .concat(arr.slice(4, 5))
        .reduce((a, b) => a + b)
    sum5

    const total = [sum1, sum2, sum3, sum4, sum5]
    console.log(Math.min(...total), Math.max(...total))
}

miniMaxSum(arr)
