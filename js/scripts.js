$(document).ready(function() {
  var animal = prompt("Choose between snakes, turtles, or insects.");

  if (animal === "snakes") {
    alert("Be careful! A NOPE ROPE is Dangerous");
    $('#snakes').show();
  } else if (animal === "turtles") {
    $('#turtles').show();
  } if (animal === "insects") {
    $('#insects').show();
  }
});
