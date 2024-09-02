document.addEventListener("DOMContentLoaded", () => {
  const firstElement = document.getElementById("first");
  const secondElement = document.getElementById("second");
  const thirdElement = document.getElementById("third");

  const innerTextResult = document.getElementById("innerTextResult");
  const textContentResult = document.getElementById("textContentResult");
  const innerHTMLResult = document.getElementById("innerHTMLResult");

  innerTextResult.textContent = firstElement.innerText;
  textContentResult.textContent = secondElement.textContent;
  innerHTMLResult.textContent = thirdElement.innerHTML;
});
