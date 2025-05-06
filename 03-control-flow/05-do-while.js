

let i = 2;
while (i < 2) {

    if (i % 2 == 0) {
        console.log("even number: " + i);
    }
    i++;
}


do {
    if (i % 2 == 0) {
        console.log('Do-while');
        console.log("even number: " + i);
    }
    i++;
} while (i < 2);