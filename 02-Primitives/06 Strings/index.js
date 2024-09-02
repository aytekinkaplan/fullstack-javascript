message = "Hello World";
console.log(message);

message = "Hello World Again";
console.log(message);

let list = [
  { name: "John", message: "Hello World", age: 34 },
  { name: "Mark", message: "Hello World Again", age: 24 },
  { name: "Joe", message: "Hello World Again", age: 34 },
];

list.map((item) => console.log(item.name));

list.map((item) => console.log(item.age));

list.map((item) => console.log(item.message));

list.map((item) =>
  console.log(typeof item.name, typeof item.message, typeof item.age)
);

message1 = "Hello World";
message2 = "Hello World Again";
message3 = "Hello World Again";

message = message1 + " " + message2 + " " + message3;
console.log(message);

message = `${message1} ${message2} ${message3}`;
console.log(message);

message = message1.concat(" ", message2, " ", message3);
console.log(message);

message = message1.repeat(3);
console.log(message);

message = message1.slice(0, 5);
console.log(message);