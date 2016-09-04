var userInput = prompt("what is a common greeting in english?");
var message = sayHello();

function sayHello () {
  if (userInput.toUpperCase() === "HELLO") {
    return "Hello World!";
  } else {
    return "User Error!";
  }
}

alert(message);
