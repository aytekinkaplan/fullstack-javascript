const calculator = (num1, num2, callback) => {
    return callback(num1, num2);
}

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

console.log(calculator(10, 20, add));;
console.log(calculator(10, 20, subtract));;