function add(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(add(2, 3, 9, 8, 7)); 
console.log(typeof add);
