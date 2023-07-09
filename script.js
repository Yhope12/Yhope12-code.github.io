let firstNumber = document.getElementById("firstNum");
let secondNumber = document.getElementById("secondNum");
let calculate = document.getElementById("calculateBtn");
let result = document.getElementById("result");
let operator = document.getElementById("operator");

calculate.addEventListener("click", addition);

function addition() {
  let answer;
  let num1 = firstNumber.value;
  let num2 = secondNumber.value;
  if (operator.value === "+") {
    answer = parseFloat(num1) + parseFloat(num2);
  }
  if (operator.value === "-") {
    answer = parseFloat(num1) - parseFloat(num2);
  }
  if (operator.value === "*") {
    answer = parseFloat(num1) * parseFloat(num2);
  }
  if (operator.value === "/") {
    answer = parseFloat(num1) / parseFloat(num2);
  }

  result.innerText = answer;
}
