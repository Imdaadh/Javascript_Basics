function greet(name, callbackfunc) {
    const greeting = "Hello, " + name + "!";
    callbackfunc(greeting);
}

// callbackfunc replaced with function

greet("John", function(message) {
console.log(message);});

// Function Expression with Callback:

const greet2 = function(name, callback) {
    const greeting = "Hi, " + name + "!";
    callback(greeting);
};

greet2("Imdaad", function(message){
console.log(message);});

// Arrow Function Call Back

const greet3 = (name, callback) => {
    const greeting = "Hello, " + name + "!";
    callback(greeting);
};

greet3("Doe", function(message) {
    console.log(message);
});

// Named Function 
const greet4 = function greetFunction(name, callback) {
    const greeting = "Hello, " + name + "!";
    callback(greeting);
};

greet4("Bob", function(message) {
    console.log(message);
});


// Arrow Function Callback

const greet5 = (name, callback) => {
    const greeting = "Hello, " + name + "!";
    callback(greeting);
};

greet5("Eva", 
(message) => {console.log(message);}
);

//Arrow Function

const arrowFunction = (age, CBFunction) => {
    
    const name = 'Imdaad is ' + age + " old"
    CBFunction(name)
}


arrowFunction("24", (message)=>{console.log(message)})