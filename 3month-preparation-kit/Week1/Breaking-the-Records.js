// const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1] // [2,4]

const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42] //[(4, 0)]

const breakingRecords = arr => {
    let noRe = [...new Set(arr)]

    let count1 = 0
    let count2 = 0
    let highest = noRe[0]
    let low = noRe[0]

    for (let i = 0; i < noRe.length; i++) {
        if (highest < noRe[i]) {
            highest = noRe[i]
            highest
            count1++
        } else if (low > noRe[i]) {
            low = noRe[i]
            low
            count2++
        }
    }
    count1
    count2
    return [count1, count2]
}

breakingRecords(scores)
