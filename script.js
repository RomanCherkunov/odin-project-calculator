const screen = document.querySelector(".screen p");
const buttons = Array.from(document.querySelectorAll(".btn"));

buttons.forEach((button) => {
  button.addEventListener("click", onButtonClick);
});

let data = {
  firstNum: "",
  secondNum: 0,
  operand: "",
  total: 0,
  numberCount: 1,
  operandsArr: ["+", "-", "*", "/"],
};

function operate(firstNum, operand, secondNum) {
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

function onButtonClick(e) {
  const value = e.target.textContent;

  if (value == "C") {
    clearScreen();
    data = resetData();
    console.log(data)
    return;
  }

  if( value == '=') {
    data.firstNum = parseFloat(data.firstNum)
    data.secondNum = parseFloat(data.secondNum)
    data.total = operate(data.firstNum, data.operand, data.secondNum)
    screen.textContent = data.total
    console.log(data)
    return
  }

  if (data.operandsArr.some((el) => value.includes(el))) {
    data.numberCount += 1;
    data.operand = value
    console.log(data);
    clearScreen();
    return;
  }

  updateData(value);
  updateScreen();
  console.log(data);
}

function updateData(value) {
  if (data.numberCount == 2) {
    data.secondNum += value;
    return;
  }
  data.firstNum += value;
}

function updateScreen() {
  if (data.numberCount == 2) {
    screen.textContent = data.secondNum;
    return;
  }
  screen.textContent = data.firstNum;
}

function clearScreen() {
  data.secondNum = "";
  screen.textContent = 0;
}

function resetData() {
  return {
    ...data,
    firstNum: "",
    secondNum: 0,
    operand: "",
    total: 0,
    numberCount: 1,
    operandsArr: ["+", "-", "*", "/"],
  };
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
