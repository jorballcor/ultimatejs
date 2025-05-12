/**
 * Make a function to transform an array
 * into a pair
 * 
 */

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

let pairs = [
    [1, { id: 1, name: "Nicolas"}],
    [2, { id: 2, name: "Felipe"}],
    [3, { id: 3, name: "Johann"}],
];

function toPairs(arr) {

    let result = [];

    for (idx in arr) {

        result[idx] = [
            arr[idx].id, 
            arr[idx]
        ];
    }

    return result;
}

let pairedArray = toPairs(array);
console.log(pairedArray)