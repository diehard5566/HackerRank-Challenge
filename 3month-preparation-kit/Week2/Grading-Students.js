const grades = [73, 67, 38, 33] //[75,67,40,33]

const gradingStudents = grades => {
    for (let i = 0; i < grades.length; i++) {
        console.log(grades[i])
        const round = Math.ceil(grades[i] / 5) * 5

        if (grades[i] < 38) {
            console.log(grades[i])
        } else if (round - grades[i] < 3 && round - grades[i] > 0) {
            grades[i] = round
            console.log(grades[i])
        } else if (round - grades[i] >= 3) {
            console.log(grades[i])
        }

        console.log(grades[i])
    }
    console.log(grades)
}

gradingStudents(grades)

console.log(Math.round(68 / 5) * 5)
