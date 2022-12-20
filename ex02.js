
const students = [
    { name: "Rodolfo", testGrade: 7 },
    { name: "Maria", testGrade: 5 },
    { name: "João", testGrade: 8 },
    { name: "Bruno", testGrade: 9 },
    { name: "Carla", testGrade: 3 },
    { name: "Ana", testGrade: 2 },
    { name: "Julio", testGrade: 10 }
]

const result = students.map(student => {
    if (student.testGrade >= 7) {
        const newResult = {
            name: student.name,
            finalResult: "approved"
        }
        return newResult
    } else {
        const newResult = {
            name: student.name,
            finalResult: "disapproved"
        }
        return newResult
    }

})
console.log (result)