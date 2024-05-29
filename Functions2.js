function myFunction() {
  console.log('Hello, world!');
}

const myFunction = function() {
  console.log('Hello, world!');
};


const myFunction = () => {
  console.log('Hello, world!');
};

const multiply = function(a, b) {
  return a + b;
};

console.log(multiply(2, 3)); // 5


const multiply2 = function(a, b) {
  return a + b;
};

console.log(multiply2(2, 3)); // 5

const multiply3 = function(a, b) {
  return a + b;
};

console.log(multiply3(2, 3)); // 5


const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet('Bob')); // Hello, Bob!
