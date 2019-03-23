let calculatorInput = document.getElementById("calculatorInput");
let calculatorInputUp = document.getElementById("calculatorInputUp");
calculatorInput.value = "0"
let numberValue = 0;
let numberValueTemp = 0;
let operator;

let btn_1 = document.getElementById("btn-1");
let btn_2 = document.getElementById("btn-2");
let btn_3 = document.getElementById("btn-3");
let btn_4 = document.getElementById("btn-4");
let btn_5 = document.getElementById("btn-5");
let btn_6 = document.getElementById("btn-6");
let btn_7 = document.getElementById("btn-7");
let btn_8 = document.getElementById("btn-8");
let btn_9 = document.getElementById("btn-9");
let btn_0 = document.getElementById("btn-0");
let btn_multiply = document.getElementById("btn-multiply");
let btn_divide = document.getElementById("btn-divide");
let btn_add = document.getElementById("btn-add");
let btn_subtract = document.getElementById("btn-subtract");
let btn_equal = document.getElementById("btn-equal");
let btn_decimal = document.getElementById("btn-decimal");
let btn_del = document.getElementById("btn-del");


btn_1.addEventListener('click', () => typeNumber("1"));
btn_2.addEventListener('click', () => typeNumber("2"));
btn_3.addEventListener('click', () => typeNumber("3"));
btn_4.addEventListener('click', () => typeNumber("4"));
btn_5.addEventListener('click', () => typeNumber("5"));
btn_6.addEventListener('click', () => typeNumber("6"));
btn_7.addEventListener('click', () => typeNumber("7"));
btn_8.addEventListener('click', () => typeNumber("8"));
btn_9.addEventListener('click', () => typeNumber("9"));
btn_0.addEventListener('click', () => typeNumber("0"));
btn_decimal.addEventListener('click', () => typeNumber("."));
btn_multiply.addEventListener('click', () => typeOperator("*"));
btn_divide.addEventListener('click', () => typeOperator("/"));
btn_add.addEventListener('click', () => typeOperator("+"));
btn_subtract.addEventListener('click', () => typeOperator("-"));
btn_equal.addEventListener('click', () => typeOperator("="));
btn_del.addEventListener('click', () => del());

function typeNumber(number) {
  if (operator === '=') {
    calculatorInput.value = 0;
    operator = null;
  }
  if (operator != undefined || operator != null) {
    calculatorInputUp.innerText = calculatorInput.innerText;
  }
  if (calculatorInput.value == 0) {
    calculatorInput.innerText = number;
    calculatorInput.value = number;
    btn_del.style.display = "block";
  } else {
    calculatorInput.innerText += number;
  }
  numberValue = Number(calculatorInput.innerText);

  console.log("number = " + numberValue);
  console.log("operator = " + operator);
}

function del() {
  calculatorInput.innerText = calculatorInput.innerText.slice(0, -1);
  console.log(calculatorInput.innerText);
}

function typeOperator(op) {
  if (op === "=") {
    if (operator === "+") {
      calculatorInput.innerText = numberValueTemp + numberValue;
    } else if (operator === "-") {
      calculatorInput.innerText = numberValueTemp - numberValue;
    } else if (operator === "/") {
      calculatorInput.innerText = numberValueTemp / numberValue;
    } else if (operator === "*") {
      calculatorInput.innerText = numberValueTemp * numberValue;
    }
    calculatorInputUp.innerText = `Ans: ${calculatorInput.innerText}`;
    numberValueTemp = number(calculatorInput.innerText);
    btn_del.style.display = "none";
  } else {
    numberValueTemp = numberValue;
    console.log("temp = " + numberValueTemp);
    calculatorInput.innerText += ` ${op}  `;
    calculatorInput.value = 0;
    console.log(calculatorInput.value);
  }
  operator = op;
}