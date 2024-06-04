let name = "Jamie"
console.log(name)

let a = 20
let b = 30

let sum = a + b
console.log(sum)


//Global Scope
const  firstName = "Jamie" 
let lastName = "Doe"


// YearofBirth = 1999/10/06 cannot change since this is a const
const YearofBirth = "1999/10/06"


let fullName = firstName + " " + lastName 

{
    let lastName = "Doe inside code block"
    console.log(lastName)
}

console.log(fullName)

//accessing the global variable
let nameglobal;

{
    nameglobal = 'Jake'
    console.log(nameglobal)
}

console.log(nameglobal)



let names = "Jamie"
let age = 24;
let isAdult = true
console.log(typeof names)
console.log(typeof age)
console.log(typeof isAdult)


let person = {

    name : "Jamie",
    age : 24,
    isAdult : true,
}

person['e-mail'] = 'jake@example.com'

console.log(person)
console.log(person['e-mail'])


let persons = {

    name : "Jamie",
    age : 24,
    isAdult : true,
    'email':'jake@example.com',
    hobbies:['reading', 'travelling', 'gardening']
}


console.log(persons.hobbies[0])

let persons2 = {

    name : "Jamie",
    age : 24,
    isAdult : true,
    'email':'jake@example.com',
    hobbies:['reading', 'travelling', 'gardening'],
    greet: function (name){
        console.log('Hello from Postman ' + name)
    }
}

persons2.greet('Jamie')
