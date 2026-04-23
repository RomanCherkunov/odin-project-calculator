const screen = document.querySelector(".screen p");
const buttons = Array.from(document.querySelectorAll(".btn"));

buttons.forEach((button) => {
  button.addEventListener("click", onButtonClick);
});

const firstNum = 6;
const secondNum = 3;
const operand = "/";

function operate(firstNum, operand, secondNum) {
  console.log(operand === "+");
  if (operand === "+") {
    return sum(firstNum, secondNum);
  }
  if (operand === "-") {
    return subtract(firstNum, secondNum);
  }
  if (operand === "*") {
    return multiply(firstNum, secondNum);
  }
  if (operand === "/") {
    return divide(firstNum, secondNum);
  }
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function upDateScreen(value) {
  screen.textContent += value;
}

function clearScreen() {
  screen.textContent = 0;
}

function onButtonClick(e) {
  if (screen.textContent == 0) {
    screen.textContent = "";
  }
  const value = e.target.textContent;
  upDateScreen(value);

  if (e.target.textContent == "C") {
    clearScreen();
  }
}

console.log(operate(firstNum, operand, secondNum));
