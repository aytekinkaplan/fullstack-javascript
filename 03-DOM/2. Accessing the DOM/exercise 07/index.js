const button = document.createElement("button");
button.style.backgroundColor = "green";
button.style.color = "white";
button.textContent = "Click me";
document.body.appendChild(button);

button.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});
