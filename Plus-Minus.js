const arr = [-4, 3, -9, 0, 4, 1]

const plusMinus = arr => {
    const f = arr.length
    let z = 0
    let p = 0
    let n = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log(arr[i])
            z++
        } else if (arr[i] < 0) {
            console.log(arr[i])
            n++
        } else if (arr[i] > 0) {
            console.log(arr[i])
            p++
        }
    }
    console.log((p / f).toFixed(6))
    console.log((n / f).toFixed(6))
    console.log((z / f).toFixed(6))
}

plusMinus(arr)
