const listItems = document.querySelectorAll("ul li");

for (item of listItems) {
  let i = 0;
  item.textContent = `Updated Item ${i + 1}`;
  i++;
}
