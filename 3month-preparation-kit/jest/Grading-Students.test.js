const gradingStudents = require('../Week2/Grading-Students')

test('resuld should be [75,67,40,33]', () => {
    const grades = [73, 67, 38, 33]

    expect(gradingStudents(grades)).toEqual([75, 67, 40, 33])
})
