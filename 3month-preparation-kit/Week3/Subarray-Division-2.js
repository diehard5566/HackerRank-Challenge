// const s = [2, 2, 1, 3, 2]
// const d = 4
// const m = 2

// const s = [4]
// const d = 4
// const m = 1

// const s = [1, 2, 1, 3, 2]
// const d = 3
// const m = 2

const s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1]
const d = 18
const m = 7

console.log(s.slice(1, 8))

function birthday(s, d, m) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        const x = s.slice(i, i + m)
        if (x.reduce((a, b) => a + b) === d) count++
    }
    return count
}

console.log(birthday(s, d, m))
