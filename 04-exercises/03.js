/**
 * validate index is not lower than 0 and 
 * accessed-element exists
 */

function getByIdx(arr, idx) {

    if (idx < 0) {
        return 'Error: idx lower than zero'
    }

    if (arr.length <= idx) {
        return 'Error: empty array element'
    } else {
        return arr[idx]
    }
}

let result = getByIdx([1, 2], 1);
console.log(result)