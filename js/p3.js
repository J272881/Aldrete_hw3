let input1 = window.prompt("Enter an interger: ");
let num1 = Number(input1);
let input2 = window.prompt("Enter an interger: ");
let num2 = Number(input2);
let operator = prompt(" Enter an operator +, -, *, /, % :");

if ((operator) === '+', '-', '*', '/', '%') {
    op = (operator);
    let answer;
    if ((op) === '+') { answer = num1 + num2; } else if ((op) === '-') {
        answer = num1 - num2;
    } else if ((op) === '*') {
        answer = num1 * num2;
    } else if ((op) === '/') {
        answer = num1 / num2;
    } else if ((op) === '%') {
        answer = num1 % num2;
    } console.log(`${num1} ${op} ${num2} = ${answer}`);
}else {
        console.log("Not an operator");
    }

