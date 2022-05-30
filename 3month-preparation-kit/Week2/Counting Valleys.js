const steps = 12

// const path =  'UDDDUDUU'

const path = 'DDUUDDUDUUUD'

function countingValleys(steps, path) {
    // Write your code here
    let sealvl = 0
    let valleys = 0

    for (let i = 0; i < steps; i++) {
        if (path[i] == 'D' || path[i] == 'd') {
            sealvl -= 1 //sealvl--
        } else {
            sealvl += 1 //sealvl++
            if (sealvl === 0) {
                valleys++
            }
        }
    }
    return valleys
}

console.log(countingValleys(steps, path))
