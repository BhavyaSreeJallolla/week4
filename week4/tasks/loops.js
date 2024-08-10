console.log("For Loop: Numbers from 1 to 10");//for-loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\nWhile Loop: Numbers from 10 to 1");//whileloop
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

console.log("\nDo...While Loop: First 5 Positive Even Numbers");//do-whileloop
i = 1;
let count = 0;
do {
    if (i % 2 === 0) {
        console.log(i);
        count++;
    }
    i++;
} while (count < 5);
