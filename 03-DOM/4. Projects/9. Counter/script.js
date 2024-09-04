const counterElement = document.getElementById("value");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
let counter = 0;

decreaseBtn.addEventListener("click", () => {
  counter--;
  updateCounter();
});

increaseBtn.addEventListener("click", () => {
  counter++;
  updateCounter();
});

function updateCounter() {
  counterElement.textContent = counter;
  counterElement.style.animation = "none";
  counterElement.offsetHeight; // Trigger reflow
  counterElement.style.animation = "pulse 0.5s ease";

  if (counter > 0) {
    counterElement.style.color = "#28a745";
  } else if (counter < 0) {
    counterElement.style.color = "#dc3545";
  } else {
    counterElement.style.color = "#ffc107";
  }
}
