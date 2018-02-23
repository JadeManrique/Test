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
