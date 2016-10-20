console.log("hello world");

// Create Object to hold inputs
var userInputs = {
  input1: "",
  input2: ""
}

// Assign variables to HTML Elements
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var addElement = document.getElementById("add");
var subtractElement = document.getElementById("subtract");
var multiplyElement = document.getElementById("multiply");
var divideElement = document.getElementById("divide");
var resultElement = document.getElementById("result");

// Attach Event Listeners
addElement.addEventListener("click", add);
subtractElement.addEventListener("click", subtract);
multiplyElement.addEventListener("click", multiply);
divideElement.addEventListener("click", divide);
number1.addEventListener("keyup", pushInputs);
number2.addEventListener("keyup", pushInputs);

// If press a key while in number fields, save values
function pushInputs() {
  userInputs.input1 = number1.value;
  userInputs.input2 = number2.value;
  console.log("Number 1:", number1.value);
  console.log("Number 2:", number2.value);
}

function doMath (num1, num2, targetFunction) {
  return targetFunction(num1, num2);
}

// Math Functions

function add () {
  console.log("Add button pressed");
  resultElement.value = Number(userInputs.input1) + Number(userInputs.input2);
}

function subtract() {
  console.log("Subtract button pressed");
  resultElement.value = Number(userInputs.input1) - Number(userInputs.input2);
}

function multiply() {
  console.log("Multiply button pressed");
  resultElement.value = Number(userInputs.input1) * Number(userInputs.input2);
}

function divide() {
  console.log("Divide button pressed");
  resultElement.value = Number(userInputs.input1) / Number(userInputs.input2);
}



// When the user performs one of the operations, output the result to another DOM element of your choice.

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */