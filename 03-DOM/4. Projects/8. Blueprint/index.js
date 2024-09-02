document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addElement");
  const container = document.getElementById("elementContainer");
  let elementCount = 0;

  addButton.addEventListener("click", function () {
    elementCount++;
    const newElement = document.createElement("div");
    newElement.className = "element";
    newElement.innerHTML = `
          <h3>Element ${elementCount}</h3>
          <p>Bu, dinamik olarak oluşturulmuş bir elementtir.</p>
          <button class="removeButton">Elementi Kaldır</button>
      `;
    container.appendChild(newElement);

    const removeButton = newElement.querySelector(".removeButton");
    removeButton.addEventListener("click", function () {
      container.removeChild(newElement);
    });
  });
});
