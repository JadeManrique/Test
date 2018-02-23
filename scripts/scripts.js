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
