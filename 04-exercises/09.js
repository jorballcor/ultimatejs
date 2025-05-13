/**
 * Make a function to transform a pairs-array 
 * into a collection
 * 
 */

let pairs = [
    [1, { name: "Nicolas"}],
    [2, { name: "Felipe"}],
    [3, { name: "Johann"}],
];

let array = [
    {
        id: 1,
        name: "Nicolas",
    },
    {
        id: 2,
        name: "Felipe",
    },
    {
        id: 3,
        name: "Johann",
    }
];

function toCollection(arr) {

    let collection = [];

    for (let idx in arr) {
        let element = arr[idx]

        result[idx] = {
            id: element[0],
            name: element[1]
        }
    }
    return collection

}

let resultado = toCollection(pairs);
console.log(resultado);