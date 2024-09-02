const h1 = document.getElementsByTagName("h1")[0];

h1.style.backgroundColor = "red";
h1.style.color = "white";
h1.textContent = "Changed Heading using getElementsByTagName";

const h2 = document.getElementById("main");

h2.style.fontStyle = "italic";
h2.style.color = "green";
h2.style.backgroundColor = "yellow";
h2.style.textAlign = "center";
h2.style.border = "2px solid black";
h2.style.fontSize = "24px";
h2.textContent = "Changed Heading using getElementById";
