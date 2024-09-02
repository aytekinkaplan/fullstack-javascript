const allButtons = document.querySelectorAll(".btn");
allButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});
