const learnButton = document.getElementById("learnButton");
const message = document.getElementById("message");

learnButton.addEventListener("click", function () {
  message.textContent = "Hello! My first website is working!";
  learnButton.textContent = "It works!";
});
