//Object 


let person = {
    name: 'Alice',
    age: 30,
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};


person.greet(); // Method invocation



// If statement
if (person.age > 18) {
    console.log('You are an adult.');
} else {
    console.log("Sorry, you're too young.");
}


//The function greet within the person object is known as a method. 
//Specifically, it's an example of a method defined within an object in JavaScript. 
//Methods are functions that are associated with an object, and they can use this to access properties and other methods of the same objec