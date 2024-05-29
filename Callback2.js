function addNumbers(x, y, callback) {
    var result = x + y; // Step 2: Computes the sum of x and y, storing it in 'result'.
    callback(result);   // Step 3: Calls the callback function, passing 'result' as an argument.
}

function displayResult(sum) {
    console.log('Normal Function > The sum is:', sum); // Step 4: Receives 'result' from addNumbers as 'sum' and logs it.
}

addNumbers(3, 4, displayResult); // Step 1: Calls addNumbers with two numbers and displayResult as the callback.

//Arrow Function

function addNumbers(x, y, callback) {
    var result = x + y;
    callback(result);
}

addNumbers(4, 4, (sum) => {console.log('Arrow Function > The sum is:', sum);});



