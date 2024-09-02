// 1. Change the content of <h1> using getElementsByTagName
const h1 = document.getElementsByTagName("h1")[0];
h1.textContent = "Changed Heading using getElementsByTagName";

// 2. Modify <h2> element using getElementById
const h2 = document.getElementById("main");
h2.textContent = "Changed Heading using getElementById";

// 3. Change all elements with class "cls" using getElementsByClassName
const elementsWithClass = document.getElementsByClassName("cls");
Array.from(elementsWithClass).forEach((element) => {
  element.textContent = "Changed using getElementsByClassName";
});

// 4. Select and change <h4> element using querySelector
const h4 = document.querySelector(".cls-1#id-1");
h4.style.backgroundColor = "lightblue";
h4.textContent = "Changed using querySelector";

// 5. Change styles of <li> items using querySelectorAll
const listItems = document.querySelectorAll("ul li");
listItems.forEach((item, index) => {
  item.style.color = index % 2 === 0 ? "red" : "green";
  item.textContent = `List item ${index + 1}`;
});

// 6. Add a new item to the <ul> list
const ul = document.querySelector("ul");
const newListItem = document.createElement("li");
newListItem.textContent = "5";
ul.appendChild(newListItem);

// 7. Remove <h3> element from the DOM
const h3 = document.querySelector("h3.cls");
if (h3) {
  h3.remove();
}

// 8. Add a new class to <h1>
h1.classList.add("new-class");

// 9. Toggle class "highlight" on <h2>
h2.classList.toggle("highlight");

// 10. Modify attributes of <h4>
h4.setAttribute("title", "This is a tooltip text");

// 11. Change the inner HTML of <ul>
ul.innerHTML = `
  <li>New Item 1</li>
  <li>New Item 2</li>
  <li>New Item 3</li>
`;
