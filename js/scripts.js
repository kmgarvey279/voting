$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $("#over18").show();
  } else if (age === 18) {
    alert("Congradulations on turning 18, are you ready to start voting?");
    $("#over18").show();
  } else {
    $("#under18").show();
  }
});
