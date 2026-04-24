function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '÷' && b === 0) return 'ERROR';

    const calculation = {
        '+': add,
        '-': subtract,
        'x': multiply,
        '÷': divide
    }


    return calculation[operator](a, b);
}

let firstNumber = null;
let operator = null;
let secondNumber = null;
let currentInput = ''; 
let shouldResetDisplay = false;

const historyDisplay = document.getElementById('history');
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const dotButton = document.querySelector('.dot');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete')

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (shouldResetDisplay) {
            firstNumber = null;
            operator = null;
            secondNumber = null;
            currentInput = '';
            historyDisplay.textContent = ''
            shouldResetDisplay = false
        }

        currentInput += button.textContent;

        if (firstNumber !== null && operator) {
            display.textContent = `${firstNumber} ${operator} ${currentInput}`
        } else {
            display.textContent = currentInput;
        }

    });
});

dotButton.addEventListener('click', () => {
    if(shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }

    if (currentInput.includes('.')) return;

    if (currentInput === '') {
        currentInput = '0.'
    } else {
        currentInput += '.'
    }

    display.textContent = currentInput;

    if (firstNumber !== null && operator) {
            display.textContent = `${firstNumber} ${operator} ${currentInput}`
        }

})

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (currentInput === '' && firstNumber !== null) {
        operator = button.textContent;
        display.textContent = `${firstNumber} ${operator}`;
        shouldResetDisplay = false;
        return;
    }

    if (firstNumber === null) {
      firstNumber = Number(currentInput);
    } 

    if (operator && currentInput !== '') {
        secondNumber = Number(currentInput);
        historyDisplay.textContent = `${firstNumber} ${operator} ${secondNumber} =`
        firstNumber = operate(operator, firstNumber, secondNumber);
    }

    operator = button.textContent;
    currentInput = '';

    display.textContent = `${firstNumber} ${operator}`;
    shouldResetDisplay = false;

  });
});

equalButton.addEventListener('click', () => {
    if (firstNumber === null || operator === null || currentInput === '') return;

    secondNumber = Number(currentInput);

    const result = operate(operator, firstNumber, secondNumber);

    if (!shouldResetDisplay){
        historyDisplay.textContent = `${firstNumber} ${operator} ${secondNumber} = `
    }
    display.textContent = `${result}`;

    firstNumber = result;
    operator = null;
    currentInput = '';
    shouldResetDisplay = true;

})

deleteButton.addEventListener('click', () => {
    if (shouldResetDisplay) return;
    
    currentInput = currentInput.slice(0, -1);

    if (currentInput === '' && firstNumber === null && operator === null) {
        display.textContent = '0';
    }
    
    display.textContent = currentInput;
    
    if (firstNumber !== null && operator) {
        display.textContent = `${firstNumber} ${operator} ${currentInput}`
    }
    
    if (currentInput === '') return;
})

clearButton.addEventListener('click', () => {
    firstNumber = null;
    operator = null;
    secondNumber = null;
    currentInput = ''; 
    shouldResetDisplay = false;

    display.textContent = 0
    historyDisplay.textContent = ''
})