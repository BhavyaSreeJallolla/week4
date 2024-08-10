const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a day of the week: ", (input) => {
    let day = input.toLowerCase();

    switch(day) {
        case "monday":
            console.log("It's the start of the week!");
            break;
        case "tuesday":
            console.log("Keep going!");
            break;
        case "wednesday":
            console.log("Halfway there!");
            break;
        case "thursday":
            console.log("Almost the weekend!");
            break;
        case "friday":
            console.log("It's finally Friday!");
            break;
        case "saturday":
            console.log("Enjoy your weekend!");
            break;
        case "sunday":
            console.log("Rest up for the week ahead.");
            break;
        default:
            console.log("Please enter a valid day of the week.");
    }

    rl.close();
});
