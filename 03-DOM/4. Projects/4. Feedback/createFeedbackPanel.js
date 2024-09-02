// Create main container
const panelContainer = document.createElement("section");
panelContainer.className = "panel-container";
panelContainer.id = "panel";

// Create title
const title = document.createElement("strong");
title.textContent = "Your Feedback 👀";

// Create ratings container
const ratingsContainer = document.createElement("div");
ratingsContainer.className = "ratings-container";

const container = document.createElement("div");
container.className = "container";

// Array of rating data
const ratings = [
  { icon: "😒", text: "Unhappy" },
  { icon: "😐", text: "Neutral" },
  { icon: "😊", text: "Satisfied" },
];

// Create rating elements
ratings.forEach((rating) => {
  const ratingDiv = document.createElement("div");
  ratingDiv.className = "rating";

  const iconDiv = document.createElement("div");
  iconDiv.className = "icon";
  iconDiv.textContent = rating.icon;

  const smallText = document.createElement("small");
  smallText.textContent = rating.text;

  ratingDiv.appendChild(iconDiv);
  ratingDiv.appendChild(smallText);
  container.appendChild(ratingDiv);
});

ratingsContainer.appendChild(container);

// Create send button
const sendButton = document.createElement("button");
sendButton.className = "btn";
sendButton.id = "send";
sendButton.textContent = "Send Feedback";

// Assemble the panel
panelContainer.appendChild(title);
panelContainer.appendChild(ratingsContainer);
panelContainer.appendChild(sendButton);

// Add the panel to the body
document.body.appendChild(panelContainer);
