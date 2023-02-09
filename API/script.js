const button = document.getElementById("btn");
const textContainer = document.getElementById("text-container");

button.addEventListener("click", function() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.text())
    .then(data => {
      textContainer.innerHTML = data;
    })
    .catch(error => console.error(error));
});