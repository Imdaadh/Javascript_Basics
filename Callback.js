function fetchData(callback) {
    setTimeout(() => { // Simulate a delay
        callback('Data loaded');
    }, 1000);
}

fetchData((data) => {
    console.log(data); // Output after delay: Data loaded
});




//Function with a callback
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  // Callback function
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  // Using the callback
  greet("Alice", sayGoodbye); 


