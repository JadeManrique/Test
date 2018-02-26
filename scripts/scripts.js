// Single Line Comment //
/* Multi-Line Comment */
/*
==: Comparison
===: Type Comparison
>=: bigger or equal to left side
<=: smaller of equal to left side
!=: should not be the same as left side
*/

/* count = count + 1; is the same as count++; */

document.getElementById("Test").innerHTML = "Test";

document.getElementByClassName("Test").innerHTML = "Test";

var html = document.getElementById("test");

html.getElementByClassName("words").innerHTML = "This is inside";

//variables
var name = "Jade";
var lastName = "Manrique";
var num1 = 100;
var num2 = 320;
var never = true;

//for loops
for (var i = 0; i < 10; i++) {
  //console.log(name);
  name += "*";
}

//if statements
if (never) {
  if (num1 < num2){
    //console.log("Two ifs in one");
  }
}

if (num1 < num2) {
  for (var d = 0; d < 10; d++) {
    console.log("Yes");
  }
}

if (name == "Jade") {
  //console.log("Example using strings");
}

//arrays
var crab = [name, lastName, num1, num2];

//console.log examples
console.log(never);

console.log(num1 + num2);

//functions
function myFirstFunction() {
  console.log("My first function! Yay!");
}

myFirstFunction();


// random examples
var text = '<p> I am rich. </p>';
var no = '<p> Refresh page and answer again. </p>';
var yes = '<p> Okay. Type in all your banking information please. </p>';
var day = 'Basic Day';

day = prompt("Do you want all my money?");

if (day == "no") {
  document.getElementById("Test").innerHTML = no;
} else if (day == "yes") {
  document.getElementById("Test").innerHTML = yes;
}
//
var name = "Jade";
var bacon = "Bacon";

function myFirstFunction(name) {
  console.log(bacon);
}

myFirstFunction("bring tacos please");
myFirstFunction("bring burritos too!");

for (var i = 0; i < 10; i++) {
  console.log(bacon);
  bacon += "!";
}

myFirstFunction(name);

console.log("top secret text! you win absolutely nothing!");


// calculator
var num1 = prompt("Type in the first number.");
var num2 = prompt("Type in the second number.");

num1 = parseInt(num1);
num2 = parseInt(num2);

var sum = num1 + num2;

console.log(sum);

document.getElementById('Test').innerHTML = "<h1 style=text-align:center;padding-top:300px;>" + sum + "</h1>";

// random quote generator

var quotes = [
  "Life is just a ride.",
  "Listen. Smile. Agree. And do whatever the hell you were going to do anyway.",
  "Be happy. Don't worry, be happy now",
  "Skate or die.",
  "We are all elements of the universe experiencing itself and learning about itself.",
  "Empty your mind, be formless, shapeless — like water. Now you put water in a cup, it becomes the cup; You put water into a bottle it becomes the bottle; You put it in a teapot it becomes the teapot. Now water can flow or it can crash. Be water, my friend."
];

var randomNumber = Math.random() * quotes.length;
randomNumber = Math.floor(randomNumber);

document.getElementById("Test").innerHTML = quotes[randomNumber];


// another calculator

//html paart
/*
<div>
  <form>
    <input id="num1" type="text" />
      <p> integers </p>
    <input id="num2" type="text" />
      <p> = </p>
    <input id="results" type="text" />
  </form>
</div>

<button onclick="multiply()"> * </button>
<button onclick="divide()"> % </button>
<button onclick="add()"> + </button>
<button onclick="subtract()"> - </button>
*/

function multiply() {
  var firstNumber = document.getElementById("num1").value;
  var secondNumber = document.getElementById("num2").value;
  var product = Number.parseInt(firstNumber) * Number.parseInt(secondNumber);
  console.log(product);
  document.getElementById("results").value = product;
}

function divide() {
  var firstNumber = document.getElementById("num1").value;
  var secondNumber = document.getElementById("num2").value;
  var quotient = Number.parseInt(firstNumber) / Number.parseInt(secondNumber);
  document.getElementById("results").value = quotient;
}

function add() {
  var firstNumber = document.getElementById("num1").value;
  var secondNumber = document.getElementById("num2").value;
  var sum = Number.parseInt(firstNumber) + Number.parseInt(secondNumber);
  document.getElementById("results").value = sum;
}

function subtract() {
  var firstNumber = document.getElementById("num1").value;
  var secondNumber = document.getElementById("num2").value;
  var difference = Number.parseInt(firstNumber) - Number.parseInt(secondNumber);
  document.getElementById("results").value = difference;
}
