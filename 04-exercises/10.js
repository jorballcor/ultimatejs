/**
 * Create an N-array which contains 
 * 1 to N elements 
 * 
 */

let len = 7;

function createArray(n) {

    if (n == 0) {
        return [];
    }

    let collection = []
    for (let i = 0; i < n; i++) {

        collection[i] = i+1
    }

    return collection
}

let result = createArray(len);
console.log(result);