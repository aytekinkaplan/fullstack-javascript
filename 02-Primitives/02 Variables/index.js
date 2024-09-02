const { name } = require("ejs");

let message = "Hello World";
console.log(message);

message = "Hello World Again";
console.log(message);

let list = [
  { name: "John", message: "Hello World", age: 34 },
  { name: "Mark", message: "Hello World Again", age: 24 },
  { name: "Joe", message: "Hello World Again", age: 34 },
];
let messageToText = (name, message, age) => {
  return `${name} ${message} ${age}`;
};

list.map((item) => {
  console.log(messageToText(item.name, item.message, item.age));
});

list.map((item) => console.log(item.name));

list.map((item) => console.log(item.age));

list.map((item) => console.log(item.message));

list.map((item) =>
  console.log(typeof item.name, typeof item.message, typeof item.age)
);
