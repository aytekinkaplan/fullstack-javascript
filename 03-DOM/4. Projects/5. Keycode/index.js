// Alphabet array
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// Characters array
const characters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");

// Function to get a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate a random alphabet
const randomAlpha = () => getRandomElement(alphabet);

// Function to generate a random character
const randomCharacter = () => getRandomElement(characters);

// Function to generate a random number
const randomNumber = () => Math.floor(Math.random() * 10);

// Array of functions to generate different types of characters
const listedElements = [randomAlpha, randomNumber, randomCharacter];

// Function to generate a single random character for the password
const generateKey = () => {
  const element = getRandomElement(listedElements);
  return element();
};

// Function to generate the entire password
const generatePassword = (length = 8) => {
  return Array.from({ length }, generateKey).join("");
};

// Function to set up the UI and event listeners
function setupUI() {
  const button = document.getElementById("generateBtn");
  const keyCode = document.getElementById("keyCode");

  button.addEventListener("click", () => {
    keyCode.textContent = generatePassword();
  });
}

// Call setupUI when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", setupUI);

// Additional utility functions (optional, for future use)
const getRandomUpperCase = () => randomAlpha().toUpperCase();

const generatePasswordWithConfig = (config) => {
  const {
    length = 8,
    includeUpperCase = true,
    includeNumbers = true,
    includeSpecialChars = true,
  } = config;

  let availableFunctions = [randomAlpha];
  if (includeUpperCase) availableFunctions.push(getRandomUpperCase);
  if (includeNumbers) availableFunctions.push(randomNumber);
  if (includeSpecialChars) availableFunctions.push(randomCharacter);

  return Array.from({ length }, () => {
    const randomFunction = getRandomElement(availableFunctions);
    return randomFunction();
  }).join("");
};

// Example usage of generatePasswordWithConfig:
// const customPassword = generatePasswordWithConfig({
//   length: 12,
//   includeUpperCase: true,
//   includeNumbers: true,
//   includeSpecialChars: false
// });
// console.log(customPassword);
