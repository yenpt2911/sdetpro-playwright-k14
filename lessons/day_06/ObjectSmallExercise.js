/**
 * Student: {name: String, grades: Array[Number]}
 * Given 3 students -> find the best one
 * The best one is the one who has highest score
 * Incase more than 1 persons have same score -> print them all out
 */

let ti = {
    name: "Ti",
    grades: [9,8,6]
}

let teo = JSON.parse(JSON.stringify(ti));
teo.name = "Teo";
teo.grades = [7, 9, 9];

let tun = JSON.parse(JSON.stringify(ti));
tun.name = "Tun";
tun.grades = [6, 7, 8];

const students = [ti, teo, tun];
const bestStudent = findBestStudent(students);
console.log('The best student is: ', bestStudent);


function findBestStudent(students) {
    // Better handle execption cases with data params
    /**
     * Loop over student list as student
     *      get the average grade of the student
     *      if that student has average grade >= currentHighestGrade
     *         bestStudent = this student
     */

    let currentHighestScore = 0;
    let bestStudent = undefined;
    for (const student of students){
        console.log(student);
        const averageScore = calculateAverageScore(student);
        if(averageScore >= currentHighestScore) {
            bestStudent = student;
            currentHighestScore = averageScore;
        }
    }
    return bestStudent;
}

function calculateAverageScore(student) {
    const studentGrades = student.grades;
    let totalGrade = 0;
    let scoreLength = studentGrades.length;
    for (const grade of studentGrades) {
        totalGrade = totalGrade + grade;   
    }
    return Math.floor(totalGrade / scoreLength);
}