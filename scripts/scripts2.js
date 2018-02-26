function myFunction() {
  var password = document.getElementById("password").value;
  if ( password == "chickens") {
    var argue = alert("Welcome Back, Jade!");
    return "Correct!";
  } else {
    return alert("Incorrect Password");
  }
}
