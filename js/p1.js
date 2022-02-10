let NameEntered = prompt("Please enter your name:");
let GradeStanding = prompt("Enter the number of units completed greater or equal to zero:");

if (Number(GradeStanding) >= 0) {
    units = Number(GradeStanding);
    let grade;
    if (units <= 30) {
        grade = "Freshman";
    } else if (units <= 60) {
        grade = "Sophemore"
    } else if (units <= 90) {
        grade = "Junior"
    } else if (units >= 91) {
        grade = "Senior"
    }
    console.log(`Hello ${NameEntered}. Your grade standing is ${grade}`);
} else {
    console.log(`${NameEntered} your answer is invalid. Please enter a number great or equal to Zero.`)
}

