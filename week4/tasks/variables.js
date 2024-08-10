// var example
function varTest() {
    var x = 1;
    if (true) {
        var x = 2; // Same variable!
        console.log(x); 
    }
    console.log(x); // 2 (var is function-scoped)
}
varTest();

// let example
function letTest() {
    let y = 1;
    if (true) {
        let y = 2; // Different variable (block-scoped)!
        console.log(y); 
    }
    console.log(y); //(let is block-scoped)
}
letTest();

// const example
function constTest() {
    const z = 1;
    console.log(z); // 1
    // z = 2; // Error: Assignment to constant variable
    const obj = { key: 1 };
    obj.key = 2; // Allowed: properties of const objects can change
    console.log(obj.key); // 2
}
constTest();
