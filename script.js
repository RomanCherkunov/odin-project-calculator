const firstNum = 6
const secondNum = 3
const operand = '/'

function operate (firstNum, operand, secondNum) {
    console.log(operand === '+')
    if(operand === '+') {
        return sum(firstNum, secondNum)
    }
    if(operand === '-') {
        return subtract(firstNum, secondNum)
    }
    if(operand === '*') {
        return multiply(firstNum, secondNum)
    }
    if(operand === '/') {
        return divide(firstNum, secondNum)
    }
}

function sum (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b 
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

console.log(operate(firstNum, operand, secondNum))