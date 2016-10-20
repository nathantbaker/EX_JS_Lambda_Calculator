// Create Object to hold inputs
var userInputs = {
  input1: "",
  input2: ""
}
var n1 = userInputs.input1; // input number 1
var n2 = userInputs.input2; // input number 2

// HTML Elements
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var addElement = document.getElementById("add");
var subtractElement = document.getElementById("subtract");
var multiplyElement = document.getElementById("multiply");
var divideElement = document.getElementById("divide");
var resultElement = document.getElementById("result");
var clearElement = document.getElementById("clear");

// Attach Event Listeners
number1.addEventListener("keyup", pushInputs);
number2.addEventListener("keyup", pushInputs);
addElement.addEventListener("click", function() {
  doMath(n1, n2, add);
});
subtractElement.addEventListener("click", function() {
  doMath(n1, n2, subtract);
});
multiplyElement.addEventListener("click", function() {
  doMath(n1, n2, multiply);
});
divideElement.addEventListener("click", function() {
  doMath(n1, n2, divide);
});
clearElement.addEventListener("click", function() { // Clears calculator
  number1.value = "";
  number2.value = "";
  resultElement.value = "";
});

// If you press a key while in number field, save the values
function pushInputs() {
  n1 = Number(number1.value);
  n2 = Number(number2.value);
}

// doMath Function
function doMath (num1, num2, mathOperation) {
  // Form Validation
  if (isNaN(n1) || isNaN(n2)) {
    alert("You can only do math on numbers silly.");
  } else {
    resultElement.value = mathOperation(num1, num2);
  }
}

// Math Functions
function add (num1, num2) {
  return num1 + num2;
}
function subtract (num1, num2) {
  return num1 - num2;
}
function multiply (num1, num2) {
  return num1 * num2;
}
function divide (num1, num2) {
  return num1 / num2;
}