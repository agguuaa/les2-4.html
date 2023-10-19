function displayWelcomeMessage() {
  var name = prompt("What's your name?");
  var yearOfBirth = prompt("What year were you born?");
  var currentYear = new Date().getFullYear();
  var age = currentYear - yearOfBirth;

  var welcomeMessage = "Hello " + name + "! You are " + age + " years old.";
  console.log(
    "The letter 'r' first appears at position " +
      welcomeMessage.indexOf("r") +
      "."
  );

  var welcomeElement = document.createElement("h1");
  var textNode = document.createTextNode(welcomeMessage);
  welcomeElement.appendChild(textNode);

  document.body.appendChild(welcomeElement);
}

displayWelcomeMessage();
