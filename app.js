const firstName = "Mike";
const valueOfPi = 3.142;
let isValid = true;
let jsObject = console;
let jsMethod = console.log;
let jsSymbol = Symbol();
let emptyVariable = null;
let unusedVariable;

console.log("firstName: " + typeof firstName);
console.log("valueOfPi: " + typeof valueOfPi);
console.log("isValid: " + typeof isValid);
console.log("jsObject: " + typeof jsObject);
console.log("jsMethod: " + typeof jsMethod);
console.log("jsSymbol: " + typeof jsSymbol);
console.log("emptyVariable: " + typeof emptyVariable);
console.log("unusedVariable: " + typeof unusedVariable);

console.log("8 x 8: " + square(8));
console.log("8 + 20: " + add(8, 20));
console.log("8 + 10: " + add(8));
console.log("(8 x 8) + (8 + 10): " + squareAdd(8));

function square(arg) {
  return arg * arg;
}
function add(argOne, argTwo = 10) {
  return argOne + argTwo;
}
function squareAdd(arg) {
  let result = square(arg);
  return result + add(arg);
}
