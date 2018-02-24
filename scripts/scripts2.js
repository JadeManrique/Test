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

var num1 = prompt("Type in the first number.");
var num2 = prompt("Type in the second number.");

num1 = parseInt(num1);
num2 = parseInt(num2);

var sum = num1 + num2;

console.log(sum);

document.getElementById('Test').innerHTML = "<h1 style=text-align:center;padding-top:300px;>" + sum + "</h1>";
