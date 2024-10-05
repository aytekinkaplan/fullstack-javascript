// const list = [
//     "Ali",
//     "Ahmed",
//     "Ahmed",
//     "Abdulrahman",
// ]
// list?.map((item) => console.log(item))

const user = null;

console.log(user?.name);

console.log(user?.message);

console.log(user?.age);

console.log(typeof user?.name, typeof user?.message, typeof user?.age);

function messageToText(name, message, age) {
    return `${name} ${message} ${age}`;
}

console.log(messageToText(user?.name, user?.message, user?.age));


const listed = [
    {name: "Ali", message: "Hello World", age: 34},
    {name: "Ahmed", message: "Hello World Again", age: 24},
    {name: "Ahmed", message: "Hello World Again", age: 34},
];

listed.map(item => console.log(item.name))
listed.map(item => console.log(item.age))
listed.map(item => console.log(item.message))


listed.map(item => console.log(typeof item.name, typeof item.message, typeof item.age))


const people = [
    {name: "Ali", message: "Hello World", age: 34},
    {name: "Ahmed", message: "Hello World Again", age: 24},
    {name: "Ahmed", message: "Hello World Again", age: 34},
];

console.log(people?.map(item => messageToText(item.name, item.message, item.age)));

console.log(people?.name);

