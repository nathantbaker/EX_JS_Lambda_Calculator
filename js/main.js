console.log("hello world");

// Attach Event Listeners to buttons
document.getElementById("add").addEventListener("click", mathAdd);
document.getElementById("subtract").addEventListener("click", mathSubtract);
document.getElementById("multiply").addEventListener("click", mathMultiply);
document.getElementById("divide").addEventListener("click", mathDivide);

// Object to Hold Inputs

var userInputs = {
  number1: "",
  number2: ""
}

// Math Functions

function mathAdd() {
  console.log("Add button pressed");
}

function mathSubtract() {
  console.log("Subtract button pressed");
}

function mathMultiply() {
  console.log("Multiply Function pressed");
}

function mathDivide() {
  console.log("Divide Function pressed");
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