import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
var doubleNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(doubleNumbers);
//Filter - Create a new array by keeping the items that return true.
var bigNumbers = numbers.filter(function (x) {
  return x > 40;
});
console.log(bigNumbers);
//Reduce - Accumulate a value by doing something to each item in an array.
var sumNumber = numbers.reduce(function (accumelator, currentNumber) {
  console.log(accumelator);
  return accumelator + currentNumber;
});
console.log(sumNumber);
//Find - find the first item that matches from an array.
var firstFind = numbers.find(function (x) {
  return x > 10;
});
console.log(firstFind);
//FindIndex - find the index of the first item that matches.
var firstFindIndex = numbers.findIndex(function (x) {
  return x > 10;
});
console.log(firstFindIndex);
