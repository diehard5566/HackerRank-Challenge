const k = 10

// const A = [2, 1, 3]
// const B = [7, 8, 9]
const A = [1, 2, 2, 1]
const B = [3, 3, 3, 4]

const twoArrays = (k, A, B) => {
    let sA = A.sort((a, b) => a - b)
    let sB = B.sort((a, b) => b - a)

    sA
    sB
    for (let i = 0; i < A.length; i++) if (A[i] + B[i] < k) return 'NO'
    return 'YES'
}

console.log(twoArrays(k, A, B))
