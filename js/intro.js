/*var fname = prompt("What is your first name?");

var lname = prompt("What is your last name?");

var age = prompt("How old are you?");

var fullname = fname + " " + lname;

var x = console.log("Your fullname is " + fullname);
console.log("You are " + age + " years old");

document.getElementById("welcome").innerHtml = "Hello";*/

<script>
function myFunction() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
</script>