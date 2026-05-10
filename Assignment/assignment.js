//SERVER-SIDE SCRIPTING
//9
let countries = [];

countries.push("India");
countries.push("USA");
countries.push("Canada");
countries.push("Australia");
countries.push("Germany");

let countriesString = countries.toString();
console.log("Array:", countries);
console.log("String:", countriesString);

//pop element
countries.pop();
console.log("Countries after removing an element", countries)

//add element at the end
countries.push("Canada");
console.log("Countries after adding an element at the end", countries)

//add element at the beginning
countries.unshift("Canada");
console.log("Countries after adding an element at the beginning", countries)

//shift and unshift
countries.shift();
console.log("Countries after left shift", countries)

countries.unshift("Canada");
console.log("Countries after unshift", countries)

//merge 2 arrays
let c1 = ["India", "Korea", "Japan"]
let c2 = ["Australia", "England", "Switzerland"]
let concatArray = c1.concat(c2);
console.log(concatArray);

//10
//using class
// class Car{
//     constructor(model, color,  engine){
//         this.brand = brand;
//         this.color = color;
//         this.engine = engine;
//     }

//     performs(){
//         return this.firstName  + "";
//     }
// }

// const car1 = new Car(
//     "BMW",
//     "Black",
//     "BCA"
// )

// console.log(c1);
// console.log(c1.performs());

// //using object literal
// const p2 = {
//     firstName :"Divya",
//     color : "Black",
//      : ["Drawing", "Painting"],
//     engine :"BCA",

//     performs: function(){
//         return this.firstName + ": using object literal "
//     }
// };

// console.log(p2);
// console.log(p2.performs());

// //using object() constructor
// const p3 = new Object();

// p3.firstName = "Shekhar",
// p3.color =  "Sharma",
// p3. =  ["Reading", "Singing"],
// p3.engine = "MCA",
// p3.performs = function(){
//     return this.firstName + ": using object() constructor "
// }

// console.log(p3);
// console.log(p3.performs());


// //using object().create
// const person = {
//     performs : function(){
//         return this.firstName + ": using object().create "
//     }
// }
// const p4 = Object.create(person);

// p4.firstName = "Shekhar",
// p4.color =  "Sharma",
// p4. =  ["Reading", "Singing"],
// p4.engine = "MCA",

// console.log(p4);
// console.log(p4.performs());

// //using constructor function
// function Persons(firstName, color, , engine){
//         this.firstName = firstName;
//         this.color = color;
//         this. = ;
//         this.engine = engine;
//     }
//     this.performs = function(){
//         return this.firstName  + "using constructor function";
//     }
        
// const p5 = new Car(
//     "BMW",
//     "Black",
//     ["Drawing", "Painting"],
//     "BCA"
// )

// console.log(p5);
// console.log(p5.performs());


//11
//using class
class Car{
    constructor(model, color, engine){
        this.model = model;
        this.color = color;
        this.engine = engine;
    }

    performs(){
        return this.model  + "";
    }
}

const car1 = new Car(
    "BMW",
    "Black",
    "petrol"
)

console.log(car1);
console.log(car1.performs());

//using object literal
const car2 = {
    model :"BMW",
    color : "Black",
    engine :"petrol",

    performs: function(){
        return this.model + ": using object literal "
    }
};

console.log(car2);
console.log(car2.performs());

//using object() constructor
const car3 = new Object();

car3.model = "Honda",
car3.color =  "Red",
car3.engine = "Petrol",
car3.performs = function(){
    return this.model + ": using object() constructor "
}

console.log(car3);
console.log(car3.performs());


//using object().create
const carr = {
    performs : function(){
        return this.model + ": using object().create "
    }
}
const car4 = Object.create(person);

car4.model = "Maruti",
car4.color =  "Yellow",
car4.engine = "CNG",

console.log(car4);
console.log(car4.performs());

//using constructor function
function Cars(model, color, engine){
        this.model = model;
        this.color = color;
        this.engine = engine;
    }
    this.performs = function(){
        return this.model  + "using constructor function";
    }
        
const car5 = new Car(
    "BMW",
    "Black",
    ["Drawing", "Painting"],
    "petrol"
)

console.log(car5);
console.log(car5.performs());

