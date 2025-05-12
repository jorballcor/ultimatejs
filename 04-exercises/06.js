/**
 * 
 * Create an algorithm to return how many
 * positive numbers are in an array
 */

let array = [2, 5, 7, 15, -7, -100, 56]

function howManyPositives(arr) {

    let counter = 0;

    for (let number of arr) {

        if (number > 0) {
            counter++;
        }

    }

    return counter;
}

let result = howManyPositives(array);
console.log(result)