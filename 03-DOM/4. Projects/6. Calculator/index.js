// DOM elementlerini seçme
const displayElement = document.getElementById("display");

// Temel hesap makinesi işlevleri
function Clear() {
  displayElement.value = "0";
}

function del() {
  displayElement.value = displayElement.value.slice(0, -1);
  if (displayElement.value === "") {
    displayElement.value = "0";
  }
}

function display(value) {
  if (displayElement.value === "0" && value !== ".") {
    displayElement.value = value;
  } else {
    displayElement.value += value;
  }
}

function Calculate() {
  try {
    const result = eval(displayElement.value);
    addToHistory(displayElement.value + " = " + result);
    displayElement.value = result;
  } catch (error) {
    displayElement.value = "Error";
  }
}

// Matematiksel işlevler
function Square() {
  displayElement.value = Math.pow(parseFloat(displayElement.value), 2);
}

function Percentage() {
  displayElement.value = parseFloat(displayElement.value) / 100;
}

function SquareRoot() {
  displayElement.value = Math.sqrt(parseFloat(displayElement.value));
}

function Cube() {
  displayElement.value = Math.pow(parseFloat(displayElement.value), 3);
}

function CubeRoot() {
  displayElement.value = Math.cbrt(parseFloat(displayElement.value));
}

function Log() {
  displayElement.value = Math.log10(parseFloat(displayElement.value));
}

function Ln() {
  displayElement.value = Math.log(parseFloat(displayElement.value));
}

function Exp() {
  displayElement.value = Math.exp(parseFloat(displayElement.value));
}

// Trigonometrik fonksiyonlar
function Sin() {
  displayElement.value = Math.sin(parseFloat(displayElement.value));
}

function Cos() {
  displayElement.value = Math.cos(parseFloat(displayElement.value));
}

function Tan() {
  displayElement.value = Math.tan(parseFloat(displayElement.value));
}

function ASin() {
  displayElement.value = Math.asin(parseFloat(displayElement.value));
}

function ACos() {
  displayElement.value = Math.acos(parseFloat(displayElement.value));
}

function ATan() {
  displayElement.value = Math.atan(parseFloat(displayElement.value));
}

// Diğer matematiksel işlevler
function Abs() {
  displayElement.value = Math.abs(parseFloat(displayElement.value));
}

function Floor() {
  displayElement.value = Math.floor(parseFloat(displayElement.value));
}

function Ceil() {
  displayElement.value = Math.ceil(parseFloat(displayElement.value));
}

function Random() {
  displayElement.value = Math.random();
}

function Sign() {
  displayElement.value = Math.sign(parseFloat(displayElement.value));
}

function Pi() {
  displayElement.value = Math.PI;
}

function E() {
  displayElement.value = Math.E;
}

function Mod() {
  displayElement.value = parseFloat(displayElement.value) % 2;
}

function Factorial() {
  const n = parseInt(displayElement.value);
  if (n < 0) {
    displayElement.value = "Error";
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    displayElement.value = result;
  }
}

function Hex() {
  displayElement.value = parseInt(displayElement.value)
    .toString(16)
    .toUpperCase();
}

// Yeni eklenen özellikler
function toggleSign() {
  displayElement.value = parseFloat(displayElement.value) * -1;
}

function inverse() {
  displayElement.value = 1 / parseFloat(displayElement.value);
}

function toRadians() {
  displayElement.value = parseFloat(displayElement.value) * (Math.PI / 180);
}

function toDegrees() {
  displayElement.value = parseFloat(displayElement.value) * (180 / Math.PI);
}

// Bellek işlevleri
let memory = 0;

function memoryStore() {
  memory = parseFloat(displayElement.value);
}

function memoryRecall() {
  displayElement.value = memory;
}

function memoryAdd() {
  memory += parseFloat(displayElement.value);
}

function memorySubtract() {
  memory -= parseFloat(displayElement.value);
}

function memoryClear() {
  memory = 0;
}

// Geçmiş işlevi
const history = [];

function addToHistory(calculation) {
  history.push(calculation);
  if (history.length > 10) {
    history.shift();
  }
}

function showHistory() {
  alert("Hesaplama Geçmişi:\n" + history.join("\n"));
}

// Keypress olayını dinleme
document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
  if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
    display(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    display(e.key);
  } else if (e.key === "Enter") {
    Calculate();
  } else if (e.key === "Backspace") {
    del();
  } else if (e.key === "Escape") {
    Clear();
  }
}

// İnitialize
Clear();
