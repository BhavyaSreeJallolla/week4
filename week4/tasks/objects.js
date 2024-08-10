// 1. Object Literals
console.log("Object Literals:");
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180
};

function printBookDetails(book) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Pages: ${book.pages}`);
}

printBookDetails(book);

// 2. Properties and Methods
console.log("\nProperties and Methods:");
const bookWithMethod = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    printSummary: function() {
        console.log(`${this.title} by ${this.author} has ${this.pages} pages.`);
    }
};

bookWithMethod.printSummary();

// 3. This Keyword
console.log("\nThis Keyword:");
const person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        console.log(`Full Name: ${this.firstName} ${this.lastName}`);
    }
};

person.getFullName();

// 4. Constructors and Prototypes
console.log("\nConstructors and Prototypes:");
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.printDetails = function() {
    console.log(`Car: ${this.make} ${this.model} (${this.year})`);
};

const myCar = new Car("Toyota", "Corolla", 2020);
myCar.printDetails();

// 5. ES6 Classes
console.log("\nES6 Classes:");
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    printDetails() {
        console.log(`Animal: ${this.name}, Species: ${this.species}`);
    }
}

const myPet = new Animal("Buddy", "Dog");
myPet.printDetails();
