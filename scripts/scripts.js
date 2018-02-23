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
