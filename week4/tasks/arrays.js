// 1. Creating Arrays
console.log("Creating Arrays:");
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Favorite Fruits:", fruits);

// 2. Accessing and Modifying Array Elements
console.log("\nAccessing and Modifying Array Elements:");
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

fruits[1] = "Strawberry";
console.log("Modified Fruits:", fruits);

// 3. Array Methods (push, pop, shift, unshift)
console.log("\nArray Methods (push, pop, shift, unshift):");
// Push - Adds an element to the end
fruits.push("Pineapple");
console.log("After Push:", fruits);

// Pop - Removes the last element
fruits.pop();
console.log("After Pop:", fruits);

// Shift - Removes the first element
fruits.shift();
console.log("After Shift:", fruits);

// Unshift - Adds an element to the beginning
fruits.unshift("Blueberry");
console.log("After Unshift:", fruits);

// 4. Array Methods (map, filter)
console.log("\nArray Methods (map, filter):");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map - Square each number
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers:", squaredNumbers);

// Filter - Get only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 5. Array Methods (reduce)
console.log("\nArray Methods (reduce):");
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Numbers:", sum);
